import { Flex, Text, Icon, Box} from '@chakra-ui/react'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { ImBlog } from "react-icons/im"
import React from 'react'
import { motion } from "framer-motion"

const iconLinks = {
  gitHub: "https://github.com/jcc98",
  linkedIn: "https://www.linkedin.com/in/juan-ciudad-a7700a222/",
  blog: "https://jcc98.vercel.app/"
}

const About = () => {


  const MotionBox = motion(Box)


  return (
    <Flex color={"brand.third"} flexDirection={"column"}height={"100vh"} justifyContent={"center"} alignItems={"center"}>
      <Text fontSize="8xl">Juan Ciudad.</Text>
      <Text fontSize="4xl">Web Developer</Text>
      <Flex marginTop="1.5">
        <MotionBox whileHover={{scale: 1.1}}>
            <a target="_blank" href={iconLinks.gitHub}>
          <Icon mr="5" as={AiFillGithub} w={10} h={10}/>
          </a>
        </MotionBox>

        <MotionBox whileHover={{scale: 1.1}}>
          <a target="_blank" href={iconLinks.linkedIn}>
            <Icon mr="5" as={AiFillLinkedin} w={10} h={10}/>
          </a>
        </MotionBox>

        <MotionBox whileHover={{scale: 1.1}}>
          <a target="_blank" href={iconLinks.blog}>
            <Icon mr="5" as={ImBlog} w={10} h={10}/>
          </a>
        </MotionBox>
      </Flex>
    </Flex>
  )
}

export default About
