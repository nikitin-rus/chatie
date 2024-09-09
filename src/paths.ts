interface Paths {
  [key: string]: string;
}

export default {
  root: "/",
  signin: "/auth/signin",
  signup: "/auth/signup",
  chats: "/chats",
} as const satisfies Paths;
