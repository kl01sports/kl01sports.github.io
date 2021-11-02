import {
  Badge,
  Box,
  Circle,
  Flex,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';

export interface IProductCard {
  isNew?: boolean;
  imageURL: string;
  name: string;
}

const ProductCard = (props: IProductCard) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      maxW='sm'
      w='30vw'
      h='30vw'
      borderWidth='1px'
      rounded='lg'
      shadow='lg'
      position='relative'
    >
      {props.isNew && (
        <Circle
          size='10px'
          position='absolute'
          top={2}
          right={2}
          bg='red.200'
        />
      )}

      <Image
        src={props.imageURL}
        alt={`Picture of ${props.name}`}
        roundedTop='lg'
        objectFit='cover'
        width='30vw'
        h='70%'
        fallback={<Box w='100%' h='70%' background='black'></Box>}
      />

      <Box p='6' h='30%'>
        <Flex mt='1' justifyContent='space-between' alignContent='center'>
          <Box
            fontSize='2xl'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            isTruncated
          >
            {props.name}
          </Box>
        </Flex>
        <Box d='flex' alignItems='baseline'>
          {props.isNew && (
            <Badge rounded='full' px='2' fontSize='0.8em' colorScheme='red'>
              New
            </Badge>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
