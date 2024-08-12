import { Flex, flexbox, SimpleGrid } from "@chakra-ui/react";
import { useGames } from "../hooks/useGames";
import { GameCard } from "./GameCard";

export const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      <SimpleGrid 
        columns={{  sm: 1, md: 2, lg: 4, xl: 3 }} 
        spacing={10}
        padding={10}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};
