import { SignOut } from "@/utils/auth-helper/server";
import { createClient } from "@/utils/supabase/server";
import { User as UserIcon } from "@yamada-ui/lucide";
import {
  Box,
  Center,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@yamada-ui/react";
import Link from "next/link";
import React from "react";

const User: React.FC = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  const user = data.user?.user_metadata;

  return (
    <Box backgroundColor="white" borderRadius="full">
      <Menu animation="top">
        <MenuButton
          size="lg"
          as={IconButton}
          variant="unstyled"
          icon={
            user ? (
              <Image
                src={user?.avatar_url}
                width="48px"
                height="48px"
                borderRadius="full"
              />
            ) : (
              <Center
                w="48px"
                height="48px"
                borderWidth="1px"
                borderRadius="full"
              >
                <UserIcon color="gray.400" fontSize="2xl" />
              </Center>
            )
          }
        />

        <MenuList>
          <MenuGroup label={user?.name || "My Account"}>
            <Link href="/">
              <MenuItem>Settings</MenuItem>
            </Link>
            <Link href="/">
              <MenuItem>Support</MenuItem>
            </Link>
          </MenuGroup>

          <MenuDivider />

          {user ? (
            <form
              action={async () => {
                "use server";
                await SignOut();
              }}
            >
              <Box as="button" type="submit" w="full">
                <MenuItem>Sign Out</MenuItem>
              </Box>
            </form>
          ) : (
            <Link href="/login">
              <MenuItem>Sign In</MenuItem>
            </Link>
          )}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default User;
