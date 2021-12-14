import { Flex, Text} from '@chakra-ui/layout'
import React from 'react'

const About = () => {
  return (
    <Flex color={"brand.third"} flexDirection={"column"}height={"100vh"} justifyContent={"center"} alignItems={"center"}>
      <Text fontSize="8xl">Juan Ciudad.</Text>
      <Text fontSize="5xl">23</Text>
      <Text fontSize="4xl">Web Developer</Text>
      <Text></Text>
      
    </Flex>
  )
}

export default About
