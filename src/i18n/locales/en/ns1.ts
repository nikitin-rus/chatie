import { AppDictionary } from "@/i18n/types";

export default {
  pages: {
    main: {
      chatie: "Chatie ✨",
      chatieDescription: "Chatie is a website for chatting with your friends",
      goToSignIn: "Go to sign in",
    },
    auth: {
      signIn: {
        title: "Sign In",
        doNotHaveAnAccount: "Don't have an account?",
        signUp: "Sign Up",
      },
      signUp: {
        title: "Sign Up",
        alreadyHaveAnAccount: "Already have an account?",
        signIn: "Sign In",
      },
    },
  },
  forms: {
    buttons: {
      submit: "Submit",
    },
    errors: {
      fieldIsRequired: "{{fieldName}} is required",
      fieldIsIncorrect: "{{fieldName}} is incorrect",
      fieldMinLengthIs: "{{fieldName}} min length is {{minLength}}",
      fieldMaxLengthIs: "{{fieldName}} max length is {{maxLength}}",
    },
    inputs: {
      email: "Email",
      password: "Password",
    },
  },
} as const satisfies AppDictionary;
