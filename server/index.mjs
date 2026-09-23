import express from "express";
import dotenv from "dotenv";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

dotenv.config();

const required = [
  "R2_ACCESS_KEY_ID",
  "R2_SECRET_ACCESS_KEY",
  "R2_ENDPOINT",
  "R2_BUCKET_NAME",
];

for (const key of required) {
  if (!process.env[key]) {
    throw new Error(`Missing required env var: ${key}`);
  }
}

const r2Client = new S3Client({
  region: "auto",
  endpoint: process.env.R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
  forcePathStyle: false,
});

const app = express();
app.use(express.json({ limit: "5mb" }));

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/r2/sign", async (req, res) => {
  try {
    const { key, contentType } = req.body || {};

    if (!key || typeof key !== "string") {
      return res.status(400).json({ error: "key is required" });
    }

    const command = new PutObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME,
      Key: key,
      ContentType: typeof contentType === "string" && contentType ? contentType : "application/octet-stream",
    });

    const uploadUrl = await getSignedUrl(r2Client, command, { expiresIn: 60 });
    const publicBase = process.env.R2_PUBLIC_URL || "";
    const publicUrl = publicBase ? `${publicBase.replace(/\/$/, "")}/${key}` : "";

    return res.json({ uploadUrl, publicUrl });
  } catch (error) {
    console.error("Failed to sign R2 upload", error);
    return res.status(500).json({ error: "Failed to sign upload" });
  }
});

const port = Number(process.env.R2_SIGNER_PORT || 8787);
app.listen(port, () => {
  console.log(`R2 signer listening on http://localhost:${port}`);
});
