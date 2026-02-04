import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const r2Client = new S3Client({
    region: "auto",
    endpoint: import.meta.env.VITE_R2_ENDPOINT,
    credentials: {
        accessKeyId: import.meta.env.VITE_R2_ACCESS_KEY_ID || "",
        secretAccessKey: import.meta.env.VITE_R2_SECRET_ACCESS_KEY || "",
    },
});

export const uploadToR2 = async (file: File | Blob, fileName: string): Promise<string> => {
    const bucketName = import.meta.env.VITE_R2_BUCKET_NAME;
    const publicUrl = import.meta.env.VITE_R2_PUBLIC_URL;

    if (!bucketName || !publicUrl) {
        throw new Error("R2 Configuration missing");
    }

    // Convert Blob to ArrayBuffer
    const arrayBuffer = await file.arrayBuffer();

    const command = new PutObjectCommand({
        Bucket: bucketName,
        Key: fileName,
        Body: new Uint8Array(arrayBuffer),
        ContentType: "image/jpeg", // You can refine this based on file type
        // Note: Public access must be configured on the R2 bucket
    });

    try {
        await r2Client.send(command);
        // Remove trailing slash from publicUrl if present
        const cleanUrl = publicUrl.replace(/\/$/, "");
        return `${cleanUrl}/${fileName}`;
    } catch (error) {
        console.error("Error uploading to R2:", error);
        throw error;
    }
};
