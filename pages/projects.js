import { Button, Box, Flex,Text, Icon } from "@chakra-ui/react"
import { AiFillGithub } from 'react-icons/ai'
import React from 'react'
import {motion} from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { projectData } from '../src/ProjectData'
import { extraProjects } from "../src/ProjectData"

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

      <Text textShadow={"1px 1px #000"} textAlign={"center"} fontSize={{base: "2xl", md: "4xl", lg:"6xl"}} color={"brand.primary"}>Main Projects</Text>
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
                            <MotionBox whileHover={{y: 5}}><a rel="noreferrer" target="_blank" href={project.github}><Icon as={AiFillGithub} w={{base:"7", md:"8", lg:"10"}} h={10}>Source</Icon></a></MotionBox>
                      </Flex>
                    </Box>
                <Box width="30vw" rounded="base" p={2}>
                    <MotionBox whileHover={{scale: 1.7}} ><Image alt={`${project.name} Image`} width={"1000px"} height={"700px"} objectFit={'contain'}  src={project.image}></Image></MotionBox>
                    
                </Box>
               </Flex>
              </a>
              </MotionBox>

          )
        },
        )}
                <Text textShadow={"1px 1px #000"} textAlign={"center"} fontSize={{base: "xl", md: "2xl", lg:"3xl"}} color={"brand.primary"}>Extra mini projects</Text>
                <Flex wrap={"wrap"} mx={"4%"} justify={"center"} gridGap={"10"}>
              {extraProjects.map((extraProject, key) => {
                return (
                  <MotionBox width={"300px"} key={key} cursor={"pointer"} mb={"2.5"} bg={"#282c38"} color="#fff" key={key} shadow={"lg"} rounded={"base"}  p={"5"} whileHover={{ scale: 1.02 }}>
                      <a href={extraProject.website} target="_blank">
                    <Flex flexDirection={"column"} justify={"space-between"} align={"center"}>
                        <Text mb={"3"} fontSize={{base: "md", md: "lg", lg: "xl"}}>{extraProject.name}</Text>
                        <Text >{extraProject.description}</Text>
                        <Text fontWeight={"bold"} fontSize={"small"} mb={"3"}>{extraProject.techUsed}</Text>
                        <Image  alt={`${extraProject.name} Image`} width={"1000px"} height={"700px"} objectFit={'contain'} src={extraProject.image}></Image>
                        <MotionBox alignSelf={"space-between"} whileHover={{y: 5}}><a rel="noreferrer" target="_blank" href={extraProject.github}><Icon as={AiFillGithub} w={{base:"7", md:"8", lg:"10"}} h={10}>Source</Icon></a></MotionBox>
                    </Flex>
                      </a>
                  </MotionBox>
                )
              })}
              </Flex>
    </MotionBox>
    
  )
}

export default projects
