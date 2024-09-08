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
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";

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
      <Box display="flex" flexDirection="column" rowGap="2rem">
        <Box display="flex" flexDirection="column" rowGap="1.5rem">
          <FormControl
            display="flex"
            flexDirection="column"
            rowGap="0.5rem"
            isInvalid={!!errors.email}
            isRequired={true}
          >
            <FormLabel>{t("forms.inputs.email")}</FormLabel>

            <Input
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
              <FormErrorMessage>{errors.email.message}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl
            display="flex"
            flexDir="column"
            rowGap="0.5rem"
            isInvalid={!!errors.password}
            isRequired={true}
          >
            <FormLabel>{t("forms.inputs.password")}</FormLabel>

            <Input
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
              <FormErrorMessage>{errors.password.message}</FormErrorMessage>
            )}
          </FormControl>
        </Box>

        <Button
          type="submit"
          isDisabled={!isValid || isSubmitting}
          isLoading={isSubmitting}
        >
          {t("forms.buttons.submit")}
        </Button>
      </Box>
    </form>
  );
}
