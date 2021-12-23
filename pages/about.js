import { background } from '@chakra-ui/styled-system'
import { Box, Button, Text, Flex, Spacer } from "@chakra-ui/react"
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTypescript, SiNextdotjs, SiSass, SiStyledcomponents, SiChakraui } from "react-icons/si"
import React from 'react'
import {motion} from "framer-motion"
import Link from "next/link"
import { Icon } from '@chakra-ui/react'

const MotionBox = motion(Box)
const variants = {
  hidden: {opacity: 0},
  visible: {opacity: 1},
  duration: 5,
}

const icons = [
  {
    name: "HTML",
    icon: SiHtml5,
    color: "orange"
  },
  {
    name: "CSS",
    icon: SiCss3,
    color: "blue"
  },
  {
    name: "Javascript",
    icon: SiJavascript,
    color: "yellow"
  },
  {
    name: "React",
    icon: SiReact,
    color: "blue"
  },
  {
    name: "Typescript",
    icon: SiTypescript,
    color: "blue"
  },
  {
    name: "NextJS",
    icon: SiNextdotjs,
    color: "gray"
  },
  {
    name: "SASS",
    icon: SiSass,
    color: "pink"
  },
  {
    name: "Styled Components",
    icon: SiStyledcomponents,
    color: "yellow"
  },
  {
    name: "ChakraUI",
    icon: SiChakraui,
    color: "cyan"
  }


]

const about = () => {
  return (
    <MotionBox initial="hidden" animate="visible" variants={variants} bg="brand.third" height="100vh">
      <Link href="/" passHref><Button display={"block"} m={0, "auto"} size={"lg"} mt={2}>Go back</Button></Link>
      <Flex flexDirection={"column"} height={"95vh"} justifyContent={"center"} alignItems={"center"} >
        <Box mx={{base:"4", md:"10", lg:"20"}} shadow={"lg"} bg={"#282c38"} rounded={"base"} p={"5"} color={"#fff"}>
        <Text textShadow={"1px 1px #000"} textAlign={"center"} fontSize={{base:"xl", md:"2xl",lg:"4xl"}} color={"brand.primary"} mb={"5"}>About</Text>
        <hr ></hr>

          <Text fontSize={{base: "sm", md:"md", lg:"xl"}} mt={"5"} textAlign={"center"}>I'm a 23 year old web developer based in Belgium. My main focus is on front-end. I love learning about new technologies and trying them out as I learn. I use modern technologies such as <strong>ReactJS, NextJS, Typescript, Styled Components, MaterialUI and ChakraUI.</strong> I have a big passion for learning languages, most notably Japanese; I have been learning it for over 5 years and have passed several proficiency exams such as the JLPT N1 and Kanken Jun 2 Kyuu. I have created a few apps to aid my Japanese learning journey that you can find in my portfolio section.</Text>
        </Box>
        <Box mx={{base:"4", md:"10", lg:"20"}} mt={"10"} shadow={"lg"} bg={"#282c38"} rounded={"base"} p={"5"} color={"#fff"}>
        <Text textShadow={"1px 1px #000"} textAlign={"center"} fontSize={{base:"xl", md:"2xl",lg:"4xl"}} color={"brand.primary"}>Languages</Text>

          <hr ></hr>
          <Flex flexWrap={"wrap"}>
            {icons.map((icon, key) => {
              return(
                <MotionBox my={"3"} mx={"3"} key={key} whileHover={{scale: 1.2}}>
                  <Icon title={icon.name} _hover={{color: icon.color}} w={{base: "7", md:"8",xl:"10"}} h={{base: "7", md:"8",xl:"10"}} as={icon.icon}></Icon>

                </MotionBox>
              )
            })}
          </Flex>
        </Box>
      </Flex>
    </MotionBox>
  )
}


export default about