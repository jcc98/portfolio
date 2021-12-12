import React from 'react'
import {
  List, ListItem, ListIcon, OrderedList, UnorderedList, Flex, Spacer
  } from "@chakra-ui/react"

const Nav = () => {
  return (
    <Flex>
      <UnorderedList styleType={"none"}>
        <ListItem>CV</ListItem>
        <ListItem>Projects</ListItem>
        <ListItem>About</ListItem>
        <ListItem>Contact</ListItem>
      </UnorderedList>
    </Flex>
  )
}

export default Nav
