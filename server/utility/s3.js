import AWS from "aws-sdk";
import dotenv from "dotenv";
dotenv.config();


// AWS S3 bucket
const s3bucket = new AWS.S3({
    accessKeyId: process.env.AWS_S3_ACCESS_KEY,
    secretAccessKey: process.env.AWS_S3_SECRET_KEY,
    region: "ap-south-1",
});

export const s3upload=(option)=>{
    return new Promise((resolve, reject) => {
        s3bucket.upload(option,(error,data)=>{
            if(error) return reject(error);
            return resolve(data);
        })
    })
}