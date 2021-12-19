import { background } from '@chakra-ui/styled-system'
import { Box, Button, Text, Flex, Spacer } from "@chakra-ui/react"
import React from 'react'
import {motion} from "framer-motion"
import Link from "next/link"

const MotionBox = motion(Box)
const variants = {
  hidden: {opacity: 0},
  visible: {opacity: 1},
  duration: 5,
}

const about = () => {
  return (
    <MotionBox initial="hidden" animate="visible" variants={variants} bg="brand.third" height="100vh">
      <Link href="/"><Button display={"block"} m={0, "auto"} size={"lg"} mt={2}>Go back</Button></Link>
      <Flex height={"95vh"} justifyContent={"center"} alignItems={"center"} >
        <Text>I'm a 23 year old web developer based in Belgium.</Text>
      </Flex>
    </MotionBox>
  )
}


export default about