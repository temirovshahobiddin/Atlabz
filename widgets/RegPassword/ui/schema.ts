// schema.ts
import { z } from "zod";

export const passwordSchema = z
  .object({
    password: z.string().min(8, "Пароль должен быть минимум 8 символов"),
    confirmPassword: z.string().min(8, "Подтвердите пароль"),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"], // ошибка будет у confirmPassword
  });

export type PasswordFormType = z.infer<typeof passwordSchema>;
