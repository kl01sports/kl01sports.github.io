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
    <Flex w='full' alignItems='center' justifyContent='center'>
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        // maxW='sm'
        w={{ base: '100%', md: '30vw' }}
        // h='300px'
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
          w='100%'
          h='400px'
          fallback={<Box w='100%' h='400px' background='black'></Box>}
        />

        <Box p='6'>
          <Flex mt='1' justifyContent='space-between' alignContent='center'>
            <Box
              fontSize={{ base: '2xl', md: '2xl' }}
              fontWeight='bold'
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
    </Flex>
  );
};

export default ProductCard;
