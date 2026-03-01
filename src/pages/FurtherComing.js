import React from 'react';
import { Helmet } from 'react-helmet';

import { useLocation } from 'react-router-dom';
import { Box, useBreakpointValue } from '@chakra-ui/core';
import Further from '../components/books/Further';
import BooksFilter from '../components/books/BooksFilter';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Books() {
  let query = useQuery();
  let furthercoming = query.get('furthercoming');
  let translate = query.get('translate');

  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
    <Box mt={isSmallScreen ? '0' : '70px'} mb="100px">
      <Helmet>
        <title>قريبا من المتوسط</title>
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
        <Further furthercoming={furthercoming} translate={translate}></Further>
      </Box>
    </Box>
  );
}
