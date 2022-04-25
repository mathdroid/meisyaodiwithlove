import { Box, Button, Flex, Grid, HStack, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

export function Shell({
  children,
  backgroundColor = "white",
  textColor = "black",
}) {
  const router = useRouter();
  return (
    <Grid
      placeItems={"center"}
      w="100vw"
      minH="100vh"
      background={backgroundColor}
      textColor={textColor}
    >
      {children}
      <HStack
        // borderRadius={"3xl"}
        background={backgroundColor}
        position={"fixed"}
        // bottom={8}
        bottom={0}
        py={4}
        width="100%"
        maxW={"48rem"}
        justifyContent="space-evenly"
      >
        <NextLink href={"/"}>
          <Link opacity={1}>Home</Link>
        </NextLink>
        <NextLink href={"/who"}>
          <Link opacity={1}>Who</Link>
        </NextLink>
        <NextLink href={"/when"}>
          <Link opacity={1}>When</Link>
        </NextLink>
        <NextLink href={"/where"}>
          <Link opacity={1}>Where</Link>
        </NextLink>
        <NextLink href={"/rsvp"}>
          <Link>
            {router.pathname === "/rsvp" ? (
              <Flex px={3} py={1}>
                <Text fontSize={"14px"} fontWeight="bold">
                  RSVP
                </Text>
              </Flex>
            ) : (
              <Button
                colorScheme={"blackAlpha"}
                background={
                  router.pathname === "/" ? "rgba(0,0,0,0.5)" : textColor
                }
                textColor={"white"}
                size={"sm"}
                opacity={1}
                variant={"solid"}
              >
                RSVP
              </Button>
            )}
          </Link>
        </NextLink>
      </HStack>
    </Grid>
  );
}
