export const Comment = {
  title: "Comment",
  type: "object",
  properties: {
    commentId: { type: "string" },
    commentTx: { type: "string" },
    commenter: {
      title: "User",
      type: "object",
      properties: {
        userId: { type: "string" },
        userNm: { type: "string" },
        emailAddr: { type: "string" },
      },
      required: ["userId", "userNm"],
      $id: "User.json",
    },
  },
  required: ["commentId", "commentTx", "commenter"],
  $id: "Comment.json",
} as const;
