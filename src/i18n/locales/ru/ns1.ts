import { AppDictionary } from "@/i18n/types";

export default {
  hello: "Привет",
  signIn: "Вход",
  signUp: "Регистрация",
  signOut: "Выход",
  doNotHaveAnAccount: "Еще нет аккаунта?",
  alreadyHaveAnAccount: "Уже есть аккаунт?",
  email: "Почта",
  password: "Пароль",
  submit: "Подтвердить",
  fieldIsRequired: "Поле необходимо заполнить",
  fieldIsIncorrect: "Поле заполнено некорректно",
  fieldMinLengthIs: "Минимальная длина поля {{minLength}}",
  fieldMaxLengthIs: "Максимальная длина поля {{maxLength}}",
} as const satisfies AppDictionary;
