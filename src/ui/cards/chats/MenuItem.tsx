import { Flex, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  icon: React.ReactElement;
  onClick?: () => void;
}

export function MenuItem({ title, icon, onClick }: Props) {
  return (
    <Flex
      alignItems="center"
      columnGap="0.5rem"
      p="1rem"
      bg="grayscale.2"
      _hover={{ bg: "grayscale.4" }}
      _active={{ bg: "grayscale.5" }}
      cursor="pointer"
      userSelect="none"
      onClick={onClick}
    >
      {icon}
      <Text textStyle="body3">{title}</Text>
    </Flex>
  );
}
