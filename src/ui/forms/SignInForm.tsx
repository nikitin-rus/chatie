"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import regExps from "@/regExps";
import { Auth } from "@/models";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { VisibilityOff } from "../icons/VisibilityOff";
import { VisibilityOn } from "../icons/VisibilityOn";
import { useRouter } from "next/navigation";
import paths from "@/paths";
import { signIn } from "@/firebase/auth";

export interface SignInFormProps {
  initialFormData?: Auth;
}

export function SignInForm({ initialFormData }: SignInFormProps) {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const { t } = useTranslation();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<Auth>({ defaultValues: initialFormData });

  const onSubmit: SubmitHandler<Auth> = async (data) => {
    const user = await signIn(data);

    if (user) {
      console.log("Successfully signed in a user!");
    } else {
      console.log("Unfortunately, user hasn't signed in");
    }

    router.push(paths.chats);
  };

  function handleVisibilityClick() {
    setIsPasswordShown(!isPasswordShown);
  }

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} w="100%">
      <Flex flexDir="column" rowGap="2rem">
        <Flex flexDir="column" rowGap="1.5rem">
          <FormControl
            display="flex"
            flexDir="column"
            rowGap="0.5rem"
            isInvalid={!!errors.email}
            isRequired={true}
          >
            <FormLabel textStyle="body4">{t("forms.inputs.email")}</FormLabel>

            <Input
              type="email"
              placeholder={t("forms.inputs.email")}
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

            <InputGroup>
              <Input
                pr="3.5rem"
                type={isPasswordShown ? "text" : "password"}
                placeholder={t("forms.inputs.password")}
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

              <InputRightElement h="3.5rem" w="3.5rem">
                <Box _hover={{ cursor: "pointer" }}>
                  {isPasswordShown ? (
                    <VisibilityOff onClick={handleVisibilityClick} />
                  ) : (
                    <VisibilityOn onClick={handleVisibilityClick} />
                  )}
                </Box>
              </InputRightElement>
            </InputGroup>

            {errors.password && (
              <FormErrorMessage>{errors.password.message}</FormErrorMessage>
            )}
          </FormControl>
        </Flex>

        <Button
          type="submit"
          isDisabled={!isValid || isSubmitting}
          isLoading={isSubmitting}
        >
          {t("forms.buttons.submit")}
        </Button>
      </Flex>
    </Box>
  );
}
