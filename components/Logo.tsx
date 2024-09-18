import { Text } from "@yamada-ui/react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Text
        fontSize={{ base: "3xl", sm: "lg" }}
        fontWeight={700}
        letterSpacing={{ base: "widest", sm: "normal" }}
      >
        Ichipiro Explorer
      </Text>
    </Link>
  );
};

export default Logo;
