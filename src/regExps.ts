interface RegExps {
  [key: string]: RegExp;
}

export default {
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  password: /^[\w(){}^$+*@#%!&]{8,}$/,
} as const satisfies RegExps;
