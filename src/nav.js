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

      
            <Flex fontSize={{base:"4xl", md:"5xl", lg:"6xl"}} height={{base: "40vh", md: "100vh", lg: "100vh"}} width={{base: "100vw", md:"40vw", lg: "40vw"}} justifyContent={"center"} bg="brand.third" alignItems={"center"} flexDirection={"column"}>
        <UnorderedList Shadow="xl" color="brand.primary"  textAlign={"center"} p={2.5} styleType="none" fontSize="3xl">
            <MotionBox whileHover={{scale: 1.1}}>
            <Link passHref rel="noreferrer" href="/projects"><ListItem _hover={listItemHoverStyle}>Projects</ListItem></Link>
            </MotionBox>
            <MotionBox whileHover={{scale: 1.1}}>
            <Link passHref rel="noreferrer" href="/about"><ListItem _hover={listItemHoverStyle}>About</ListItem></Link>
            </MotionBox>
            <MotionBox whileHover={{scale: 1.1}}>
            <a rel="noreferrer" target="_blank" href="https://drive.google.com/file/d/1Ab6vg4exAxn_u9puo8C7w5dNWPr_VrMC/view?usp=share_link"><ListItem _hover={listItemHoverStyle}>CV</ListItem></a>
            </MotionBox>

          </UnorderedList>
            </Flex>
        
  )
}

export default Nav
