import { Flex, Heading, Image, Stack } from "@chakra-ui/react";
import { Shell } from "../components/shell";

export default function Home() {
  return (
    <Shell backgroundColor="#ee6ab7" textColor="#322926">
      <Flex
        position={"fixed"}
        bottom={16}
        direction="column"
        background="#ee6ab7"
        alignItems={"center"}
        justifyContent="flex-end"
      >
        <Heading fontFamily={"Jeanne Moderno"} textAlign="center" mt={16}>
          Meisya and Odi are getting married!
        </Heading>
        <Image src="nft.gif" w={"100%"} maxW={"1000px"} />
      </Flex>
    </Shell>
  );
}
