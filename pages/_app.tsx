import { ChakraProvider } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { useEffect } from "react";
import { Shell } from "../components/shell";
import { Fonts } from "../styles/globals/fonts";
import { theme } from "../styles/theme";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    console.log(`
███╗   ███╗███████╗██╗███████╗██╗   ██╗ █████╗                ██╗                ██████╗ ██████╗ ██╗
████╗ ████║██╔════╝██║██╔════╝╚██╗ ██╔╝██╔══██╗               ██║               ██╔═══██╗██╔══██╗██║
██╔████╔██║█████╗  ██║███████╗ ╚████╔╝ ███████║            ████████╗            ██║   ██║██║  ██║██║
██║╚██╔╝██║██╔══╝  ██║╚════██║  ╚██╔╝  ██╔══██║            ██╔═██╔═╝            ██║   ██║██║  ██║██║
██║ ╚═╝ ██║███████╗██║███████║   ██║   ██║  ██║            ██████║              ╚██████╔╝██████╔╝██║
╚═╝     ╚═╝╚══════╝╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝            ╚═════╝               ╚═════╝ ╚═════╝ ╚═╝
                                                                                                    `);
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <NextSeo
        title="From Meisya and Odi with Love"
        description="Meisya and Odi are getting married!"
        canonical="https://www.meisyaodiwithlove.com"
        openGraph={{
          url: "https://www.meisyaodiwithlove.com",
          title: "From Meisya and Odi with Love",
          description: "Meisya and Odi are getting married!",
          images: [
            {
              url: "https://www.meisyaodiwithlove.com/nft.jpeg",
              width: 2000,
              height: 2000,
              alt: "M+O by @stulka",
              type: "image/jpeg",
            },
          ],
          site_name: "Meisya and Odi with Love",
        }}
      />
      <Fonts />
      {/* <Shell>
        <Component {...pageProps} />
      </Shell> */}
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
