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
import Data from './data.json';
import { ICategory, IProduct } from './Interfaces';
import ProductCard from './ProductCard';
import TopNavbar from './TopNavBar';

const ProductList = () => {
  const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');
  const [productData, setProductData] = useState<ICategory>();

  const getProducts = (category: string) => {
    const categoryData = Data.categories.find(
      (c: ICategory) => c.id === category
    );
    setProductData(categoryData);
  };

  const location = useLocation();

  useEffect(() => {
    const queryParameters = new URLSearchParams(location.search);
    if (queryParameters && queryParameters.get('category')) {
      const category = queryParameters.get('category');
      if (category) getProducts(category);
    }
  }, []);

  return (
    <VStack pt={0}>
      <TopNavbar></TopNavbar>
      {/* <Hero></Hero> */}
      <Box width='100%' p={0}>
        <Flex
          direction={isNotSmallerScreen ? 'row' : 'column'}
          spacing='200px'
          pt={isNotSmallerScreen ? '12' : '0'}
          pl={isNotSmallerScreen ? '12' : '0'}
          pr={isNotSmallerScreen ? '12' : '0'}
          // pb={isNotSmallerScreen ? '12' : '0'}
          alignSelf='flex-start'
        >
          <Box mt={isNotSmallerScreen ? '0' : 16} align='flex-start'>
            <Heading>{productData?.name} </Heading>
          </Box>
        </Flex>
        <SimpleGrid
          columns={3}
          // minChildWidth='28vw'
          spacing={10}
          p={isNotSmallerScreen ? '12' : '0'}
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
