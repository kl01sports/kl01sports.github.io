import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  useMediaQuery,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Data from './data.json';
import { ICategory, IData } from './Interfaces';
import ProductCard from './ProductCard';

const CategoryList = () => {
  const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');
  const [categoryData, setCategoryData] = useState<IData>();

  const getProducts = () => {
    fetch(
      'https://raw.githubusercontent.com/kl01sports/kl01sports.github.io/maheshmj24/features/src/components/data.json',
      {
        method: 'GET',
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setCategoryData(data);
      });
    console.log('test');
  };

  useEffect(() => {
    // getProducts();
    setCategoryData(Data);
  }, []);

  return (
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
          <Heading>Featured Categories </Heading>
        </Box>
      </Flex>
      <SimpleGrid
        columns={3}
        // minChildWidth='28vw'
        spacing={10}
        p={isNotSmallerScreen ? '12' : '0'}
      >
        {categoryData?.categories.map((category: ICategory) => {
          return (
            <Box
              _hover={{
                cursor: 'pointer',
              }}
              onClick={() =>
                (window.location.href = '/products?category=' + category.id)
              }
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
