import { z } from "zod";

export const CrateUserSchema = z.object({
     username: z.string().min(3).max(20),
     password: z.string().min(6).max(100),
     name: z.string().min(1).max(50)
})

export const SignInUserSchema = CrateUserSchema.pick({
     username: true,
     password: true,
})

export const CreateRoomSchema = CrateUserSchema.pick({
     name: true
})