import { Stack, Heading, Text, Flex } from "@chakra-ui/react";
import { Shell } from "../components/shell";

export default function Who() {
  return (
    <Shell textColor="#156fce" backgroundColor="#fff">
      <Flex direction={"column"} textAlign={"center"} px={4} pb={32}>
        <Heading
          as="h1"
          fontSize={"sm"}
          fontWeight="normal"
          textTransform={"uppercase"}
          py={4}
        >
          Celebrating the union of
        </Heading>
        <Heading as="h2" fontFamily={"Jeanne Moderno"} py={4}>
          Meisya Citraswara Vieranaputri
        </Heading>
        <Text fontSize={"sm"} fontWeight="normal" textTransform={"uppercase"}>
          Mr. Masrana Sama
        </Text>
        <Text fontSize={"sm"} fontWeight="normal" textTransform={"uppercase"}>
          Mrs. Evie Herniwati Rachmat
        </Text>

        <Heading as="h3" fontFamily={"Jeanne Moderno"} py={8}>
          &
        </Heading>

        <Heading fontFamily={"Jeanne Moderno"} py={4}>
          Muhammad Mustadi
        </Heading>
        <Text fontSize={"sm"} fontWeight="normal" textTransform={"uppercase"}>
          Mr. Abdul Karim Almasyhar
        </Text>
        <Text fontSize={"sm"} fontWeight="normal" textTransform={"uppercase"}>
          Mrs. Vina Lucky Kaniasari
        </Text>
      </Flex>
    </Shell>
  );
}
