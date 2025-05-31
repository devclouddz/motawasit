import React from 'react';
import { Helmet } from 'react-helmet';

import {
  Box,
  Heading,
  Text,
  Image,
  Divider,
  Button,
  Grid,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  List,
  ListItem,
  Flex,
  Skeleton,
  useColorMode,
  Spinner,
  AspectRatio,
  useBreakpointValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from '@chakra-ui/core';
import Carousel from 'react-elastic-carousel';
import { useParams, Link, Redirect } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';
import { getBook } from '../redux/actions/booksActions';

import GlobalShare from '../util/GlobalShare';

function Book({ getBook }) {
  const { colorMode } = useColorMode();
  const breakPointMd = useBreakpointValue({ base: false, md: true });

  const bg = { light: '#f5f2ef', dark: '#1a202c' };
  const color = { light: 'black', dark: 'white' };

  let { id } = useParams();
  const [data, setData] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);
  const [shouldRedirect, setShouldRedirect] = React.useState(false); // Add this state

  const imageLoaded = () => {
    setLoaded(true);
  };

  React.useEffect(() => {
    async function getData() {
      const res = await getBook(id);
      console.log(res)
      console.log(res.status)
      console.log(res?.status === 404)
      if (res?.data) {
        setData(res.data);
        console.log('book data', res.data);
      } else if (res?.status === 404) {
        setShouldRedirect(true); // Set redirect state instead of returning JSX
      }
    }
    getData();
  }, [id]);

  // Handle redirect at the component level
  if (shouldRedirect) {
    return <Redirect to="/404" replace />;
  }

  console.log(data);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1900, itemsToShow: 4 },
  ];
  const bookBreakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 4, itemsToScroll: 4 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 4 },
  ];

  return (
    <Box mt={{ base: '2em', md: '6em' }}>
      <Box mb="2em">
        {!data && (
          <Box textAlign="center">
            <Spinner size="xl" />
          </Box>
        )}
        {data && (
          <>
            <Helmet>
              <title>{data.title}</title>
            </Helmet>
            <Flex
              direction={['column', 'column', 'column', 'row']}
              px={['2%', '2%', '5%', '5%']}
              gap="10px"
            >
              <Box w={{ base: '100%', lg: '30%' }} maxW="400px" mx="auto">
                <Box>
                  <Skeleton isLoaded={loaded}>
                    <Image
                      loading="lazy"
                      onLoad={imageLoaded}
                      shadow="lg"
                      mx="auto"
                      src={`${process.env.REACT_APP_STORAGE}/${data.cover}`}
                    />
                  </Skeleton>
                </Box>
                <Flex direction="column" align="center" py="1.5em">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={`${process.env.REACT_APP_SHOP}/book/${data.id}`}
                    style={{ width: '100%' }}
                  >
                    <Button
                      rounded="20px"
                      mt="4"
                      w="100%"
                      colorScheme="red"
                      fontFamily="diodrum-med !important"
                    >
                      لشراء الكتاب المس هنا
                    </Button>
                  </a>
                  <Box mt="4" w="90%">
                    <GlobalShare />
                  </Box>
                  <Box w={['300px', '300px', '400px', '400px']}>
                    {data.podcast && (
                      <Box>
                        <iframe
                          title={data.title}
                          width="100%"
                          height="100"
                          scrolling="no"
                          frameBorder="no"
                          allow="autoplay"
                          src={data.podcast}
                        ></iframe>
                      </Box>
                    )}
                    {data.video && (
                      <AspectRatio ratio={1}>
                        <Box
                          fontSize="2xl"
                          className="content"
                          dangerouslySetInnerHTML={{ __html: data.video }}
                        ></Box>
                      </AspectRatio>
                    )}
                  </Box>
                </Flex>
              </Box>
              <Box
                w={{ base: '100%', lg: '70%' }}
                mr={{ base: '0', lg: '1.5em' }}
                p="1em"
              >
                <Box>
                  <Heading fontFamily="diodrum-med !important" mb="4">
                    {data.title}
                  </Heading>
                  <Divider />
                  <Text fontFamily="diodrum-med !important" fontSize="2xl">
                    {data.sub_title}
                  </Text>
                  {data.author.map(author => (
                    <Box key={author.id} d="inline-block" ml="1em">
                      <Link key={author.id} to={`/author/${author.id}`}>
                        <Text
                          _hover={{
                            bg: 'black',
                            color: 'white',
                            textDecoration: 'underline',
                          }}
                          mt="2"
                          fontSize="2xl"
                          color="gray.500"
                        >
                          {author.name}
                        </Text>
                      </Link>
                    </Box>
                  ))}
                  <Divider />
                  {data.translate_from && (
                    <Text mt="2" fontSize="2xl">
                      ترجم عن : {data.translate_from}
                    </Text>
                  )}
                  <Box
                    my="4"
                    fontSize="2xl"
                    className="content"
                    dangerouslySetInnerHTML={{ __html: data.overview }}
                  />
                  <Divider />
                </Box>
                {breakPointMd && (
                  <Tabs>
                    <TabList className="booktablist">
                      {data.description && (
                        <Tab whiteSpace="nowrap" fontSize="18px">
                          عن الكتاب
                        </Tab>
                      )}
                      {data.author && data.author.length > 0 && (
                        <Tab whiteSpace="nowrap" fontSize="18px">
                          عن المؤلف
                        </Tab>
                      )}
                      {data.index && (
                        <Tab whiteSpace="nowrap" fontSize="18px">
                          فهرس الكتاب
                        </Tab>
                      )}
                      {data.from_book && (
                        <Tab whiteSpace="nowrap" fontSize="18px">
                          من الكتاب
                        </Tab>
                      )}
                      {data.press_external_link && (
                        <Tab whiteSpace="nowrap" fontSize="18px">
                          في الصحافة
                        </Tab>
                      )}
                      {/* This tab always shows since it contains basic book info */}
                      <Tab whiteSpace="nowrap" fontSize="18px">
                        معلومات الكتاب
                      </Tab>
                    </TabList>

                    <TabPanels>
                      {data.description && (
                        <TabPanel>
                          <Box
                            fontSize="2xl"
                            className="content"
                            style={{ WebkitUserSelect: 'none' }}
                            dangerouslySetInnerHTML={{
                              __html: data.description,
                            }}
                          />
                        </TabPanel>
                      )}
                      {data.author && data.author.length > 0 && (
                        <TabPanel>
                          {data.author.map(author => (
                            <Box key={author.id}>
                              <Heading size="lg">{author.name}</Heading>
                              <Text m="2" fontSize="2xl">
                                {author.author_bio}
                              </Text>
                            </Box>
                          ))}
                        </TabPanel>
                      )}
                      {data.index && (
                        <TabPanel fontSize="xl">
                          <Box
                            fontSize="xl"
                            className="content"
                            dangerouslySetInnerHTML={{ __html: data.index }}
                          />
                        </TabPanel>
                      )}
                      {data.from_book && (
                        <TabPanel fontSize="xl">
                          <Box
                            fontSize="xl"
                            className="content"
                            dangerouslySetInnerHTML={{
                              __html: data.from_book,
                            }}
                          />
                        </TabPanel>
                      )}
                      {data.press_external_link && (
                        <TabPanel>
                          <Box
                            fontSize="xl"
                            className="content"
                            dangerouslySetInnerHTML={{
                              __html: data.press_external_link,
                            }}
                          />
                        </TabPanel>
                      )}
                      {/* This panel always shows */}
                      <TabPanel fontSize="xl">
                        <List mt="4">
                          <ListItem>الناشر : {data.publisher} </ListItem>
                          <ListItem>
                            تاريخ النشر :{' '}
                            {moment(data.publish_date).format('yyyy/MM/DD')}
                          </ListItem>
                          <ListItem>عدد الصفحات : {data.page_number} </ListItem>
                          <ListItem dir="ltr"> {data.isbn} : ISBN </ListItem>
                          <ListItem>السعر : {data.price}€</ListItem>
                          <ListItem>
                            هاشتاغ :{' '}
                            <Box
                              d="inline"
                              className="content"
                              dangerouslySetInnerHTML={{
                                __html: data.hashtag,
                              }}
                            />
                          </ListItem>
                        </List>
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                )}
                {!breakPointMd && (
                  <Accordion allowToggle allowMultiple={true}>
                    {data.description && (
                      <AccordionItem>
                        <AccordionButton
                          bg="#000"
                          color="white"
                          _hover={{ bg: '#000', color: 'white' }}
                        >
                          <Text whiteSpace="nowrap" fontSize="1.5em">
                            عن الكتاب
                          </Text>
                          <AccordionIcon mb="-5px" mr="5px" />
                        </AccordionButton>
                        <AccordionPanel p="0" pb="1em">
                          <Box
                            fontSize="2xl"
                            className="content books__content"
                            style={{ WebkitUserSelect: 'none' }}
                            dangerouslySetInnerHTML={{
                              __html: data.description,
                            }}
                          />
                        </AccordionPanel>
                      </AccordionItem>
                    )}
                    {data.author && data.author.length > 0 && (
                      <AccordionItem>
                        <AccordionButton
                          bg="#000"
                          color="white"
                          _hover={{ bg: '#000', color: 'white' }}
                        >
                          <Text whiteSpace="nowrap" fontSize="1.5em">
                            عن المؤلف
                          </Text>
                          <AccordionIcon mb="-5px" mr="5px" />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                          {data.author.map(author => (
                            <Box key={author.id}>
                              <Heading size="lg">{author.name}</Heading>
                              <Text m="2" fontSize="2xl">
                                {author.author_bio}
                              </Text>
                            </Box>
                          ))}
                        </AccordionPanel>
                      </AccordionItem>
                    )}
                    {data.index && (
                      <AccordionItem>
                        <AccordionButton
                          bg="#000"
                          color="white"
                          _hover={{ bg: '#000', color: 'white' }}
                        >
                          <Text whiteSpace="nowrap" fontSize="1.5em">
                            فهرس الكتاب
                          </Text>
                          <AccordionIcon mb="-5px" mr="5px" />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                          <Box
                            fontSize="xl"
                            className="content"
                            dangerouslySetInnerHTML={{ __html: data.index }}
                          />
                        </AccordionPanel>
                      </AccordionItem>
                    )}
                    {data.from_book && (
                      <AccordionItem>
                        <AccordionButton
                          bg="#000"
                          color="white"
                          _hover={{ bg: '#000', color: 'white' }}
                        >
                          <Text whiteSpace="nowrap" fontSize="1.5em">
                            من الكتاب
                          </Text>
                          <AccordionIcon mb="-5px" mr="5px" />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                          <Box
                            fontSize="xl"
                            className="content"
                            dangerouslySetInnerHTML={{
                              __html: data.from_book,
                            }}
                          />
                        </AccordionPanel>
                      </AccordionItem>
                    )}
                    {data.press_external_link && (
                      <AccordionItem>
                        <AccordionButton
                          bg="#000"
                          color="white"
                          _hover={{ bg: '#000', color: 'white' }}
                        >
                          <Text whiteSpace="nowrap" fontSize="1.5em">
                            في الصحافة
                          </Text>
                          <AccordionIcon mb="-5px" mr="5px" />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                          <Box
                            fontSize="xl"
                            className="content"
                            dangerouslySetInnerHTML={{
                              __html: data.press_external_link,
                            }}
                          />
                        </AccordionPanel>
                      </AccordionItem>
                    )}
                    {/* This accordion item always shows */}
                    <AccordionItem>
                      <AccordionButton
                        bg="#000"
                        color="white"
                        _hover={{ bg: '#000', color: 'white' }}
                      >
                        <Text whiteSpace="nowrap" fontSize="1.5em">
                          معلومات الكتاب
                        </Text>
                        <AccordionIcon mb="-5px" mr="5px" />
                      </AccordionButton>
                      <AccordionPanel fontSize="xl" pb={4}>
                        <List>
                          <ListItem>الناشر : {data.publisher} </ListItem>
                          <ListItem>
                            تاريخ النشر :{' '}
                            {moment(data.publish_date).format('yyyy/MM/DD')}
                          </ListItem>
                          <ListItem>عدد الصفحات : {data.page_number} </ListItem>
                          <ListItem dir="ltr"> {data.isbn} : ISBN </ListItem>
                          <ListItem>السعر : {data.price}€</ListItem>
                          <ListItem>
                            هاشتاغ :{' '}
                            <Box
                              d="inline"
                              className="content"
                              dangerouslySetInnerHTML={{
                                __html: data.hashtag,
                              }}
                            />
                          </ListItem>
                        </List>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                )}
              </Box>
            </Flex>
          </>
        )}
        {data && data.books[0] && (
          <Box
            pr="7%"
            pl="3%"
            // bg={bg[colorMode]}
            bg="black"
            borderBottom="1px solid white"
          >
            <Box
              mt="100px"
              mb="4"
              // color={color[colorMode]}
              color="white"
            >
              <Heading
                fontFamily="diodrum-med !important"
                mr="7%"
                p="4"
                size="lg"
              >
                كتب ذات صلة
              </Heading>
            </Box>
            <Carousel
              breakPoints={bookBreakPoints}
              isRTL={true}
              style={{
                //   marginTop: 100,

                paddingBottom: 10,
              }}
            //   itemsToScroll={3}
            //   itemsToShow={3}
            >
              {data.books.map(book => (
                <a key={book.id} href={`/book/${book.id}`}>
                  <Box w="350px" mb="4" cursor="pointer">
                    <Image
                      loading="lazy"
                      w="225px"
                      h="350px"
                      m="0 auto"
                      shadow="lg"
                      src={`${process.env.REACT_APP_STORAGE}/${book.cover}`}
                    ></Image>
                    <Box
                      fontFamily="diodrum-med !important"
                      color="white"
                      mt="4"
                      textAlign="center"
                    >
                      <Text fontWeight="500" fontSize="xl">
                        {book.title}
                      </Text>
                      <Text fontSize="md">{book.sub_title}</Text>
                      <Text fontSize="sm">{book.author}</Text>
                      {/* <Text fontWeight="bold">€{book.price}</Text> */}
                    </Box>
                  </Box>
                </a>
              ))}
            </Carousel>
          </Box>
        )}
        {data && data.articles[0] && (
          <Box
            pr="5%"
            pl="3%"
            bg={bg[colorMode]}
            color="black"
            borderBottom="1px solid white"
          >
            <Box mb="4" color={color[colorMode]}>
              <Heading
                fontFamily="diodrum-med !important"
                mr="7%"
                p="4"
                size="lg"
              >
                مقالات ذات صلة
              </Heading>
            </Box>
            <Carousel
              breakPoints={breakPoints}
              isRTL={true}
              style={{
                //   marginTop: 100,

                paddingBottom: 10,
              }}
            //   itemsToScroll={3}
            //   itemsToShow={3}
            >
              {data.articles.map(article => (
                <Link to={`/singlePost/${article.id}`} key={article.id}>
                  <Box
                    bg="white"
                    maxW="300px"
                    shadow="lg"
                    pb="4"
                    m={{ base: '1', md: '4' }}
                    cursor="pointer"
                  >
                    <Box>
                      <Skeleton w="100%" isLoaded={loaded}>
                        <Image
                          loading="lazy"
                          w="100%"
                          //   h="200px"
                          onLoad={imageLoaded}
                          src={`${process.env.REACT_APP_STORAGE}/${article.image}`}
                        />
                      </Skeleton>
                      <Text
                        m="2"
                        mt="4"
                        fontSize="lg"
                        fontFamily="diodrum-med !important"
                      >
                        {' '}
                        {article.author}{' '}
                      </Text>
                      <Heading
                        fontFamily="diodrum-med !important"
                        m="2"
                        lineHeight="1.5"
                        fontSize={{ base: 'md', md: 'lg' }}
                      >
                        {article.title}
                      </Heading>
                      <Box
                        m="4"
                        className="content related__content event-body"
                      >
                        <Box
                          dangerouslySetInnerHTML={{ __html: article.body }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Link>
              ))}
            </Carousel>
          </Box>
        )}
      </Box>
    </Box>
  );
}

const mapDispatchToProps = dispatch => {
  return { getBook: id => dispatch(getBook(id)) };
};

export default connect(null, mapDispatchToProps)(Book);