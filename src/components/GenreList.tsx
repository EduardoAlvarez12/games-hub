import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, Image, List, Text, Spinner } from "@chakra-ui/react";

const GenreList = () => {
  const { genres, isLoading, error } = useGenres();

  if (error) return null;
  
  if (isLoading) return <Spinner/>

  return (
    <List.Root variant={"plain"}>
      
      {genres.map((genre) => (
        <List.Item paddingY={"5px"} key={genre.id}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize={"lg"}>{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
