// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import ytdl from "ytdl-core";
import { resolve } from "path";
import { Configuration, OpenAIApi } from "openai";
import { Blob } from "buffer";
import { Readable } from "stream";
import axios from "axios";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  async function infogetter() {
    const videoUrl = "https://www.youtube.com/watch?v=tPEE9ZwTmy0";
    const videoId = ytdl.getURLVideoID(videoUrl);
    const info = await ytdl.getInfo(videoId);
    const audioFormats = ytdl.filterFormats(info.formats, "audioonly");
    const audioFormat = ytdl.chooseFormat(audioFormats, {
      quality: "highestaudio",
    });
    const container = audioFormat.container;

    async function transcriber() {
      const fileBuffer = fs.readFileSync(`video.${container}`);
      const buffer = Buffer.from(fileBuffer);

      const transcript = await openai.createTranscription(
        fs.createReadStream(`video.${container}`) as any,
        "whisper-1"
      );

      return transcript.data.text;
    }

    ytdl(videoUrl, { format: audioFormat })
      .pipe(fs.createWriteStream(`video.${container}`))
      .on("finish", async () => {
        console.log("finished writing the file");
        const transcription = await transcriber();
        console.log("finished transcribing");

        console.log(transcription);
        const basePromptPrefix =
          "The following is the transcript of a video. Make study notes using this transcript. Make sure these notes are properly arranged into paragraphs, have bullet points where needed, have headings, and are overall easy to understand. They should cover all the topics which are there in the transcript.";
        const baseCompletion = await openai.createCompletion({
          model:"text-davinci-003",
          // prompt:`${basePromptPrefix}${transcription}`,
          prompt:`${basePromptPrefix}${"so in this video we are going to be learning about how you can type really fast. First, get a good keyboard. Second, practise everyday. Third don't give up. Thanks a lot for watching"}`,
          temperature:0.7,
          max_tokens: 250,

        })
        const promptOutput = baseCompletion.data.choices.pop();

        res.status(200).json({ output: promptOutput });
      }
      
      )
      .on("error", (error) => console.error(error));
    }
    
    infogetter();
}
