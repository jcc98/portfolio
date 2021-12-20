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
      <Flex flexDirection={"column"} height={"95vh"} justifyContent={"center"} alignItems={"center"} >
        <Box mx={"20"} shadow={"lg"} bg={"#282c38"} rounded={"base"} p={"5"} color={"#fff"}>
        <Text textShadow={"1px 1px #000"} textAlign={"center"} fontSize={"4xl"} color={"brand.primary"} mb={"5"}>About</Text>
        <hr ></hr>

          <Text mt={"5"} textAlign={"center"}>I'm a 23 year old web developer based in Belgium. My main focus is on front-end. I love learning about new technologies and trying them out as I learn. I use modern technologies such as <strong>ReactJS, NextJS, Typescript, Styled Components, MaterialUI and ChakraUI.</strong> I have a big passion for learning languages, most notably Japanese; I've been learning it for over 5 years and have passed several proficiency exams such as the JLPT N1 and Kanken Jun 2 Kyuu. I have created a few apps to aid my Japanese learning journey that you can find in my portfolio section.</Text>
        </Box>
        <Box mx={"20"} mt={"10"} shadow={"lg"} bg={"#282c38"} rounded={"base"} p={"5"} color={"#fff"}>
        <Text textShadow={"1px 1px #000"} textAlign={"center"} fontSize={"4xl"} color={"brand.primary"}>Languages</Text>

          <hr></hr>
        </Box>
      </Flex>
    </MotionBox>
  )
}


export default about