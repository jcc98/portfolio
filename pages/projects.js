import { background } from '@chakra-ui/styled-system'
import { Button, Box, Flex, Space, Text } from "@chakra-ui/react"
import React from 'react'
import {motion} from "framer-motion"
import Link from "next/link"

const MotionBox = motion(Box)
const variants = {
  hidden: {opacity: 0},
  visible: {opacity: 1},
  duration: 5,
}

const projects = () => {
  return (
    <MotionBox initial="hidden" animate="visible" variants={variants} height="100vh">
      <Link href="/"><Button display={"block"} m={0, "auto"} size={"lg"} mt={2}>Go back</Button></Link>
      <Text textShadow={"1px 1px #000"} textAlign={"center"} fontSize={"8xl"} color={"brand.primary"}>Projects</Text>
    <Flex>
      <Box>
      </Box>
    </Flex>
    </MotionBox>
  )
}

export default projects
