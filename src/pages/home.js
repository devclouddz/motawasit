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
import { connect } from 'react-redux';
import { getHome } from '../redux/actions/homeActions';

function Home({ getHome }) {
  const { colorMode } = useColorMode();
  const bg = { light: 'white', dark: '#151a23' };
  const [data, setData] = React.useState({
    image: {},
    articles: [],
    books: []
  });
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

  // Combine and shuffle articles and books
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const combinedItems = React.useMemo(() => {
    const combined = [
      ...(data.articles || []).map(item => ({ ...item, type: 'article' })),
      ...(data.books || []).map(item => ({ ...item, type: 'book' }))
    ];
    return shuffleArray(combined);
  }, [data.articles, data.books]);

  const breakpointColumns = {
    default: 4,
    1300: 4,
    1100: 3,
    1000: 2,
    700: 1,
  };

  return (
    <Box pr={{ base: '3%', md: '10%' }} pl={{ base: '3%', md: '10%' }} mt={{ base: '1em', md: '100px' }} mb={{ base: '4em', md: '100px' }}>
      <Helmet>
        <title>منشورات المتوسط</title>
      </Helmet>
      {!data && (
        <Box textAlign="center">
          <Spinner size="xl" />
        </Box>
      )}
      <Text mb="2">{data && data.image && data.image.name}</Text>
      <Image
        loading="lazy"
        src={`${process.env.REACT_APP_STORAGE}/${data && data.image && data.image.image}`}
      />

      <Masonry
        breakpointCols={breakpointColumns}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {combinedItems.map(item => (
          <Link key={item.id} to={item.type === 'article' ? `/singlePost/${item.id}` : `/book/${item.id}`}>
            <Box
              bg={bg[colorMode]}
              w="100%"
              shadow="lg"
              pb="4"
              mt="8"
              cursor="pointer"
            >
              <Skeleton w="100%" isLoaded={loaded}>
                <Image
                  loading="lazy"
                  w="100%"
                  onLoad={imageLoaded}
                  src={`${process.env.REACT_APP_STORAGE}/${item.type === 'article' ? item.image : item.cover}`}
                />
              </Skeleton>
              <Text m="4" fontSize="lg" fontFamily="diodrum-med !important">
                {item.type === 'article' ? item.author : (item.author && item.author.length > 0 ? item.author[0].name : item.author_optional)}
              </Text>
              <Heading fontFamily="diodrum-bold !important" m="4">
                {item.title}
              </Heading>
              <Box
                m="4"
                fontSize="xl"
                className={`content ${item.type === 'article' ? 'event-body' : 'books__content'}`}
              >
                {item.type === 'article' ? (
                  <Box dangerouslySetInnerHTML={{ __html: item.body.split('\n').slice(0, 2).join('') }} />
                ) : (
                  <Box dangerouslySetInnerHTML={{ __html: item.overview }} />
                )}
              </Box>
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