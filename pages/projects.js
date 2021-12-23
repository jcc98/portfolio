import { background } from '@chakra-ui/styled-system'
import { Button, Box, Flex, Spacer, Text, Container, Icon } from "@chakra-ui/react"
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
      <Link passHref rel="noreferrer" href="/"><Button display={"block"} m={0, "auto"} size={"lg"} mt={2}>Go back</Button></Link>

      <Text textShadow={"1px 1px #000"} textAlign={"center"} fontSize={{base: "4xl", md: "6xl", lg:"8xl"}} color={"brand.primary"}>Projects</Text>
        {projectData.map((project, key) => {
          return(
            <MotionBox cursor={"pointer"} mx={{base:"3%", md:"10%", lg:"20%"}} my={"3%"} bg={"#282c38"} color="#fff" key={key} shadow={"lg"} rounded={"base"}  p={"5"} whileHover={{ scale: 1.02 }}>
              <a rel="noreferrer" target={"_blank"} href={project.website}>
                <Flex flexDirection={"row"}>
                    <Box width="70vw">
                      <Flex justify={"space-evenly"} height={"100%"} direction={"column"}>
                          <Text fontSize={{base:"xl", md:"2xl", lg:"3xl"}} textShadow={"md"} textAlign={"center"}>{project.name}</Text>
                            
                            <Text p={{base:"3", md:"2", lg:"0"}} fontSize={{base:"sm", md:"md", lg:"lg"}}>{project.description}
                            </Text>
                            <hr width={"10%"}></hr>
                            <Text fontWeight={"bold"} fontSize={"small"}>{project.techUsed}</Text>
                            <MotionBox whileHover={{y: 5}}><a target="_blank" href={project.github}><Icon as={AiFillGithub} w={{base:"7", md:"8", lg:"10"}} h={10}>Source</Icon></a></MotionBox>
                      </Flex>
                    </Box>
                <Box width="30vw" rounded="base" p={2}>
                    <Image alt={`${project.name} Image`} width={"1000px"} height={"700px"} objectFit={'contain'}  src={project.image}></Image>
                </Box>
               </Flex>
              </a>
              </MotionBox>
          )
          
        }
        )}
    </MotionBox>
  )
}

export default projects
