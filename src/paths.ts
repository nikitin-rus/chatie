interface Paths {
  [key: string]: string;
}

export const publicPaths = {
  root: "/",
  signin: "/auth/signin",
  signup: "/auth/signup",
};

export const privatePaths = {
  chats: "/chats",
};

export default {
  ...publicPaths,
  ...privatePaths,
} as const satisfies Paths;
