import { Input } from "@chakra-ui/react";
import { InputGroup } from "../ui/input-group";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";
import styles from "./SearchInput.module.css";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
      <form
      className={styles.maxWidth}
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) onSearch(ref.current.value);
        }}
      >
          <InputGroup className={styles.maxWidth} startElement={<BsSearch />}>
            <Input
              borderRadius={20}
              placeholder="Search for games..."
              variant={"subtle"}
              ref={ref}
            />
          </InputGroup>
      </form>
  );
};

export default SearchInput;
