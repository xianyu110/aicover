import AWS from "aws-sdk";
import { Readable } from "stream";
import axios from "axios";
import fs from "fs";

const awsConfig = {
  accessKeyId: process.env.AWS_AK,
  secretAccessKey: process.env.AWS_SK,
  region: process.env.AWS_REGION || 'us-west-1',
};

if (!awsConfig.accessKeyId || !awsConfig.secretAccessKey) {
  throw new Error('AWS credentials are not configured properly');
}

AWS.config.update(awsConfig);

const s3 = new AWS.S3();

export async function downloadAndUploadImage(
  imageUrl: string,
  bucketName: string,
  s3Key: string
) {
  try {
    const response = await axios({
      method: "GET",
      url: imageUrl,
      responseType: "stream",
    });

    const uploadParams = {
      Bucket: bucketName,
      Key: s3Key,
      Body: response.data as Readable,
    };

    return s3.upload(uploadParams).promise();
  } catch (e) {
    console.log("upload failed:", e);
    throw e;
  }
}

export async function downloadImage(imageUrl: string, outputPath: string) {
  try {
    const response = await axios({
      method: "GET",
      url: imageUrl,
      responseType: "stream",
    });

    return new Promise((resolve, reject) => {
      const writer = fs.createWriteStream(outputPath);
      response.data.pipe(writer);

      let error: Error | null = null;
      writer.on("error", (err) => {
        error = err;
        writer.close();
        reject(err);
      });

      writer.on("close", () => {
        if (!error) {
          resolve(null);
        }
      });
    });
  } catch (e) {
    console.log("upload failed:", e);
    throw e;
  }
}
