import React from 'react'
import { Game } from '../hooks/useGames';
import { Card, CardBody, Heading, Icon, Image, Text } from '@chakra-ui/react';
import gameImage from '../assets/game.webp'
import PlatformIcon from './PlatformIcon';

interface Props {
    game:Game;
}

export const GameCard = ({ game }:Props) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
      <Image src={gameImage.src} />
      <CardBody>
        <Heading fontSize='2xl'>{game.name}</Heading>
        <PlatformIcon platform={game.platform}></PlatformIcon>
      </CardBody>
    </Card>
  );
}
