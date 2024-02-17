export const Post = {
  title: "Post",
  type: "object",
  properties: {
    postId: { type: "string" },
    titleTx: { type: "string" },
    postTx: { type: "string" },
    author: {
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
    comments: {
      type: "array",
      items: {
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
      },
    },
  },
  required: ["postId", "titleTx"],
  $id: "Post.json",
} as const;
