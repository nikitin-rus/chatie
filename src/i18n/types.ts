export interface AppDictionary {
  pages: {
    main: {
      chatie: string;
      chatieDescription: string;
      goToSignIn: string;
    };
    auth: {
      signIn: {
        title: string;
        doNotHaveAnAccount: string;
        signUp: string;
      };
      signUp: {
        title: string;
        alreadyHaveAnAccount: string;
        signIn: string;
      };
    };
    chats: {
      sidebar: {
        userName: string;
        noChats: string;
        findUsers: string;
      };
      menu: {
        settings: string;
        logOut: string;
      };
    };
  };
  forms: {
    inputs: {
      email: string;
      password: string;
    };
    buttons: {
      submit: string;
    };
    errors: {
      fieldIsRequired: string;
      fieldIsIncorrect: string;
      fieldMinLengthIs: string;
      fieldMaxLengthIs: string;
    };
  };
}
