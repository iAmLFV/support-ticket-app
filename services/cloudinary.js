const CLOUD_NAME = process.env.EXPO_PUBLIC_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = process.env.EXPO_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

// Uploads the picked image to Cloudinary and returns its public URL
export async function uploadImageToCloudinary(image) {
  const data = new FormData();
  data.append('file', {
    uri: image.uri,                          // Image location on the phone
    type: image.mimeType || 'image/jpeg',    // Image type
    name: image.fileName || 'screenshot.jpg', // File name
  });
  data.append('upload_preset', UPLOAD_PRESET);

  const response = await fetch(
    https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload,
    { method: 'POST', body: data }
  );
  const result = await response.json();

  if (!response.ok || !result.secure_url) {
    throw new Error(result.error?.message || 'Image upload failed');
  }
  return result.secure_url;                  // The public image URL
}