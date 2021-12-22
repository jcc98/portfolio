import { Flex, Text, Icon, Box} from '@chakra-ui/react'
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai"
import { ImBlog } from "react-icons/im"
import React from 'react'
import { motion } from "framer-motion"

const iconLinks = {
  gitHub: "https://github.com/jcc98",
  linkedIn: "https://www.linkedin.com/in/juan-ciudad-a7700a222/",
  blog: "https://jcc98.vercel.app/",
  message: "mailto:juan.ciudad98@gmail.com"
}

const About = () => {


  const MotionBox = motion(Box)


  return (
    <Flex color={"brand.third"} flexDirection={"column"}height={"100vh"} justifyContent={"center"} alignItems={"center"}>
      <Text fontSize={{base:"3xl", md:"4xl", lg:"7xl"}}>Juan Ciudad.</Text>
      <Text  fontSize={{base:"xl", md:"2xl", lg:"3xl"}}>Web Developer</Text>
      <Text fontSize={{base:"m", md:"lg", lg:"2xl"}}>Contact me:</Text>
      <Flex marginTop="1.5">
        <MotionBox whileHover={{scale: 1.1}}>
            <a target="_blank" href={iconLinks.gitHub}>
          <Icon mr="5" as={AiOutlineGithub} w={{base:6, md:6, lg:10}} h={{base:6, md:8, lg:10}}/>
          </a>
        </MotionBox>

        <MotionBox whileHover={{scale: 1.1}}>
          <a target="_blank" href={iconLinks.linkedIn}>
            <Icon mr="5" as={AiOutlineLinkedin} w={{base:6, md:8, lg:10}} h={{base:6, md:8, lg:10}}/>
          </a>
        </MotionBox>

        <MotionBox whileHover={{scale: 1.1}}>
          <a target="_blank" href={iconLinks.message}>
            <Icon mr="5" as={AiOutlineMail} w={{base:6, md:8, lg:10}} h={{base:6, md:8, lg:10}}/>
          </a>
        </MotionBox>
        
        <MotionBox whileHover={{scale: 1.1}}>
          <a target="_blank" href={iconLinks.blog}>
            <Icon mr="5" as={ImBlog} w={{base:6, md:8, lg:10}} h={{base:6, md:8, lg:10}}/>
          </a>
        </MotionBox>

      </Flex>
      <Text my={"5"} textAlign={"center"} fontSize={"small"}>Made with NextJS, ChakraUI & Framer Motion.</Text>
      <Text  my={"1"} textAlign={"center"} fontSize={"xs"}>&copy; 2022 Jcc98</Text>
    </Flex>
  )
}

export default About
