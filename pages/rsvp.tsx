import { Stack, Heading, Text, Button, Flex } from "@chakra-ui/react";
import { Popover, PopupButton } from "@typeform/embed-react";
import { Shell } from "../components/shell";

export default function RSVP() {
  return (
    <Shell textColor="rgb(122, 61, 124)">
      <Stack width="100%" maxW="48rem" px={2} pb={32}>
        <Heading
          as="h1"
          fontSize={"sm"}
          fontWeight="normal"
          textTransform={"uppercase"}
          py={2}
        >
          RSVP
        </Heading>
        <Heading as="h2" fontFamily={"Jeanne Moderno"} py={4}>
          You are invited!
        </Heading>
        <Text>
          Unfortunately, pandemic wedding restrictions still apply. That means,
          to ensure everyone’s safety and peace of mind:
        </Text>

        <Text>- Respectfully, no plus ones;</Text>
        <Text>
          - Please keep your masks on and have your PeduliLindungi app ready.
        </Text>

        <PopupButton id="U19zGvXO">
          <Flex py={8}>
            <Button
              as="span"
              // background={"rgb(122, 61, 124)"}
              // _hover={{ background: "rgb(122, 61, 124)" }}
              // textColor={"#fff"}
              background={"rgb(195, 132, 197)"}
              _hover={{ background: "rgb(195, 132, 197)" }}
              textColor="rgb(50, 24, 50)"
              size={"sm"}
              width={"100%"}
            >
              RSVP
            </Button>
          </Flex>
        </PopupButton>
      </Stack>
    </Shell>
  );
}
