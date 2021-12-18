import { background } from '@chakra-ui/styled-system'
import { Button, Box, Flex, Space, Text, Container, Icon } from "@chakra-ui/react"
import { AiFillGithub } from 'react-icons/ai'
import React from 'react'
import {motion} from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { projectData } from '../src/ProjectData'

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
        {projectData.map((project, key) => {
          return(
            <MotionBox mb={"5"} ml={"5"} mr={"5"} bgGradient="linear(to-l, brand.primary, brand.third)"  p={"5"} whileHover={{opacity: 0.95 }}>
                  <Text fontSize={"3xl"} textAlign={"center"}>{project.name}</Text>
                  <Box>
                    <Text fontSize={"lg"}>{project.description}
                    </Text>
                    <Text fontWeight={"bold"} fontSize={"x-small"}>{project.techUsed}</Text>
                    <Icon as={AiFillGithub} w={5} h={5}>Source</Icon>
                  </Box>
              <Box rounded="base" p={2}>
                <Image width="350" height="400" src={project.image}></Image>
              </Box>
            </MotionBox>
          )
          
        }
        )}
    </MotionBox>
  )
}

export default projects
