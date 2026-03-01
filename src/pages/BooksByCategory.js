import React from 'react';
import { Helmet } from 'react-helmet';

import { useLocation, Link } from 'react-router-dom';
import { Box, Heading, useBreakpointValue } from '@chakra-ui/core';
import SingleCatBooks from '../components/books/SingleCatBooks';
import BooksFilter from '../components/books/BooksFilter';
import Headroom from 'react-headroom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Books() {
  let query = useQuery();
  let category = query.get('category');
  let translate = query.get('translate');

  const activeLink = {
    background: '#000',
    color: 'white',
  };

  //   let { category } = useParams();
  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
    <Box mt={isSmallScreen ? '0' : '70px'} mb="100px">
      <Helmet>
        <title>{category}</title>
      </Helmet>
      <Box
        position="fixed"
        top={isSmallScreen ? '60px' : '70px'}
        zIndex="10"
        width="full"
      >
        <BooksFilter />
      </Box>
      <Box
        pr={['3%', '5%', '5%', '3%']}
        pl={['3%', '5%', '5%', '3%']}
        mb={{ base: '4em', md: '100px' }}
        mt={{ base: '60px', md: '0' }}
      >
        <Box m="4">
          <Heading fontFamily="diodrum-bold !important">{category}</Heading>
        </Box>
        <Box d="flex" m="2" justifyContent="flex-end">
          <Link to={`/books_by_category?category=${category}&translate=0`}>
            <Heading
              fontFamily="diodrum-med !important"
              fontWeight="normal"
              size="md"
              my="2"
              pt="1"
              pb="4"
              px="5"
              style={translate === '0' ? activeLink : {}}
            >
              عربي
            </Heading>
          </Link>
          <Link to={`/books_by_category?category=${category}&translate=1`}>
            <Heading
              fontFamily="diodrum-med !important"
              fontWeight="normal"
              size="md"
              my="2"
              pt="1"
              pb="4"
              px="5"
              style={translate === '1' ? activeLink : {}}
            >
              مترجم
            </Heading>
          </Link>
        </Box>
        <SingleCatBooks translate={translate} category={category} />
      </Box>
    </Box>
  );
}
