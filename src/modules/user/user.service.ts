import { User } from "./user.model";

type CreateUserInput = {
  name: string;
  preferredLanguage?: "hi" | "en" | "mr";
  phone?: string;
};

export const createUser = async (data: CreateUserInput) => {
  const user = await User.create({
    name: data.name,
    preferredLanguage: data.preferredLanguage || "hi",
    phone: data.phone,
    isGuest: !data.phone,
  });

  return user;
};

export const findUserByPhone = async (phone: string) => {
  return User.findOne({ phone });
};
