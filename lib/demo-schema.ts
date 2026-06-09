import { z } from "zod";

export const demoRequestSchema = z.object({
  name: z.string().trim().min(1, "Your name is required").max(120),
  email: z.string().trim().email("Enter a valid work email").max(200),
  company: z.string().trim().min(1, "Company is required").max(160),
  sells: z.string().trim().max(300).optional().or(z.literal("")),
  systemToday: z.string().trim().max(160).optional().or(z.literal("")),
  teamSize: z.string().trim().max(60).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

export type DemoRequest = z.infer<typeof demoRequestSchema>;
