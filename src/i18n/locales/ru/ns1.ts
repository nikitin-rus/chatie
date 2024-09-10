import { AppDictionary } from "@/i18n/types";

export default {
  pages: {
    main: {
      chatie: "Chatie ✨",
      chatieDescription: "Chatie - это вебсайт для переписок с твоими друзьями",
      goToSignIn: "Войти",
    },
    auth: {
      signIn: {
        title: "Вход",
        doNotHaveAnAccount: "Еще нет аккаунта?",
        signUp: "Зарегистрируйтесь",
      },
      signUp: {
        title: "Регистрация",
        alreadyHaveAnAccount: "Уже есть аккаунт?",
        signIn: "Войдите",
      },
    },
    chats: {
      menu: {
        settings: "Настройки",
        logOut: "Выйти",
      },
      sidebar: {
        noChats: "У вас еще нет чатов! 😢",
        findUsers: "Вы можете найти пользователей по username",
        userName: "Username",
      },
    },
  },
  forms: {
    buttons: {
      submit: "Подтвердить",
    },
    errors: {
      fieldIsRequired: "Поле необходимо заполнить",
      fieldIsIncorrect: "Поле заполнено некорректно",
      fieldMinLengthIs: "Минимальная длина поля {{minLength}}",
      fieldMaxLengthIs: "Максимальная длина поля {{maxLength}}",
    },
    inputs: {
      email: "Почта",
      password: "Пароль",
    },
  },
} as const satisfies AppDictionary;
