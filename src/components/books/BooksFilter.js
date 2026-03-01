import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  Box,
  Flex,
  Text,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Heading,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  DrawerHeader,
  IconButton,
  SimpleGrid,
  Center,
  useMediaQuery,
  Spinner,
  useDisclosure,
} from '@chakra-ui/core';
import { NavLink, Link } from 'react-router-dom';
import { FaChevronDown, FaTimes } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

import { connect } from 'react-redux';
import { getSeries, getCat } from '../../redux/actions/seriesActions';

function Navbar({ getSeries, getCat }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSmallerThan420] = useMediaQuery('(max-width:420px)');
  const [isLargerThan790] = useMediaQuery('(min-width: 790px)');
  const { colorMode } = useColorMode();

  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [cat, setCat] = useState(null);

  const bg = { light: '#f5f2ef', dark: '#1a202c' };
  const filter = { light: '#000000', dark: '#1a202c' };

  const hoverBg = { light: '#000', dark: 'white' };
  const hoverClr = { light: 'white', dark: '#000' };

  useEffect(() => {
    async function getData() {
      const categories = await getCat();
      if (Array.isArray(categories)) {
        setCat(categories);
      } else {
        console.error('Expected an array for categories, but got:', categories);
        setCat([]);
      }

      const series = await getSeries();
      if (Array.isArray(series)) {
        setData(series);
      } else {
        console.error('Expected an array for series, but got:', series);
        setData([]);
      }
    }
    getData();
  }, [getCat, getSeries]);

  const handleToggle = () => setShow(!show);

  const onOpened = () => {
    document.body.style.overflow = 'hidden';
  };

  const onClosed = () => {
    document.body.style.overflow = '';
  };

  return (
    <Flex
      borderBottom="1px solid #ddd"
      as="nav"
      align="center"
      bg={bg[colorMode]}
      overflowX={{ base: 'auto', sm: 'auto' }}
      wrap={['nowrap', 'nowrap', 'wrap', 'wrap']}
      direction={['row', 'row', 'row', 'row']} 
      // justifyContent="center" // Centering the items

    >
      {!isLargerThan790 && (
        <IconButton
          mr="1em"
          onClick={onOpen}
          icon={<GiHamburgerMenu size="25px" />}
          bg="transparent"
          _hover={{ bg: 'transparent' }}
          _focus={{ bg: 'transparent' }}
          _active={{ bg: 'transparent' }}
        />
      )}
      {isLargerThan790 && (
        <Flex pr="20" w="100%">
          <NavLink
            activeStyle={{
              fontWeight: 'bold',
              color: 'white',
              backgroundColor: 'black',
            }}
            to="/featured?featured=1"
          >
            <Flex
              h="100%"
              direction="column"
              justifyContent="center"
              _hover={{
                bg: hoverBg[colorMode],
                color: hoverClr[colorMode],
              }}
              _focus={{
                bg: hoverBg[colorMode],
                color: hoverClr[colorMode],
              }}
              _active={{
                bg: hoverBg[colorMode],
                color: hoverClr[colorMode],
              }}
            >
              <Text
                whiteSpace="nowrap"
                fontWeight="bold"
                p="4"
                fontSize={['lg', '2xl']}
                fontFamily="diodrum-med !important"
              >
                آخر الإصدارات
              </Text>
            </Flex>
          </NavLink>
          <NavLink
            activeStyle={{
              fontWeight: 'bold',
              color: 'white',
              backgroundColor: 'black',
            }}
            to="/books"
          >
            <Flex
              h="100%"
              direction="column"
              justifyContent="center"
              _hover={{
                bg: hoverBg[colorMode],
                color: hoverClr[colorMode],
              }}
              _focus={{
                bg: hoverBg[colorMode],
                color: hoverClr[colorMode],
              }}
              _active={{
                bg: hoverBg[colorMode],
                color: hoverClr[colorMode],
              }}
            >
              <Text
                whiteSpace="nowrap"
                fontWeight="bold"
                p="4"
                fontSize={['lg', '2xl']}
                fontFamily="diodrum-med !important"
              >
                جميعها
              </Text>
            </Flex>
          </NavLink>

          <Menu onOpen={onOpened} onClose={onClosed}>
            <MenuButton
              display="block"
              whiteSpace="nowrap"
              as={Text}
              p="4"
              fontSize={['lg', '2xl']}
              fontWeight="bold"
              transition="all 0.2s"
              _hover={{
                bg: hoverBg[colorMode],
                color: hoverClr[colorMode],
              }}
              _focus={{
                bg: hoverBg[colorMode],
                color: hoverClr[colorMode],
              }}
              _active={{
                bg: hoverBg[colorMode],
                color: hoverClr[colorMode],
              }}
              fontFamily="diodrum-med !important"
              cursor="pointer"
            >
              حسب الصنف
              <FaChevronDown
                style={{
                  display: 'inline',
                  fontSize: 15,
                  marginRight: 3,
                  marginTop: 5,
                }}
              ></FaChevronDown>{' '}
            </MenuButton>
            <MenuList
              h="60vh"
              w="100vw"
              color="white"
              overflowY={{ base: 'scroll', sm: 'scroll' }}
              bg={filter[colorMode]}
            >
              {!data && (
                <Box w="100%" mt="50" mb="50" textAlign="center">
                  <Spinner size="xl" />
                </Box>
              )}
              <SimpleGrid
                pl={['5%', '5%', '15%', '15%']}
                pr={['5%', '5%', '15%', '15%']}
                py={['5%', '0%', '0%', '0%']}
                columns={[1, 2, 3, 3, 4]}
              >
                {cat &&
                  cat.map(category => {
                    if (isSmallerThan420) {
                      return (
                        <Center key={category.id}>
                          <Link
                            style={{ margin: '50px !important' }}
                            onClick={handleToggle}
                            to={`/books_by_category?category=${category.key}`}
                          >
                            <Box m={['0.9', '4']}>
                              <MenuItem
                                _focus={{ bg: 'white', color: 'black' }}
                                _hover={{ bg: 'white', color: 'black' }}
                                fontSize="xl"
                              >
                                <Box display="flex">
                                  <Heading
                                    fontFamily="diodrum-med !important"
                                    fontSize={['lg', 'lg', 'xl', 'xl']}
                                  >
                                    {category.name}
                                  </Heading>
                                </Box>
                              </MenuItem>
                            </Box>
                          </Link>
                        </Center>
                      );
                    } else {
                      return (
                        <Link
                          key={category.id}
                          style={{ margin: '50px !important' }}
                          onClick={handleToggle}
                          to={`/books_by_category?category=${category.key}`}
                        >
                          <Box m={['0.9', '4']}>
                            <MenuItem
                              _focus={{ bg: 'white', color: 'black' }}
                              _hover={{ bg: 'white', color: 'black' }}
                              fontSize="xl"
                            >
                              <Box display="flex">
                                <Heading
                                  fontFamily="diodrum-med !important"
                                  fontSize={['lg', 'lg', 'xl', 'xl']}
                                >
                                  {category.name}
                                </Heading>
                              </Box>
                            </MenuItem>
                          </Box>
                        </Link>
                      );
                    }
                  })}
              </SimpleGrid>
            </MenuList>
          </Menu>
          <Menu onOpen={onOpened} onClose={onClosed}>
            <MenuButton
              display="block"
              whiteSpace="nowrap"
              as={Text}
              p="4"
              fontSize={['lg', '2xl']}
              fontWeight="bold"
              transition="all 0.2s"
              _hover={{
                bg: hoverBg[colorMode],
                color: hoverClr[colorMode],
              }}
              _focus={{
                bg: hoverBg[colorMode],
                color: hoverClr[colorMode],
              }}
              _active={{
                bg: hoverBg[colorMode],
                color: hoverClr[colorMode],
              }}
              fontFamily="diodrum-med !important"
              cursor="pointer"
            >
              حسب السلسلات
              <FaChevronDown
                style={{
                  display: 'inline',
                  fontSize: 15,
                  marginRight: 3,
                  marginTop: 5,
                }}
              ></FaChevronDown>{' '}
            </MenuButton>
            <MenuList
              h="60vh"
              w="100vw"
              color="white"
              overflowY={{ base: 'scroll', sm: 'scroll' }}
              bg={filter[colorMode]}
            >
              {!data && (
                <Box w="100%" mt="50" mb="50" textAlign="center">
                  <Spinner size="xl" />
                </Box>
              )}
              <SimpleGrid
                pl={['5%', '5%', '15%', '15%']}
                pr={['5%', '5%', '15%', '15%']}
                py={['5%', '0%', '0%', '0%']}
                columns={[1, 2, 3, 3, 4]}
              >
                {data &&
                  data.map(serie => {
                    if (isSmallerThan420) {
                      return (
                        <Center key={serie.id}>
                          <Link
                            style={{ margin: '50px !important' }}
                            onClick={handleToggle}
                            to={`/books_by_serie?serie=${serie.key}`}
                          >
                            <Box m={['0.9', '4']}>
                              <MenuItem
                                _focus={{ bg: 'white', color: 'black' }}
                                _hover={{ bg: 'white', color: 'black' }}
                                fontSize="xl"
                              >
                                <Box display="flex">
                                  <Heading
                                    fontFamily="diodrum-med !important"
                                    fontSize={['lg', 'lg', 'xl', 'xl']}
                                  >
                                    {serie.name}
                                  </Heading>
                                </Box>
                              </MenuItem>
                            </Box>
                          </Link>
                        </Center>
                      );
                    } else {
                      return (
                        <Link
                          key={serie.id}
                          style={{ margin: '50px !important' }}
                          onClick={handleToggle}
                          to={`/books_by_series?serie=${serie.name}`}
                        >
                          <Box m={['0.9', '4']}>
                            <MenuItem
                              _focus={{ bg: 'white', color: 'black' }}
                              _hover={{ bg: 'white', color: 'black' }}
                              fontSize="xl"
                            >
                              <Box display="flex">
                                <Heading
                                  fontFamily="diodrum-med !important"
                                  fontSize={['lg', 'lg', 'xl', 'xl']}
                                >
                                  {serie.name}
                                </Heading>
                              </Box>
                            </MenuItem>
                          </Box>
                        </Link>
                      );
                    }
                  })}
              </SimpleGrid>
            </MenuList>
          </Menu>
        </Flex>
      )}

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg={filter[colorMode]} color="white">
          <DrawerHeader>
            <Flex justifyContent="space-between" alignItems="center">
              <Heading fontFamily="diodrum-med !important" fontSize="xl">
                التصنيفات
              </Heading>
              <IconButton
                icon={<FaTimes />}
                onClick={onClose}
                bg="transparent"
                color="white"
                _hover={{ bg: 'transparent' }}
              />
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <NavLink
              activeStyle={{
                fontWeight: 'bold',
                color: 'black',
                backgroundColor: 'white',
              }}
              to="/featured?featured=1"
              onClick={onClose}
            >
              <Text
                fontWeight="bold"
                p="3"
                fontSize="xl"
                fontFamily="diodrum-med !important"
                _hover={{ bg: 'white', color: 'black' }}
              >
                آخر الإصدارات
              </Text>
            </NavLink>
            <NavLink
              activeStyle={{
                fontWeight: 'bold',
                color: 'black',
                backgroundColor: 'white',
              }}
              to="/books"
              onClick={onClose}
            >
              <Text
                fontWeight="bold"
                p="3"
                fontSize="xl"
                fontFamily="diodrum-med !important"
                _hover={{ bg: 'white', color: 'black' }}
              >
                جميعها
              </Text>
            </NavLink>

            <Accordion allowToggle>
              <AccordionItem border="none">
                <AccordionButton p="3" _hover={{ bg: 'white', color: 'black' }}>
                  <Text
                    flex="1"
                    textAlign="right"
                    fontWeight="bold"
                    fontSize="xl"
                    fontFamily="diodrum-med !important"
                  >
                    حسب الصنف
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  {cat &&
                    cat.map(category => (
                      <Link
                        key={category.id}
                        onClick={onClose}
                        to={`/books_by_category?category=${category.key}`}
                      >
                        <Text
                          p="2"
                          fontSize="lg"
                          fontFamily="diodrum-med !important"
                          _hover={{ bg: 'white', color: 'black' }}
                        >
                          {category.name}
                        </Text>
                      </Link>
                    ))}
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem border="none">
                <AccordionButton p="3" _hover={{ bg: 'white', color: 'black' }}>
                  <Text
                    flex="1"
                    textAlign="right"
                    fontWeight="bold"
                    fontSize="xl"
                    fontFamily="diodrum-med !important"
                  >
                    حسب السلسلات
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  {data &&
                    data.map(serie => (
                      <Link
                        key={serie.id}
                        onClick={onClose}
                        to={`/books_by_series?serie=${serie.name}`}
                      >
                        <Text
                          p="2"
                          fontSize="lg"
                          fontFamily="diodrum-med !important"
                          _hover={{ bg: 'white', color: 'black' }}
                        >
                          {serie.name}
                        </Text>
                      </Link>
                    ))}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

const mapStateToProps = state => ({
  series: state.series,
  categories: state.categories,
});

export default connect(mapStateToProps, { getSeries, getCat })(Navbar);
