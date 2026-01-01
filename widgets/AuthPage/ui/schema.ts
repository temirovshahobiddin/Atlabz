import { z } from "zod";

// Маска: +7 (999) 999-99-99
const phoneRegex = /^\+\d{1,3} \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

export const emailSchema = z.object({
  email: z.string().email("Некорректная почта"),
  password: z.string().min(8, "Пароль должен быть минимум 8 символов"),
});

export const phoneSchema = z.object({
  phone: z.string().regex(phoneRegex, "Некорректный номер телефона"),
  password: z.string().min(8, "Пароль должен быть минимум 8 символов"),
});

export type FormType = z.infer<typeof phoneSchema> | z.infer<typeof emailSchema>;
