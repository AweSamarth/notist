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
  
  
async function callWhisper() {
  try {
    const response = await axios.get("https://www.youtube.com/watch?v=tPEE9ZwTmy0", {
      responseType: "arraybuffer",
    });
    console.log("heres the response")
    console.log(response)
    console.log("that waws the response")
    const inputStream = arrayBufferToStream(response.data);

    const resp = await openai.createTranslation(inputStream as any, "whisper-1");

    res.status(200).json({ name: resp.data });
  //  return resp.data

  } catch (error) {
    console.error(error);
  }
}

callWhisper();



function arrayBufferToStream(buffer:Buffer) {
  const readable = new Readable({
    read() {
      this.push(Buffer.from(buffer));
      this.push(null);
    },
  });
  return readable;
}




/*
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
      const buffer = Buffer.from(fileBuffer)

      const transcript = await openai.createTranscription(fs.createReadStream(`video.${container}`) as any, "whisper-1");

      return transcript.data.text;
    }

    ytdl(videoUrl, { format: audioFormat })
      .pipe(fs.createWriteStream(`video.${container}`))
      .on("finish", async () => {
        console.log("finished writing the file");
        const transcription = await transcriber();
        console.log("finished transcribing");

        console.log(transcription);

        res.status(200).json({ name: transcription });
      })
      .on("error", (error) => console.error(error));
  }

  infogetter();
  */
 



}
