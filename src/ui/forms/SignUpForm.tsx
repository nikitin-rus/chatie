"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { signUp } from "@/firebase/auth";
import regExps from "@/regExps";
import { Auth } from "@/models";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  OutlinedInput,
} from "@mui/material";

export interface SignUpFormProps {
  initialFormData?: Auth;
}

export function SignUpForm({ initialFormData }: SignUpFormProps) {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<Auth>({ defaultValues: initialFormData });

  const onSubmit: SubmitHandler<Auth> = async (data) => {
    const user = await signUp(data);

    if (user) {
      console.log("Successfully signed up a new user!");
    } else {
      console.log("Unfortunately, user hasn't signed up");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <Box sx={{ display: "flex", flexDirection: "column", rowGap: "2rem" }}>
        <Box
          sx={{ display: "flex", flexDirection: "column", rowGap: "1.5rem" }}
        >
          <FormControl
            sx={{ display: "flex", flexDirection: "column", rowGap: "0.5rem" }}
            error={!!errors.email}
            required
          >
            <FormLabel>{t("forms.inputs.email")}</FormLabel>

            <OutlinedInput
              type="email"
              {...register("email", {
                required: t("forms.errors.fieldIsRequired", {
                  fieldName: t("forms.inputs.email"),
                }),
                pattern: {
                  value: regExps.email,
                  message: t("forms.errors.fieldIsIncorrect", {
                    fieldName: t("forms.inputs.email"),
                  }),
                },
              })}
            />

            {errors.email && (
              <FormHelperText>{errors.email.message}</FormHelperText>
            )}
          </FormControl>

          <FormControl
            sx={{ display: "flex", flexDirection: "column", rowGap: "0.5rem" }}
            error={!!errors.password}
            required
          >
            <FormLabel>{t("forms.inputs.password")}</FormLabel>

            <OutlinedInput
              type="password"
              {...register("password", {
                required: t("forms.errors.fieldIsRequired", {
                  fieldName: t("forms.inputs.password"),
                }),
                pattern: {
                  value: regExps.password,
                  message: t("forms.errors.fieldIsIncorrect", {
                    fieldName: t("forms.inputs.password"),
                  }),
                },
                minLength: {
                  value: 8,
                  message: t("forms.errors.fieldMinLengthIs", {
                    fieldName: t("forms.inputs.password"),
                    minLength: 8,
                  }),
                },
                maxLength: {
                  value: 24,
                  message: t("forms.errors.fieldMaxLengthIs", {
                    fieldName: t("forms.inputs.password"),
                    maxLength: 24,
                  }),
                },
              })}
            />

            {errors.password && (
              <FormHelperText>{errors.password.message}</FormHelperText>
            )}
          </FormControl>
        </Box>

        <Button
          variant="contained"
          type="submit"
          disabled={!isValid || isSubmitting}
        >
          {t("forms.buttons.submit")}
        </Button>
      </Box>
    </form>
  );
}
