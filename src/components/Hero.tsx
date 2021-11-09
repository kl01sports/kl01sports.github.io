import {
  Flex,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import Logo from '../media/tee.jpg';

const Hero = () => {
  return (
    <Flex
      w={'full'}
      h={{ base: '300px', md: '400px' }}
      backgroundImage={Logo}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <VStack
        w={'full'}
        justify={'center'}
        align={'start'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
      >
        <Stack
          maxW={{ base: '50%', md: '40%' }}
          align={'flex-start'}
          spacing={6}
        >
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={{ base: '2xl', md: '4xl' }}
            // maxW='30vw'
          >
            Welcome to KL 01 SPORTS, <br />
            your go to place for quality jerseys.
          </Text>
          {/* <Stack direction={'row'}>
            <Button
              bg={'blue.400'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'blue.500' }}
            >
              Show me more
            </Button>
            <Button
              bg={'whiteAlpha.300'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}
            >
              Show me more
            </Button>
          </Stack> */}
        </Stack>
      </VStack>
    </Flex>
  );
};

export default Hero;
