import React from 'react'
import {
  List, ListItem, ListIcon, OrderedList, UnorderedList, Flex, Spacer, Text
  } from "@chakra-ui/react"

const Nav = () => {
  return (
      <UnorderedList color="brand.primary" bg="brand.third" p={2.5} styleType="none">
        <Flex justifyContent={"space-around"}>
          <ListItem _hover={{ color: "brand.secondary"}}>Projects</ListItem>
          <ListItem _hover={{ color: "brand.secondary"}}>About</ListItem>
          <ListItem _hover={{ color: "brand.secondary"}}>Contact</ListItem>
          <ListItem _hover={{ color: "brand.secondary"}}>CV</ListItem>
        </Flex>
      </UnorderedList>
  )
}

export default Nav
