import { z } from "zod";

export const CrateUserSchema = z.object({
  username: z.string().min(3).max(20).email(),
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

export type signinType = z.infer<typeof SignInUserSchema>

export type signupType = z.infer<typeof CrateUserSchema>
export type createRoomType = z.infer<typeof CreateRoomSchema>
