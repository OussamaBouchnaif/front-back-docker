import { HStack, Image } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/logo.webp'
import { ColorModeSwitch } from './ColorModeSwitch'

export const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='25px'>
        <Image src={logo.src} boxSize="60px"/>
        <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  )
}
