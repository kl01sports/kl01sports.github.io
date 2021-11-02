import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  useMediaQuery,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Data from './data.json';
import { ICategory, ICategoryList } from './Interfaces';
import ProductCard from './ProductCard';

const CategoryList = () => {
  const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');
  const [categoryData, setCategoryData] = useState<ICategoryList>();

  // const getProducts = () => {
  //   fetch(
  //     'https://raw.githubusercontent.com/maheshmj24/dynamic-formik/main/src/components/DynamicForm/formSchema.json',
  //     {
  //       method: 'GET',
  //       // mode: 'no-cors',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Accept: 'application/json',
  //       },
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const products = JSON.parse(data.message);
  //       setProductData(products);
  //     });
  //   console.log('test');
  // };

  useEffect(() => {
    // getProducts();
    //const test: IProducts = ProductsJSON;
    setCategoryData(Data);
    // console.log(categoryData);
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
