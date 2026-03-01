import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Box, useBreakpointValue } from '@chakra-ui/core';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { getBooks } from '../redux/actions/booksActions';
import CatBooks from '../components/books/catBooks';
import BooksFilter from '../components/books/BooksFilter';
import Headroom from 'react-headroom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Home({ getBooks }) {
  let query = useQuery();
  let translate = query.get('translate');

  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    getBooks(null, null, translate, null);
  }, [translate, getBooks]);

  return (
    <Box mt={isSmallScreen ? '0' : '70px'} mb="100px">
      <Helmet>
        <title>كتب المتوسط</title>
      </Helmet>
      <Box
        position="fixed"
        top={isSmallScreen ? '0' : '70px'}
        zIndex="10"
        width="full"
      >
        <BooksFilter />
      </Box>

      <Box
        pr={['3%', '5%', '5%', '5%']}
        pl={['3%', '5%', '5%', '5%']}
        mb={{ base: '4em', md: '100px' }}
        mt={{ base: '60px', md: '150px' }}
      >
        <CatBooks translate={translate} />
      </Box>
    </Box>
  );
}

const mapDispatchToProps = (dispatch) => {
  return { getBooks: (category, featured, translate, furthercoming) => dispatch(getBooks(category, featured, translate, furthercoming)) };
};

export default connect(null, mapDispatchToProps)(Home);
