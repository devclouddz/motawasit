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
import { Link, useLocation, useHistory } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-css';
import ReactPaginate from 'react-paginate';

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
  const [currentPage, setCurrentPage] = React.useState(0);
  const [lastPage, setLastPage] = React.useState(1);

  const location = useLocation();
  const history = useHistory();

  const imageLoaded = () => {
    setLoaded(true);
  };

  React.useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const page = queryParams.get('page');
    if (page) {
      setCurrentPage(Number(page));
    }
  }, [location.search]);

  React.useEffect(() => {
    async function getData() {
      const res = await getBooksBySerie(serie, currentPage + 1);
      if (res) {
        setData(res.data);
        setLastPage(res.data.meta.last_page);
      }
    }
    getData();
  }, [serie, currentPage]);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
    history.push(`?serie=${serie}&page=${selected}`);
  };

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
      <Box
        position="fixed"
        top={isSmallScreen ? '0' : '70px'}
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
                      />
                    </Skeleton>
                  </LazyLoad>
                  <Heading m="4"> {book.title} </Heading>
                  <Text fontSize="2xl" m="2">
                    {book?.author[0]?.name}
                  </Text>
                  <Box
                    m="4"
                    fontSize="xl"
                    className="content books__content"
                    dangerouslySetInnerHTML={{ __html: book.overview }}
                  />
                </Box>
              </Link>
            ))}
        </Masonry>
        {data && data.books && data.books.length !== 0 && (
          <ReactPaginate
            previousLabel={'السابق'}
            nextLabel={'التالى'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={lastPage}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
            forcePage={currentPage}
          />
        )}
      </Box>
    </Box>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    getBooksBySerie: (serie, page) => dispatch(getBooksBySerie(serie, page)),
  };
};

export default connect(null, mapDispatchToProps)(CatBooks);
