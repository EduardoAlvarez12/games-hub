import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, Image, List, Spinner, Link } from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ( {onSelectGenre}: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  
  if (isLoading) return <Spinner/>

  return (
    <List.Root variant={"plain"}>
      
      {data.map((genre) => (
        <List.Item paddingY={"5px"} key={genre.id}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Link fontSize={"lg"} onClick={() => onSelectGenre(genre)}>{genre.name}</Link>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
