import React from "react";
import { Game } from "../hooks/useGames";
import {
  Card,
  CardBody,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import gameImage from "../assets/game.webp";
import PlatformIcon from "./PlatformIcon";
import { CriticScore } from "./CriticScore";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <Card  >
      <Image src={gameImage.src} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent='space-between'>
          <PlatformIcon platform={game.platform}></PlatformIcon>
          <CriticScore score={game.score}></CriticScore>
        </HStack>
      </CardBody>
    </Card>
  );
};
