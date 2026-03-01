import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Box, Heading, useBreakpointValue } from '@chakra-ui/core';
import Featured from '../components/books/Featured';
import BooksFilter from '../components/books/BooksFilter';
import { Helmet } from 'react-helmet';
import Headroom from 'react-headroom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Books() {
  let query = useQuery();
  let featured = query.get('featured');
  let translate = query.get('translate');

  let { category } = useParams();

  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
    <Box mt={isSmallScreen ? '0' : '70px'} mb="100px">
      <Helmet>
        <title>آخر إصدرات المتوسط</title>
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
          <Heading>{category}</Heading>
        </Box>
        <Featured
          translate={translate}
          featured={featured}
          category={category}
        ></Featured>
      </Box>
    </Box>
  );
}
