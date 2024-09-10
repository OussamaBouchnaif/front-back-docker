import { List, ListItem, HStack, Skeleton } from '@chakra-ui/react'
import React from 'react'

export const GenreListSkeleton = () => {
  return (
    <List>
    {Array(10).fill("").map((_, index) => (
      <ListItem key={index} paddingY={2}>
        <HStack>
          <Skeleton boxSize={10} borderRadius={8} />
          <Skeleton noOfLines={1} width="70%" />
        </HStack>
      </ListItem>
    ))}
  </List>
  )
}
