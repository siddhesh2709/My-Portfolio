# Cloudflare R2 CORS Configuration

## Required Steps to Fix CORS Errors

Your R2 bucket needs CORS (Cross-Origin Resource Sharing) configuration to allow uploads from your local development server and production domain.

### Steps:

1. **Go to Cloudflare Dashboard**
   - Visit: https://dash.cloudflare.com/
   - Navigate to **R2** in the left sidebar

2. **Select Your Bucket**
   - Click on bucket: **portfolio-assets**

3. **Configure CORS**
   - Go to **Settings** tab
   - Scroll to **CORS Policy** section
   - Click **Edit CORS policy** or **Add CORS policy**

4. **Add This CORS Configuration:**

```json
[
  {
    "AllowedOrigins": [
      "http://localhost:5175",
      "http://localhost:5173",
      "http://localhost:3000",
      "https://your-production-domain.com"
    ],
    "AllowedMethods": [
      "GET",
      "PUT",
      "POST",
      "DELETE",
      "HEAD",
      "OPTIONS"
    ],
    "AllowedHeaders": [
      "*"
    ],
    "ExposeHeaders": [
      "ETag",
      "x-amz-request-id"
    ],
    "MaxAgeSeconds": 3600
  }
]
```

**CRITICAL**: After adding CORS, you may need to wait 1-2 minutes for it to take effect.

5. **Update for Production**
   - Replace `https://your-production-domain.com` with your actual domain when deploying

6. **Save the Configuration**

### Alternative: Allow All Origins (Development Only)

For development purposes only, you can temporarily use:

```json
[
  {
    "AllowedOrigins": ["*"],
    "AllowedMethods": ["GET", "PUT", "POST", "DELETE", "HEAD"],
    "AllowedHeaders": ["*"],
    "ExposeHeaders": ["ETag"],
    "MaxAgeSeconds": 3600
  }
]
```

⚠️ **WARNING**: Never use `"AllowedOrigins": ["*"]` in production!

### After Configuration:

1. **Restart your dev server** (if it's running)
2. **Clear browser cache** or use Incognito mode
3. **Try uploading images again**

---

## What Was Fixed in Code:

✅ Environment variables configured in `.env`  
✅ Fixed `forcePathStyle: false` for R2 compatibility  
✅ Added `ACL: "public-read"` for public access  
✅ Improved error logging

## Testing:

After applying CORS configuration:
1. Open your admin panel
2. Try uploading an avatar or project image
3. Check the browser console - you should see "Upload successful" instead of CORS errors

## Security Note:

⚠️ Your R2 credentials are currently in the frontend code, which is a security risk. Consider:
- Moving uploads to a backend/serverless function
- Using Cloudflare Workers for secure uploads
- Implementing signed URLs

For production deployment, implement proper backend upload handling.
