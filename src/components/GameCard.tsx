import { Game } from "@/hooks/useGames";
import { Card, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root variant={"subtle"}>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <Card.Body>
        <HStack justifyContent={'space-between'} marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms?.map((p) => p.platform)}
          ></PlatformIconList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Card.Title fontSize={"2xl"}>{game.name} <Emoji rating={game.rating_top}/> </Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
