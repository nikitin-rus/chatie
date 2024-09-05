import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import firebaseApp from "./init";
import { Auth } from "@/models";

export const auth = getAuth(firebaseApp);

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
