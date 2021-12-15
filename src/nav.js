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
            <Flex fontSize="6xl" height={"100vh"} width={"40vw"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
            <MotionBox whileHover={{scale: 1.1}}>
            <Link href="/projects"><ListItem _hover={listItemHoverStyle}>Projects</ListItem></Link>
            </MotionBox>
            <MotionBox whileHover={{scale: 1.1}}>
            <ListItem _hover={listItemHoverStyle}>About</ListItem>
            </MotionBox>
            <MotionBox whileHover={{scale: 1.1}}>
            <ListItem _hover={listItemHoverStyle}>Contact</ListItem>
            </MotionBox>
            <MotionBox whileHover={{scale: 1.1}}>
            <ListItem _hover={listItemHoverStyle}>CV</ListItem>
            </MotionBox>

            </Flex>
          </UnorderedList>
        
  )
}

export default Nav
