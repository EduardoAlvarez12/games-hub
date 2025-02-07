import { Button } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant={"subtle"} size="xl">
          Sort by: Relevance <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value="">Relevance</MenuItem>
        <MenuItem value="">Date added</MenuItem>
        <MenuItem value="">Name</MenuItem>
        <MenuItem value="">Release Date</MenuItem>
        <MenuItem value="">Popularity</MenuItem>
        <MenuItem value="">Average Rating</MenuItem>
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
