import React from "react";
import { useGenres } from "../hooks/useGenres";
import { Button, HStack, Image, List, ListItem, Skeleton, Text } from "@chakra-ui/react";
import genreImage from "../assets/R.png";
import { GenreListSkeleton } from "./Skeletons/GenreListSkeleton";

export const GenresList = () => {
  const { data , isLoading} = useGenres();
  if (isLoading) {
    return (
      <GenreListSkeleton></GenreListSkeleton>
    );
  }

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={2}>
          <HStack>
            <Image boxSize={10} borderRadius={8} src={genreImage.src}></Image>
            <Button onClick={()=> console.log(genre)} fontSize='sm' variant='link'>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
