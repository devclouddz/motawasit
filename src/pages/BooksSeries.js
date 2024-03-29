import React from 'react';
import { Helmet } from 'react-helmet';

import {
  Box,
  Image,
  Skeleton,
  Heading,
  useColorMode,
  Spinner,
  Text,
  useBreakpointValue,
} from '@chakra-ui/core';
import { Link, useLocation } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

import { connect } from 'react-redux';
import Masonry from 'react-masonry-css';

import { getBooksBySerie } from '../redux/actions/booksActions';
import BooksFilter from '../components/books/BooksFilter';
import Headroom from 'react-headroom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function CatBooks({ getBooksBySerie }) {
  const { colorMode } = useColorMode();

  const bg = { light: 'white', dark: '#151a23' };
  let query = useQuery();
  let serie = query.get('serie');
  const [data, setData] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);
  const imageLoaded = () => {
    setLoaded(true);
  };
  React.useEffect(() => {
    async function getData() {
      const res = await getBooksBySerie(serie);
      if (res) {
        setData(res.data);
      }
    }
    getData();
  }, [serie]);
  const breakpointColumns = {
    default: 4,
    1300: 4,
    1100: 3,
    1000: 2,
    700: 1,
  };

  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
    <Box mt={isSmallScreen ? '0' : '70px'} mb="100px">
      <Helmet>
        <title>{serie}</title>
      </Helmet>
      {isSmallScreen && (
        <Headroom
          className="book-filter"
          style={{
            top: '70px',
            left: '0px',
            right: '0px',
            zIndex: '1',
            transform: 'translate3D(0px, 0px, 0px)',
            transition: 'all .5s ease-in-out 0s',
          }}
        >
          <BooksFilter />
        </Headroom>
      )}
      {!isSmallScreen && <BooksFilter />}
      <Box
        pr={['10%', '5%', '5%', '3%']}
        pl={['10%', '5%', '5%', '3%']}
        mb="100px"
      >
        <Box m="4">
          <Heading fontFamily="diodrum-bold !important">{serie}</Heading>
        </Box>
        {!data && (
          <Box textAlign="center">
            <Spinner size="xl" />
          </Box>
        )}

        <Masonry
          breakpointCols={breakpointColumns}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {data &&
            data.books &&
            data.books.length !== 0 &&
            data.books.map(book => (
              <Link key={book.id} to={`/book/${book.id}`}>
                <Box
                  mt="8"
                  pb="4"
                  shadow="lg"
                  bg={bg[colorMode]}
                  maxW="400px"
                  mx="auto"
                >
                  <LazyLoad once height="350px">
                    <Skeleton w="100%" isLoaded={loaded}>
                      <Image
                        loading="lazy"
                        onLoad={imageLoaded}
                        w="100%"
                        m="0 auto"
                        shadow="lg"
                        src={`${process.env.REACT_APP_STORAGE}/${book.cover}`}
                      ></Image>
                    </Skeleton>
                  </LazyLoad>
                  <Heading m="4"> {book.title} </Heading>
                  <Text fontSize="2xl" m="2">
                    {' '}
                    {book?.author[0]?.name}{' '}
                  </Text>
                  <Box
                    m="4"
                    fontSize="xl"
                    className="content books__content"
                    dangerouslySetInnerHTML={{ __html: book.overview }}
                  ></Box>
                </Box>
              </Link>
            ))}
        </Masonry>
      </Box>
    </Box>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    getBooksBySerie: serie => dispatch(getBooksBySerie(serie)),
  };
};

export default connect(null, mapDispatchToProps)(CatBooks);
