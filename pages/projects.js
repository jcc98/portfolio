import { background } from '@chakra-ui/styled-system'
import { Button, Box, Flex, Space, Text, Container } from "@chakra-ui/react"
import React from 'react'
import {motion} from "framer-motion"
import Link from "next/link"
import Image from "next/image"

const MotionBox = motion(Box)

const variants = {
  hidden: {opacity: 0},
  visible: {opacity: 1},
  duration: 5,
}

const projectData = [

  {
    name: "Static Blog",
    description: "Markdown static Next blog hosted on Vercel. Can be filtered by subject topic and has dark mode. This is where I mainly write in Japanese or keep some notes in English.",
    techUsed: "ReactJS, Next, Styled Components, Markdown, Typescript",
    image: "/../public/blog.png"
  },
  {
    name: "Yoji App",
    description: "Quiz-like app made for studying for the Kanji Kentei using scraped yojijukugo (Four-character idiom) info from a dictionary-like website. One randomly chosen idiom is selected and displayed on the screen, and one randomly chosen kanji letter is taken away. You must get the correct kanji letter. You can choose it to be displayed by level (5-1) or choose all (no particular level chosen)",
    techUsed: "ReactJS (Local JSON Fetch), Skeleton CSS,",
    image: "/../public/blog.png"
  },
  {
    name: "RGB Game",
    description: "A random RGB value is chosen and displayed on the screen (red, green, blue values. they range from 0 to 255). You must choose the correct color among four different choices. Three choices are randomly generated and are unrelated to the designated RGB value. It also has a time limit and a simple score system.",
    techUsed: "VanillaJS, vanilla CSS",
    image: "/../public/blog.png"
  },
  {
    name: "Kanji Quiz Game",
    description: "Fetches Japanese words from an API. A randomly chosen kanji is displayed and you must write a word that contains it.",
    techUsed: "Vanilla JS (API Fetch), Vanilla CSS",
    image: "/../public/blog.png"
  }
]

const projects = () => {
  return (
    <MotionBox initial="hidden" animate="visible" variants={variants} height="100vh">
      <Link href="/"><Button display={"block"} m={0, "auto"} size={"lg"} mt={2}>Go back</Button></Link>

      <Text textShadow={"1px 1px #000"} textAlign={"center"} fontSize={"8xl"} color={"brand.primary"}>Projects</Text>
      
        {projectData.map((project, key) => {
          return(
            <Flex rounded={"base"} margin={2, 5} boxShadow={"lg"} bg="brand.primary">
            <Flex alignItems={"center"}>
              <Box  p={5} rounded="base" color={"brand.third"} >
                <Text fontSize={"3xl"} textAlign={"center"}>{project.name}</Text>
                <Text fontSize={"lg"}>{project.description}
                </Text>
                <Text fontWeight={"bold"} fontSize={"x-small"}>{project.techUsed}</Text>
              </Box>
            </Flex>
            <Box rounded="base" p={2}>
              <Image width="350" height="400" src={project.image}></Image>
            </Box>
          </Flex>
          )

        })}


      
    </MotionBox>
  )
}

export default projects
