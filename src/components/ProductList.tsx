import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ICategory, IProduct } from './Interfaces';
// import Data from './data.json';
import ProductCard from './ProductCard';
import TopNavbar from './TopNavBar';

const ProductList = () => {
  const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');
  const [productData, setProductData] = useState<ICategory>();

  const getProducts = (category: string) => {
    fetch('https://raw.githubusercontent.com/kl01sports/data/main/data.json', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        const categoryData = data.categories.find(
          (c: ICategory) => c.id === category
        );
        setProductData(categoryData);
      });

    //Testing purposes
    // const categoryData = Data.categories.find(
    //   (c: ICategory) => c.id === category
    // );
    // setProductData(categoryData);
  };

  const location = useLocation();

  useEffect(() => {
    const queryParameters = new URLSearchParams(location.search);
    if (queryParameters && queryParameters.get('category')) {
      const category = queryParameters.get('category');
      if (category) getProducts(category);
    }
  }, [location.search]);

  return (
    <VStack pt={0}>
      <TopNavbar></TopNavbar>
      {/* <Hero></Hero> */}
      <Box width='100%' p={0}>
        <Flex
          direction={isNotSmallerScreen ? 'row' : 'column'}
          spacing='200px'
          p={{ base: '3', md: '6' }}
          alignSelf='flex-start'
        >
          <Box mt={{ base: '1', md: '4' }} align='flex-start'>
            <Heading>{productData?.name} </Heading>
          </Box>
        </Flex>
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          // minChildWidth='300px'
          spacing='50px'
          p={{ base: '2', md: '4' }}
        >
          {productData?.products?.map((product: IProduct) => {
            return (
              <ProductCard
                name={product.name}
                imageURL={product.imageURL}
                isNew={product.isNew}
              ></ProductCard>
            );
          })}
        </SimpleGrid>
      </Box>
    </VStack>
  );
};

export default ProductList;
