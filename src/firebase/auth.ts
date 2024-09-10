import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged as _onAuthStateChanged,
} from "firebase/auth";

import { Auth } from "@/models";
import clientApp from "./clientApp";

export const auth = getAuth(clientApp);

export function onAuthStateChanged(cb: () => void) {
  return _onAuthStateChanged(auth, cb);
}

export async function signUp({ email, password }: Auth) {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    return user;
  } catch (error) {
    console.error("Error occured while signing a user up!");
  }

  return null;
}

export async function signIn({ email, password }: Auth) {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);

    return user;
  } catch (error) {
    console.error("Error occured while signing a user in!");
  }
}

export async function signOut() {
  try {
    await auth.signOut();
  } catch (error) {
    console.error("Error occured while signing a user out!");
  }
}
