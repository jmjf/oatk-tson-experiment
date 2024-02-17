export const User = {
  title: "User",
  type: "object",
  properties: {
    userId: { type: "string" },
    userNm: { type: "string" },
    emailAddr: { type: "string" },
  },
  required: ["userId", "userNm"],
  $id: "User.json",
} as const;
