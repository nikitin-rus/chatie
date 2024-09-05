import { AppDictionary } from "@/i18n/types";

export default {
  hello: "Hello",
  signIn: "Sign In",
  signUp: "Sign Up",
  signOut: "Sign Out",
  doNotHaveAnAccount: "Don't have an account?",
  alreadyHaveAnAccount: "Already have an account?",
  email: "Email",
  password: "Password",
  submit: "Submit",
  fieldIsRequired: "{{fieldName}} is required",
  fieldIsIncorrect: "{{fieldName}} is incorrect",
  fieldMinLengthIs: "{{fieldName}} min length is {{minLength}}",
  fieldMaxLengthIs: "{{fieldName}} max length is {{maxLength}}",
} as const satisfies AppDictionary;
