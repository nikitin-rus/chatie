import {
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { Menu } from "./icons/Menu";
import { Search } from "./icons/Search";

export function Sidebar() {
  return (
    <Flex
      flexDir="column"
      rowGap="1rem"
      p="1.25rem 1.5rem"
      bg="grayscale.1"
      h="100%"
    >
      <Flex as="nav" columnGap="1rem">
        <IconButton
          size="iconBig"
          aria-label="open menu icon"
          icon={<Menu />}
          isRound={true}
        />

        <InputGroup>
          <Input placeholder="Username" pr="3.5rem" />

          <InputRightElement>
            <Search />
          </InputRightElement>
        </InputGroup>
      </Flex>

      <Flex flexDir="column" pt="2.5rem">
        <Text textStyle="message1" textAlign="center">
          You have no chats yet! 😢 <br />
          Use search to find users and start chats
        </Text>
      </Flex>
    </Flex>
  );
}
