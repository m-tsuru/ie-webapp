"use client";

import { signInWithOAuth } from "@/utils/auth-helper/client";
import { VStack } from "@yamada-ui/react";
import { GoogleLoginButton } from "react-social-login-buttons";

const OAuthLoginButtons = () => {
  return (
    <VStack>
      <GoogleLoginButton
        onClick={() => {
          signInWithOAuth("google", "/");
        }}
      />
    </VStack>
  );
};

export default OAuthLoginButtons;
