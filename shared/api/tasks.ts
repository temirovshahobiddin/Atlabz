import apiClient from "./client";

export interface Task {
  id: number;
  title: string;
  description?: string;
  initial_text?: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface CreateTaskPayload {
  title: string;
  description?: string;
  initial_text?: string;
}

export interface ChatMessage {
  id: number;
  task: number;
  content: string;
  role: "user" | "assistant";
  created_at: string;
}

export interface ChatStatus {
  status: string;
  is_processing: boolean;
}

export const tasksApi = {
  getAll: () => apiClient<Task[]>("/tasks/"),

  getById: (id: number) => apiClient<Task>(`/tasks/${id}/`),

  create: (data: CreateTaskPayload) =>
    apiClient<Task>("/tasks/", {
      method: "POST",
      body: data,
    }),

  update: (id: number, data: Partial<CreateTaskPayload>) =>
    apiClient<Task>(`/tasks/${id}/`, {
      method: "PUT",
      body: data,
    }),

  delete: (id: number) =>
    apiClient<void>(`/tasks/${id}/`, {
      method: "DELETE",
    }),

  getChatStatus: (taskId: number) =>
    apiClient<ChatStatus>(`/tasks/${taskId}/chat/status/`),

  getChatMessages: (taskId: number) =>
    apiClient<ChatMessage[]>(`/tasks/chat-messages?task=${taskId}`),

  sendChatMessage: (taskId: number, content: string) =>
    apiClient<ChatMessage>("/tasks/chat-messages/", {
      method: "POST",
      body: { task: taskId, content },
    }),
};
