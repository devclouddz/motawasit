// Navbar.js
import React, { useCallback } from 'react';
import {
  Box,
  Flex,
  useColorMode,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Image,
  SimpleGrid,
  Heading,
  useBreakpointValue,
  Center,
  Spinner,
} from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSearch } from '../../redux/actions/searchActions';
import { FaSearch } from 'react-icons/fa';
import { AiOutlineShop } from 'react-icons/ai';
import Newsletter from './NewsLetter';
import hdark from '../../images/hdark.png';
import hlight from '../../images/hlight.png';
import { MagazineIcon } from '../MagazineIcon';
import SearchBox from './SearchBox';
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { FaChevronDown } from "react-icons/fa";


function Navbar({ getSearch, searchResults, isLoading }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  const bg = { light: '#f5f2ef', dark: '#1a202c' };
  const bgIcon = { light: '#000', dark: '#fff' };
  const color = { light: 'white', dark: 'black' };

  const handleSearch = useCallback((query) => {
    if (query.trim()) {
      getSearch(query);
    }
  }, [getSearch]);

  const navClassName = useBreakpointValue({ base: '', md: 'topNavbar' });

  return (
    <Flex
    h={{ base: '60px', md: '70px' }}
    className={navClassName}
    borderBottom="1px solid #ddd"
    as="nav"
    align="center"
    justify="space-between"
    wrap="wrap"
    padding={{ base: '0.3rem', md: '0.5rem' }}
    color={color[colorMode]}
    bg={bg[colorMode]}
  >
    <Box
      ml={{ base: '2%', md: '8%' }}
      d="flex"
      alignItems="center"
      justifyContent="flex-end"
      flexGrow={1}
    >
      {/* home */}
      <a href={process.env.REACT_APP_HOME} target="_blank" rel="noreferrer">
        <Box
          cursor="pointer"
          d="flex"
          rounded="5px"
          color={color[colorMode]}
          m="3px"
          w="50px"
          h="50px"
          fontSize="30px"
          position="relative"
          fontWeight="bold"
          justifyContent="center"
        >
          {colorMode === 'light' ? (
            <Image rounded="5px" w="50px" h="50px" src={hdark} />
          ) : (
            <Image rounded="5px" w="50px" h="50px" src={hlight} />
          )}
        </Box>
      </a>
  
      {/* magazine
      <Link to="/magazine">
        <Center
          cursor="pointer"
          rounded="5px"
          bg={bgIcon[colorMode]}
          color={color[colorMode]}
          m="3px"
          p="10px"
          w="50px"
          h="50px"
          fontSize="28px"
        >
          <MagazineIcon />
        </Center>
      </Link> */}
  
      {/* search */}
      <Box fontSize="18px">
        <Box
          rounded="5px"
          onClick={onOpen}
          bg={bgIcon[colorMode]}
          color={color[colorMode]}
          m="3px"
          p="10px"
          w="50px"
          h="50px"
          fontSize="28px"
        >
          <FaSearch />
        </Box>
        <Drawer placement="bottom" onClose={onClose} isOpen={isOpen} size="full">
          <DrawerOverlay>
            <DrawerContent pt={['100px', '0']} bg="black" color="white">
              <DrawerCloseButton
                position="absolute"
                top="50px"
                left="10px"
                right="none"
                mt={['100px', '0']}
              />
              <DrawerHeader fontSize="36px">بحث</DrawerHeader>
              <DrawerBody>
                <SearchBox onSearch={handleSearch} isLoading={isLoading} />
                {isLoading ? (
                  <Center mt={4}>
                    <Spinner />
                  </Center>
                ) : searchResults ? (
                  <Box mt={4}>
                    {searchResults.books && searchResults.books.length > 0 && (
                      <Box>
                        <Heading m="8">كتب</Heading>
                        <SimpleGrid spacing={8} columns={[2, 2, 3, 8]}>
                          {searchResults.books.map(book => (
                            <Link onClick={onClose} key={book.id} to={`/book/${book.id}`}>
                              <Image
                                loading="lazy"
                                src={`${process.env.REACT_APP_STORAGE}/${book.cover}`}
                              />
                              <Heading size="md" mt="2">
                                {book.title}
                              </Heading>
                            </Link>
                          ))}
                        </SimpleGrid>
                      </Box>
                    )}
                    {searchResults.authors && searchResults.authors.length > 0 && (
                      <Box>
                        <Heading m="8">كتاب</Heading>
                        <SimpleGrid spacing={8} columns={[2, 2, 3, 8]}>
                          {searchResults.authors.map(author => (
                            <Link onClick={onClose} key={author.id} to={`/author/${author.id}`}>
                              <Image
                                loading="lazy"
                                src={`${process.env.REACT_APP_STORAGE}/${author.image}`}
                              />
                              <Heading size="md" mt="2">
                                {author.name}
                              </Heading>
                            </Link>
                          ))}
                        </SimpleGrid>
                      </Box>
                    )}
                    {searchResults.articles && searchResults.articles.length > 0 && (
                      <Box>
                        <Heading m="8">مقالات</Heading>
                        <SimpleGrid spacing={8} columns={[2, 2, 3, 8]}>
                          {searchResults.articles.map(article => (
                            <Link onClick={onClose} key={article.id} to={`/article/${article.id}`}>
                              <Image
                                loading="lazy"
                                src={`${process.env.REACT_APP_STORAGE}/${article.image}`}
                              />
                              <Heading size="md" mt="2">
                                {article.title}
                              </Heading>
                            </Link>
                          ))}
                        </SimpleGrid>
                      </Box>
                    )}
                  </Box>
                ) : (
                  <Box mt={4}>No results found</Box>
                )}
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Box>
  
      {/* newsletter */}
      <Newsletter />
  
      {/* shop */}
      <a target="_blank" rel="noreferrer" href={process.env.REACT_APP_SHOP}>
        <Box
          rounded="5px"
          bg={bgIcon[colorMode]}
          color={color[colorMode]}
          m="3px"
          p="10px"
          w="50px"
          h="50px"
          fontSize="28px"
        >
          <AiOutlineShop />
        </Box>
      </a>
  
      {/* Dropdown Menu */}
      <Menu>
  <MenuButton
    as={Box}
    rounded="5px"
    cursor="pointer"
    bg={bgIcon[colorMode]}
    color={color[colorMode]}
    m="3px"
    p="10px"
    w="50px"
    h="50px"
    fontSize="28px"
    d="flex"
    alignItems="center"
    justifyContent="center"
  >
    {/* <ChevronDownIcon /> */}
    <FaChevronDown />
  </MenuButton>
  <MenuList bg="black" color="white" border="1px solid #ddd" p="5px" rounded="md">
    <MenuItem
      as="a"
      href="https://almutawassit.it/"
      target="_blank"
      rel="noreferrer"
      bg="black"
      color="white"
      p="10px 20px"
      rounded="md"
      _hover={{ bg: "#333", transition: "background-color 0.2s ease" }}
    >
      منشورات المتوسط
    </MenuItem>
    <MenuItem
      as="a"
      href="https://mutab.it/"
      target="_blank"
      rel="noreferrer"
      bg="black"
      color="white"
      p="10px 20px"
      rounded="md"
      _hover={{ bg: "#333", transition: "background-color 0.2s ease" }}
    >
      موتاب
    </MenuItem>
    <MenuItem
      as="a"
      href="https://baraat.it/"
      target="_blank"
      rel="noreferrer"
      bg="black"
      color="white"
      p="10px 20px"
      rounded="md"
      _hover={{ bg: "#333", transition: "background-color 0.2s ease" }}
    >
      برائات
    </MenuItem>
    <MenuItem
      as="a"
      href="https://misccenter.com/"
      target="_blank"
      rel="noreferrer"
      bg="black"
      color="white"
      p="10px 20px"
      rounded="md"
      _hover={{ bg: "#333", transition: "background-color 0.2s ease" }}
    >
      مركز دراسات المتوسط
    </MenuItem>
    {/* <MenuItem
      as="a"
      href="https://link4.com"
      target="_blank"
      rel="noreferrer"
      bg="black"
      color="white"
      p="10px 20px"
      rounded="md"
      _hover={{ bg: "#333", transition: "background-color 0.2s ease" }}
    >
      موتا
    </MenuItem> */}
  </MenuList>
</Menu>

    </Box>
  </Flex>
  );
}

const mapStateToProps = state => ({
  searchResults: state.search.results,
  isLoading: state.search.isLoading,
});

const mapDispatchToProps = {
  getSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);