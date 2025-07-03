import { z } from "zod";
export const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  surname: z.string().min(2, {
    message: "Surname must be at least 2 characters.",
  }),
  email: z
    .string()
    .min(3, {
      message: "Email must be at least 3 characters.",
    })
    .email({
      message: "Email must contain @",
    }),
  role: z.enum(["facilitator", "learner", "Admin"]),
  province: z.enum([
    "Eastern Cape",
    "Free State",
    "Gauteng",
    "KwaZulu-Natal",
    "Limpopo",
    "Mpumalanga",
    "North West",
    "Northern Cape",
    "Western Cape",
  ]),
  town: z.string().min(2),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters long.",
  }),
});
