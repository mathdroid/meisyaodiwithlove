import { Stack, Heading, Text, Button, Flex, Link } from "@chakra-ui/react";
import { formatDistance, subDays } from "date-fns";
import { atcb_action } from "add-to-calendar-button";
import "add-to-calendar-button/assets/css/atcb.min.css";

import { Shell } from "../components/shell";

export default function When() {
  return (
    <Shell backgroundColor="#fff" textColor="#0c6f3c">
      <Stack spacing={8} width="100%" maxW="48rem" px={2} pb={32}>
        <Flex direction={"column"} py={4}>
          <Heading
            as="h1"
            fontSize={"sm"}
            fontWeight="normal"
            textTransform={"uppercase"}
            py={2}
          >
            Date
          </Heading>
          <Heading as="h2" fontSize={"3rem"} fontFamily={"Jeanne Moderno"}>
            Saturday
          </Heading>
          <Heading as="h2" fontSize={"3rem"} fontFamily={"Jeanne Moderno"}>
            May 14th, 2022
          </Heading>
          <Text opacity={0.8}>
            That{"'"}s{" "}
            {formatDistance(
              new Date("2022-05-14T15:30:00.000+07:00"),
              new Date(),
              {
                addSuffix: true,
              }
            )}
            !
          </Text>
        </Flex>
        <Flex direction={"column"}>
          <Text
            fontSize={"sm"}
            fontWeight="normal"
            textTransform={"uppercase"}
            py={2}
          >
            Religious Ceremony
          </Text>
          <Heading fontFamily={"Jeanne Moderno"} pt={2} pb={6}>
            3.30pm-5.30pm
          </Heading>

          <Button
            background={"#0c6f3c"}
            color={"#fff"}
            size={"sm"}
            onClick={() => {
              atcb_action({
                name: "Meisya and Odi Wedding: Religious Ceremony",
                timeZone: "Asia/Jakarta",
                startDate: "2022-05-14",
                startTime: "15:30:00",
                endDate: "2022-05-14",
                endTime: "17:30:00",
                location: "Pullman Jakarta Central Park",
                options: [
                  "Apple",
                  "Google",
                  "iCal",
                  "Microsoft365",
                  "Outlook.com",
                  "MicrosoftTeams",
                  "Yahoo",
                ],
                trigger: "click",
                iCalFileName: "Meisya-Odi-Wedding-Religious-Ceremony",
              });
            }}
          >
            Add Ceremony to Calendar
          </Button>
        </Flex>
        <Flex direction={"column"}>
          <Text
            fontSize={"sm"}
            fontWeight="normal"
            textTransform={"uppercase"}
            py={2}
          >
            Reception
          </Text>
          <Heading fontFamily={"Jeanne Moderno"} pt={2} pb={6}>
            7pm-9pm
          </Heading>
          <Button
            background={"#0c6f3c"}
            color={"#fff"}
            size={"sm"}
            onClick={() => {
              atcb_action({
                name: "Meisya and Odi Wedding: Reception",
                timeZone: "Asia/Jakarta",
                startDate: "2022-05-14",
                startTime: "19:00:00",
                endDate: "2022-05-14",
                endTime: "21:00:00",

                location: "Pullman Jakarta Central Park",
                options: [
                  "Apple",
                  "Google",
                  "iCal",
                  "Microsoft365",
                  "Outlook.com",
                  "MicrosoftTeams",
                  "Yahoo",
                ],
                trigger: "click",
                iCalFileName: "Meisya-Odi-Reception",
              });
            }}
          >
            Add Reception to Calendar
          </Button>
        </Flex>
      </Stack>
    </Shell>
  );
}
