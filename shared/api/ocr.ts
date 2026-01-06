import apiClient from "./client";

export interface OcrResult {
  id: number;
  text: string;
  status: string;
  created_at: string;
}

export const ocrApi = {
  uploadImage: (image: File) => {
    const formData = new FormData();
    formData.append("image", image);
    return apiClient<OcrResult>("/ocr/tasks/", {
      method: "POST",
      body: formData,
      isFormData: true,
    });
  },

  getResult: (id: number) => apiClient<OcrResult>(`/ocr/tasks/${id}`),
};
