import { z } from "zod";

export const contactSchema = z.object({
  ownerName: z.string().trim().min(2, "Please enter your name"),
  horseName: z.string().trim().min(1, "Please enter your horse's name"),
  service: z.string().trim().min(1, "Please select a topic"),
  email: z.string().trim().email("Please enter a valid email address"),
  phone: z.string().trim().min(6, "Please enter a contact number"),
  message: z.string().trim().min(10, "Please add a few details so I can help"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
