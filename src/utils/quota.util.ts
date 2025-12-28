import { User } from "../modules/user/user.model";

const DAILY_FREE_LIMIT = 10;

export const checkAndUpdateQuota = async (userId: string) => {
  const user = await User.findById(userId);

  if (!user) throw new Error("User not found");

  const today = new Date().toISOString().split("T")[0];

  if (user.lastUsageDate !== today) {
    user.dailyUsageCount = 0;
    user.lastUsageDate = today;
  }

  if (user.dailyUsageCount >= DAILY_FREE_LIMIT) {
    throw new Error("Daily free limit reached");
  }

  user.dailyUsageCount += 1;
  await user.save();
};
