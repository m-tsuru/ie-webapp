import { createClient } from "@/utils/supabase/server";
import { Text, VStack } from "@yamada-ui/react";

const Home = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getSession();

  console.log(data);

  return (
    <>
      <VStack alignItems="center">
        <Text>Test Text</Text>
        <Text>Test Text</Text>
        <Text>Test Text</Text>
        <Text>Test Text</Text>
        <Text>Test Text</Text>
        <Text>Test Text</Text>
        <Text>Test Text</Text>
        <Text>Test Text</Text>
        <Text>Test Text</Text>
        <Text>Test Text</Text>
        <Text>Test Text</Text>
        <Text>Test Text</Text>
        <Text>Test Text</Text>
        <Text>Test Text</Text>
        <Text>Test Text</Text>
        <Text>Test Text</Text>
        <Text>Test Text</Text>
        <Text>Test Text</Text>
        <Text>Test Text</Text>
        <Text>Test Text</Text>
        <Text>Test Text</Text>
        <Text>Test Text</Text>
        <Text>Test Text</Text>
        <Text>Test Text</Text>
      </VStack>
    </>
  );
};

export default Home;
