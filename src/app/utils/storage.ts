export const uploadToR2 = async (file: File | Blob, fileName: string): Promise<string> => {
    const publicUrl = import.meta.env.VITE_R2_PUBLIC_URL;

    if (!publicUrl) {
        throw new Error("VITE_R2_PUBLIC_URL is missing");
    }

    try {
        const contentType = file instanceof File && file.type ? file.type : "application/octet-stream";
        console.log("Attempting R2 upload...", { fileName });

        const signResponse = await fetch("/api/r2/sign", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ key: fileName, contentType }),
        });

        if (!signResponse.ok) {
            const message = await signResponse.text();
            throw new Error(`Failed to sign upload: ${signResponse.status} ${message}`);
        }

        const { uploadUrl, publicUrl: signedPublicUrl } = (await signResponse.json()) as {
            uploadUrl: string;
            publicUrl?: string;
        };

        const putResponse = await fetch(uploadUrl, {
            method: "PUT",
            headers: { "Content-Type": contentType },
            body: file,
        });

        if (!putResponse.ok) {
            const errorText = await putResponse.text();
            throw new Error(`R2 upload failed: ${putResponse.status} ${errorText}`);
        }

        const cleanUrl = publicUrl.replace(/\/$/, "");
        const finalUrl = signedPublicUrl || `${cleanUrl}/${fileName}`;
        console.log("Upload successful:", finalUrl);
        return finalUrl;
    } catch (error) {
        console.error("Error uploading to R2:", error);
        throw error;
    }
};
