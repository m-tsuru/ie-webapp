import { ChevronRight } from "@yamada-ui/lucide";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Center,
  HStack,
  Spacer,
} from "@yamada-ui/react";
import User from "./User";

const Header = () => {
  return (
    <>
      <Center as="header" w="full" position="sticky" py="md">
        <HStack w="full" maxW="9xl" px={{ base: "lg", md: "md" }}>
          <Breadcrumb
            separator={<ChevronRight fontSize="sm" />}
            color="gray.400"
            gap="md"
            display={{ base: "", sm: "none" }}
          >
            <BreadcrumbItem>
              <BreadcrumbLink href="/">test</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">test</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">test</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="/">test</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Spacer />

          <HStack>
            <User />
          </HStack>
        </HStack>
      </Center>
    </>
  );
};

export default Header;
