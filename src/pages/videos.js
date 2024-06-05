import React from 'react';
import {
  Box,
  SimpleGrid,
} from '@chakra-ui/core';
import { connect } from 'react-redux';
import { getVideos } from '../redux/actions/poscastsActions';
import { Helmet } from 'react-helmet';

import VideoModal from '../components/VideoModal';

function Podcasts({ getVideos }) {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    async function getData() {
      const res = await getVideos();
      console.log(res);
      if (res) {
        setData(res.data);
      }
    }
    getData();
  }, []);

  const artic =
    data && Object.keys(data.articles).map(key => data.articles[key]);
  const books = data && Object.keys(data.books).map(key => data.books[key]);
  return (
    <Box mt={{ base: '2em', md: '6em' }} mb="700px" pl="10%" pr="10%">
      {data && (
        <Box>
          <Helmet>
            <title>فيديو المتوسط</title>
          </Helmet>
          {/*
          <SimpleGrid mt="8" mb="4" columns={[1, 1, 3, 3]} spacing="8">
            {books.length !== 0 &&
              books.map(podcast => (
                <VideoBookModal podcast={podcast}></VideoBookModal>
              ))}
          </SimpleGrid>

          <SimpleGrid mt="8" mb="4" columns={[1, 1, 3, 3]} spacing="8">
            {artic.length !== 0 &&
              artic.map(podcast => (
                <VideoArticleModal podcast={podcast}></VideoArticleModal>
              ))}
          </SimpleGrid>
        */}
          <SimpleGrid mt="8" mb="4" columns={[1, 1, 3, 3]} spacing="8">
            {data.podcasts.length !== 0 &&
              data.podcasts.map(podcast => (
                <VideoModal podcast={podcast}></VideoModal>
              ))}
          </SimpleGrid>
        </Box>
      )}
    </Box>
  );
}

const mapDispatchToProps = dispatch => {
  return { getVideos: () => dispatch(getVideos()) };
};

export default connect(null, mapDispatchToProps)(Podcasts);
