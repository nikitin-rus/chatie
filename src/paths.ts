interface Paths {
  [key: string]: string;
}

export default {
  root: "/",
  signin: "/auth/signin",
  signup: "/auth/signup",
} as const satisfies Paths;
