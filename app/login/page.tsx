import OAuthLoginButtons from "@/components/Authentications/OAuthLoginButtons";
import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Heading,
} from "@yamada-ui/react";

export default function LoginPage() {
  return (
    <Container centerContent>
      <Card variant="outline" width={{ base: "700px", md: "300px" }}>
        <CardHeader>
          <Heading size="lg">Login</Heading>
        </CardHeader>

        <CardBody>
          <OAuthLoginButtons />
        </CardBody>
      </Card>
    </Container>
  );
}
