"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { signIn } from "@/firebase/auth";
import regExps from "@/regExps";
import { Auth } from "@/models";

export interface SignInFormProps {
  initialFormData?: Auth;
}

export function SignInForm({ initialFormData }: SignInFormProps) {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Auth>({ defaultValues: initialFormData });

  const onSubmit: SubmitHandler<Auth> = async (data) => {
    const user = await signIn(data);

    if (user) {
      console.log("Successfully signed in a user!");
    } else {
      console.log("Unfortunately, user hasn't signed in");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div>
          <label>
            {t("email")}
            <input
              type="email"
              {...register("email", {
                required: t("fieldIsRequired", { fieldName: t("email") }),
                pattern: {
                  value: regExps.email,
                  message: t("fieldIsIncorrect", { fieldName: t("email") }),
                },
              })}
            />
            {errors.email && errors.email.message}
          </label>
        </div>
        <div>
          <label>
            {t("password")}
            <input
              type="password"
              {...register("password", {
                required: t("fieldIsRequired", { fieldName: t("password") }),
                pattern: {
                  value: regExps.password,
                  message: t("fieldIsIncorrect", { fieldName: t("password") }),
                },
                minLength: {
                  value: 8,
                  message: t("fieldMinLengthIs", {
                    fieldName: t("password"),
                    minLength: 8,
                  }),
                },
                maxLength: {
                  value: 24,
                  message: t("fieldMaxLengthIs", {
                    fieldName: t("password"),
                    maxLength: 24,
                  }),
                },
              })}
            />
            {errors.password && errors.password.message}
          </label>
        </div>
      </div>

      <button type="submit">{t("submit")}</button>
    </form>
  );
}
