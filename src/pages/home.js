import React from 'react';
import Masonry from 'react-masonry-css';
import { Helmet } from 'react-helmet';

import {
  Heading,
  Box,
  useColorMode,
  Image,
  Skeleton,
  Spinner,
  Text,
} from '@chakra-ui/core';
import { Link } from 'react-router-dom';
// import fx from 'money';
import { connect } from 'react-redux';
import { getHome } from '../redux/actions/homeActions';

function Home({ getHome }) {
  const { colorMode } = useColorMode();

  const bg = { light: 'white', dark: '#151a23' };
  const [data, setData] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);
  const imageLoaded = () => {
    setLoaded(true);
  };
  React.useEffect(() => {
    async function getData() {
      const res = await getHome();
      console.log(res);
      if (res) {
        setData(res.data);
      }
    }
    getData();
  }, []);

  const breakpointColumnsObj = {
    default: 3,
    1300: 3,
    1100: 2,
    1000: 1,
  };
  const breakpointColumns = {
    default: 4,
    1300: 4,
    1100: 3,
    1000: 2,
    700: 1,
  };

  return (
    <Box pr="10%" pl="10%" mt="100px" mb="100px">
      <Helmet>
        <title>منشورات المتوسط</title>
      </Helmet>
      {!data && (
        <Box textAlign="center">
          <Spinner size="xl" />
        </Box>
      )}
      <Text mb="2">{data && data.image.name}</Text>
      <Image
        loading="lazy"
        src={`${process.env.REACT_APP_STORAGE}/${data && data.image.image}`}
      ></Image>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data &&
          data.articles &&
          data.articles.map(article => {
            const articleBody = article.body.split('\n');
            const body = articleBody[0] + '' + articleBody[1];

            return (
              <Link key={article.id} to={`/singlePost/${article.id}`}>
                <Box
                  bg={bg[colorMode]}
                  w="100%"
                  shadow="lg"
                  // p="2"
                  pb="4"
                  // m="4"
                  mt="8"
                  cursor="pointer"
                >
                  <Skeleton w="100%" isLoaded={loaded}>
                    <Image
                      loading="lazy"
                      w="100%"
                      onLoad={imageLoaded}
                      src={`${process.env.REACT_APP_STORAGE}/${article.image}`}
                    />
                  </Skeleton>
                  <Text m="4" fontSize="lg" fontFamily="diodrum-med !important">
                    {article.author}
                  </Text>
                  <Heading fontFamily="diodrum-bold !important" m="4">
                    {' '}
                    {article.title}{' '}
                  </Heading>
                  <Box
                    m="4"
                    fontSize="xl"
                    className="content books__content event-body"
                  >
                    <Box dangerouslySetInnerHTML={{ __html: body }} />
                  </Box>
                </Box>
              </Link>
            );
          })}
      </Masonry>

      <Masonry
        breakpointCols={breakpointColumns}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data &&
          data.books &&
          data.books.map(book => (
            <Link key={book.id} to={`/book/${book.id}`}>
              <Box mt="8" pb="4" shadow="lg" bg={bg[colorMode]}>
                <Image
                  loading="lazy"
                  mt="2"
                  w="100%"
                  src={`${process.env.REACT_APP_STORAGE}/${book.cover}`}
                ></Image>
                <Text fontFamily="diodrum-med !important" m="4">
                  {' '}
                  {book?.author[0]?.name}{' '}
                </Text>
                <Heading fontFamily="diodrum-bold !important" m="4">
                  {' '}
                  {book.title}{' '}
                </Heading>

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
  );
}
const mapDispatchToProps = dispatch => {
  return { getHome: () => dispatch(getHome()) };
};

export default connect(null, mapDispatchToProps)(Home);
