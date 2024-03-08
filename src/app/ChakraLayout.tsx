"use client";

import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";

// import { CacheProvider } from "@chakra-ui/next-js";
// import {  ThemeConfig, extendTheme } from "@chakra-ui/react";

// import dynamic from "next/dynamic";
// const ChakraProvider = dynamic(() =>
//   import("@chakra-ui/provider").then((mod) => mod.ChakraProvider)
// );

// // const BMJUA = localFont({
// //   src: [
// //     {
// //       path: "../../app/font/BMJUA_ttf.ttf",
// //       weight: "normal",
// //       style: "normal",
// //     },
// //   ],
// // });

// export function ChakraLayout({ children }: { children: React.ReactNode }) {
//   const config: ThemeConfig = {
//     initialColorMode: "light",
//     // useSystemColorMode: false,
//   };

//   //   const [mount, setMount] = useState(false);

//   //   useLayoutEffect(() => {
//   //     setMount(true);
//   //   }, []);

//   //   if (!mount) {
//   //     return <></>;
//   //   }

//   const theme = extendTheme({
//     config,

//     // fonts: {
//     //   body: BMJUA.style.fontFamily,
//     // },
//   });

//   return (
//     <ChakraProvider theme={theme}>
//       <CacheProvider>{children}</CacheProvider>
//     </ChakraProvider>
//   );
// }

// import {
//   ChakraProvider,
//   ColorModeScript,
//   ThemeConfig,
//   extendTheme,
// } from "@chakra-ui/provider";

export function ChakraLayout({ children }: { children: React.ReactNode }) {
  const config = {
    useSystemColorMode: false,
    initialColorMode: "dark",
  };

  // 3. extend the theme
  const customTheme = extendTheme({ config });
  return (
    <ChakraProvider theme={customTheme}>
      <ColorModeScript initialColorMode="light" />
      {children}
    </ChakraProvider>
  );
}
