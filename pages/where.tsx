import {
  Stack,
  Heading,
  Text,
  Button,
  useDisclosure,
  Spinner,
  CircularProgress,
  Grid,
  Flex,
} from "@chakra-ui/react";
import { Shell } from "../components/shell";

export default function Where() {
  const { isOpen, onOpen } = useDisclosure();
  return (
    <Shell backgroundColor="#fff" textColor="#aa3007">
      <Stack width="100%" maxW="48rem" px={2} pb={32}>
        <Flex py={2}>
          <Heading
            as="h1"
            fontSize={"sm"}
            fontWeight="normal"
            textTransform={"uppercase"}
            py={2}
          >
            Location
          </Heading>
        </Flex>
        <Heading as="h2" fontFamily={"Jeanne Moderno"}>
          Pullman Hotel Central Park
        </Heading>
        <Text>Grand Ballroom 1</Text>
        <Flex pb={4}>
          <Text opacity={0.8}>
            Podomoro City, Jl. Let. Jend. S. Parman Kav. 28, Jakarta, Indonesia
          </Text>
        </Flex>
        {!isOpen && (
          <Grid
            width={"100%"}
            maxW={"766px"}
            height={448}
            placeItems="center"
            textAlign={"center"}
            border="1px solid"
          >
            <Stack textAlign={"center"} alignItems="center">
              <Text
                fontSize={"sm"}
                fontWeight="normal"
                textTransform={"uppercase"}
              >
                Loading map...
              </Text>
              <CircularProgress isIndeterminate color="#aa3007" />
            </Stack>
          </Grid>
        )}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31733.366770951172!2d106.77524758179645!3d-6.174802399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f65f648bdc49%3A0x3dfec5a3d3208966!2sPullman%20Jakarta%20Central%20Park!5e0!3m2!1sen!2sid!4v1650877536467!5m2!1sen!2sid"
          width="100%"
          height={isOpen ? 450 : 0}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={onOpen}
        ></iframe>
      </Stack>
    </Shell>
  );
}
