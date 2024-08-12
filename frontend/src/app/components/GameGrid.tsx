import { Flex, flexbox, SimpleGrid, Text } from "@chakra-ui/react";
import { useGames } from "../hooks/useGames";
import { GameCard } from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton";

export const GameGrid = () => {
  const { games, error , isLoading } = useGames();
  const skeletons = [1,2,3,4];
  return (
    <>
      <SimpleGrid 
        columns={{  sm: 1, md: 2, lg: 4, xl: 3 }} 
        spacing={10}
        padding={10}
      >
        {isLoading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton}></GameCardSkeleton>)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
          
        ))}
      </SimpleGrid>
    </>
  );
};
