import {
  Calendar,
  House,
  Info,
  Library,
  ListTodo,
  Settings,
} from "@yamada-ui/lucide";
import {
  Box,
  Flex,
  IconButton,
  Image,
  Spacer,
  Tooltip,
  VStack,
} from "@yamada-ui/react";
import Link from "next/link";
import React from "react";

type NavItemProps = {
  label: String;
  icon: any;
  url: any;
};

const NavItem: React.FC<NavItemProps> = ({ label, icon, url }) => {
  return (
    <Flex>
      <Tooltip
        label={label}
        fontSize="16px"
        placement="right-start"
        openDelay={200}
      >
        <Link href={url}>
          <IconButton
            variant="link"
            color="gray.400"
            _hover={{ color: "gray.800" }}
            icon={icon}
          />
        </Link>
      </Tooltip>
    </Flex>
  );
};

const DesktopNav = () => {
  return (
    <Box
      borderRightWidth="1px"
      borderColor="gray.100"
      position="fixed"
      py="md"
      h="full"
      display={{ base: "", sm: "none" }}
      backgroundColor="white"
    >
      <VStack px="sm" h="full" gap="md" align="center">
        <Flex>
          <Link href="/">
            <IconButton
              variant="link"
              icon={
                <Image
                  src="/ichipiroexplorer.png"
                  width="48px"
                  height="48px"
                  bgColor="blackAlpha.900"
                  borderRadius="full"
                />
              }
            />
          </Link>
        </Flex>

        <NavItem label="Home" icon={<House fontSize="2xl" />} url="/" />

        <NavItem label="Info" icon={<Info fontSize="2xl" />} url="/" />

        <NavItem label="Timetable" icon={<Calendar fontSize="2xl" />} url="/" />

        <NavItem label="Todo" icon={<ListTodo fontSize="2xl" />} url="/" />

        <NavItem label="Article" icon={<Library fontSize="2xl" />} url="/" />

        <Spacer />

        <NavItem label="Settings" icon={<Settings fontSize="2xl" />} url="/" />
      </VStack>
    </Box>
  );
};

export default DesktopNav;
