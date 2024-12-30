import { z } from "zod";

export const experienceValidationSchema = z.object({
  type: z.literal("experience").optional(), // Ensures the type is exactly "experience"
  company: z.string().min(1, "Company name is required."), // At least one character
  position: z.string().min(2, "Position must be at least 2 characters."), // At least 2 characters
  duration: z.string().regex(
    /^[A-Za-z]{3}\s\d{4}\s-\s[A-Za-z]{3}\s\d{4}$/,
    "Duration must be in the format 'MMM YYYY - MMM YYYY'."
  ), // Validates the format
  description: z
    .string()
    .min(3, "Description must be at least 10 characters.") // Minimum length
    .max(500, "Description cannot exceed 500 characters."), // Optional maximum length
});


export const educationValidationSchema = z.object({
  type: z.literal("education").optional(),
  institution: z
    .string()
    .min(1, { message: "Institution name is required" })
    .max(100, { message: "Institution name must be less than 100 characters" }),
  qualification: z
    .string()
    .min(1, { message: "Qualification is required" })
    .max(100, { message: "Qualification must be less than 100 characters" }),
  duration: z
    .string()
    .min(1, { message: "Duration is required" })
    .regex(
      /^[a-zA-Z]+\s\d{4}\s-\s[a-zA-Z]+\s\d{4}$/,
      { message: "Duration must follow the format: 'Jan 2022 - Dec 2023'" }
    ),
  description: z
    .string()
    .min(1, { message: "Description is required" })
    .max(500, { message: "Description must be less than 500 characters" }),
});