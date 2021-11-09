import {
  Flex,
  Heading,
  IconButton,
  Spacer,
  useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import { FaInstagram, FaMoon, FaSun, FaWhatsapp } from 'react-icons/fa';

const TopNavbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Flex w='100%' p={{ base: 2, md: 5 }}>
      <Heading
        ml={{ base: 4, md: 8 }}
        size='md'
        fontWeight='bold'
        color='cyan.400'
        alignSelf={'center'}
        onClick={() => (window.location.href = '/')}
        _hover={{
          cursor: 'pointer',
        }}
      >
        KL 01 SPORTS
      </Heading>
      <Spacer />

      <IconButton
        aria-label=''
        ml={{ base: 1, md: 2 }}
        icon={<FaInstagram />}
        isRound={true}
        onClick={() => window.open('https://www.instagram.com/abhiram_hari_/')}
      ></IconButton>
      <IconButton
        aria-label=''
        ml={{ base: 1, md: 2 }}
        icon={<FaWhatsapp />}
        isRound={true}
        onClick={() =>
          window.open('https://api.whatsapp.com/send?phone=918301049118')
        }
      ></IconButton>

      <IconButton
        aria-label=''
        ml={{ base: 4, md: 8 }}
        icon={isDark ? <FaSun /> : <FaMoon />}
        isRound={true}
        onClick={toggleColorMode}
      ></IconButton>
    </Flex>
  );
};

export default TopNavbar;
