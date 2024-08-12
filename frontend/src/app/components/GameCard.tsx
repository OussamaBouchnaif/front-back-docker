import React from 'react'
import { Game } from '../hooks/useGames';
import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import gameImage from '../assets/game.webp'

interface Props {
    game:Game;
}

export const GameCard = ({ game }:Props) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
      <Image src={gameImage.src} />
      <CardBody>
        <Heading fontSize='2xl'>{game.name}</Heading>
      </CardBody>
    </Card>
  );
}
