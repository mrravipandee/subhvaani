import cloudinary from "../../config/cloudinary";

export const uploadImage = async (base64: string) => {
  const result = await cloudinary.uploader.upload(base64, {
    folder: "subhvaani/images",
    resource_type: "image",
    transformation: [
      { width: 1080, crop: "scale" },
      { quality: "auto:good" },
      { fetch_format: "auto" },
    ],
  });

  return result.secure_url;
};

export const uploadAudio = async (base64: string) => {
  const result = await cloudinary.uploader.upload(base64, {
    folder: "subhvaani/audio",
    resource_type: "video", 
    transformation: [{ quality: "auto" }],
  });

  return result.secure_url;
};