import React from 'react'
import {
  List, ListItem, ListIcon, OrderedList, UnorderedList, Flex, Spacer, Text
  } from "@chakra-ui/react"

const listItemHoverStyle = {
  cursor: "pointer",
}

const Nav = () => {
  return (
      <UnorderedList Shadow="xl" color="brand.primary" bg="brand.third" p={2.5} styleType="none" fontSize="3xl">
          <Flex fontSize="6xl" height={"100vh"} width={"40vw"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
            <ListItem _hover={listItemHoverStyle}>Projects</ListItem>
            <ListItem _hover={listItemHoverStyle}>About</ListItem>
            <ListItem _hover={listItemHoverStyle}>Contact</ListItem>
            <ListItem _hover={listItemHoverStyle}>CV</ListItem>
          </Flex>
        </UnorderedList>
  )
}

export default Nav
