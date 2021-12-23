import React from 'react'
import {
  List, ListItem, ListIcon, OrderedList, UnorderedList, Flex, Spacer, Text, Box
  } from "@chakra-ui/react"
import { motion } from 'framer-motion'
import Link from "next/link"

const listItemHoverStyle = {
  cursor: "pointer",
}

const Nav = () => {

  
  const MotionBox = motion(Box)

  return (

      
        <UnorderedList Shadow="xl" color="brand.primary" bg="brand.third" p={2.5} styleType="none" fontSize="3xl">
            <Flex fontSize={{base:"4xl", md:"5xl", lg:"6xl"}} height={"100vh"} width={"40vw"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
            <MotionBox whileHover={{scale: 1.1}}>
            <Link rel="noreferrer" href="/projects"><ListItem _hover={listItemHoverStyle}>Projects</ListItem></Link>
            </MotionBox>
            <MotionBox whileHover={{scale: 1.1}}>
            <Link rel="noreferrer" href="/about"><ListItem _hover={listItemHoverStyle}>About</ListItem></Link>
            </MotionBox>
            <MotionBox whileHover={{scale: 1.1}}>
            <a rel="noreferrer" target="_blank" href="https://drive.google.com/file/d/1APv6qrC64OE4Jb04OkQ26L1ozGcQ5E2y/view?usp=sharing"><ListItem _hover={listItemHoverStyle}>CV</ListItem></a>
            </MotionBox>

            </Flex>
          </UnorderedList>
        
  )
}

export default Nav
