import { VStack } from '@chakra-ui/react';
import React from 'react';
import CategoryList from './CategoryList';
import Hero from './Hero';
import Testimonial from './Testimonial';
import TopNavbar from './TopNavBar';

const Home = () => {
  return (
    <VStack pt={0}>
      <TopNavbar></TopNavbar>
      <Hero></Hero>
      <CategoryList></CategoryList>
      <Testimonial></Testimonial>
    </VStack>
  );
};

export default Home;
