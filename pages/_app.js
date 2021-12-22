import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import "@fontsource/roboto"

const theme = extendTheme({

  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#4a536b"
      }
    }
  },
  colors: {
    brand: {
      "primary": "#aed6dc",
      "secondary": "#ff9a8d",
      "third": "#4a536b",
    },
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component  {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
