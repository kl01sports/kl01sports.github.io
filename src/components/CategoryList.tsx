import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  useMediaQuery,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
// import Data from './data.json';
import { ICategory, IData } from './Interfaces';
import ProductCard from './ProductCard';

const CategoryList = () => {
  const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');
  const [categoryData, setCategoryData] = useState<IData>();

  const getProducts = () => {
    fetch('https://raw.githubusercontent.com/kl01sports/data/main/data.json', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setCategoryData(data);
      });
  };

  useEffect(() => {
    getProducts();
    // setCategoryData(Data);
  }, []);

  return (
    <Box width='100%' p={0}>
      <Flex
        direction={isNotSmallerScreen ? 'row' : 'column'}
        spacing='200px'
        p={{ base: '3', md: '6' }}
        alignSelf='flex-start'
      >
        <Box mt={{ base: '1', md: '4' }} align='flex-start'>
          <Heading>Featured Categories </Heading>
        </Box>
      </Flex>
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        // minChildWidth='300px'
        spacing='50px'
        p={{ base: '2', md: '4' }}
      >
        {categoryData?.categories.map((category: ICategory) => {
          return (
            <Box
              _hover={{
                cursor: 'pointer',
              }}
              onClick={() =>
                (window.location.href = '#/products?category=' + category.id)
              }
              display='inline-block'
            >
              <ProductCard
                name={category.name}
                imageURL={category.imageURL}
              ></ProductCard>
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default CategoryList;
