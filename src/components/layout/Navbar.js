import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Heading,
  Flex,
  Badge,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useToast,
  useDisclosure,
  Image,
  useColorMode,
  Input,
  Button,
  Stack,
  useColorModeValue,
  useMediaQuery,
  useBreakpointValue,
} from '@chakra-ui/core';
// import { ChevronDownIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaChevronUp } from 'react-icons/fa';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from '@chakra-ui/react';

// import Up from '../../util/Up';

import logo from '../../images/logo.png';

export default function Navbar(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isSmallerThan1230] = useMediaQuery('(max-width: 1230px)');

  const bg = { light: '#000000', dark: '#1a202c' };
  const color = { light: 'white', dark: 'white' };
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  const btnRef = React.useRef();

  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <Flex
        style={
          !isSmallScreen
            ? {
                position: 'fixed',
                width: '100%',
                zIndex: '99',
                bottom: 0,
                right: 0,
              }
            : {}
        }
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding={{ base: '0.3rem', md: '0.5rem' }}
        borderTop="1px solid white"
        //   shadow="lg"
        color={color[colorMode]}
        bg={bg[colorMode]}
        {...props}
      >
        <Flex align="center" mr={5}>
          <Link to="/home">
            <Heading
              cursor="pointer"
              fontWeight="bold"
              as="h1"
              fontSize="36px"
              letterSpacing={'-.1rem'}
            >
              <Image
                loading="lazy"
                w={{ base: '150px', md: '220px' }}
                className="main-logo"
                src={logo}
              ></Image>
            </Heading>
          </Link>
        </Flex>

        <Box display={isSmallerThan1230 ? 'block' : 'none'} onClick={onOpen}>
          <GiHamburgerMenu style={{ marginLeft: 10, fontSize: 28 }} />
        </Box>

        <Box
          display={isSmallerThan1230 ? 'none' : 'flex'}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          textAlign="center"
          justifyContent="flex-end"
          flexGrow={1}
        >
          <Text
            mt={{ base: 4, md: 0 }}
            ml="1.6vw"
            display="block"
            fontWeight="bold"
            fontSize="lg"
            fontFamily="diodrum-bold !important"
          >
            <Link onClick={handleToggle} to="/books">
              كتب المتوسط
            </Link>
          </Text>
          <Text
            mt={{ base: 4, md: 0 }}
            ml="1.6vw"
            display="block"
            fontWeight="bold"
            fontSize="lg"
            fontFamily="diodrum-bold !important"
          >
            <Link onClick={handleToggle} to="/ourWriters/writers">
              كتّاب المتوسط
            </Link>
          </Text>

          <Menu>
            <MenuButton
              // px={4}
              // py={2}
              mt={{ base: 4, md: 0 }}
              ml="1.6vw"
              fontSize="lg"
              fontWeight="bold"
              transition="all 0.2s"
              // _hover={{ bg: 'gray.100' }}
              // _focus={{ outline: 0, boxShadow: 'outline' }}
              fontFamily="diodrum-bold !important"
            >
              مشاريعنا
              <FaChevronUp
                className="project-chevron"
                style={{
                  display: 'inline',
                  marginRight: 3,
                  marginTop: 5,
                }}
              ></FaChevronUp>{' '}
            </MenuButton>
            <MenuList w="100vw" bg={bg[colorMode]} shadow="xl">
              {/* <SimpleGrid pl="5%" pr="5%" columns={4}> */}
              <Flex
                alignItems="center"
                p="4"
                h={{ base: 'auto', md: '400px' }}
                flexWrap="wrap"
                direction="column"
              >
                <Link onClick={handleToggle} to="/ourProjects/divineComedy">
                  <MenuItem
                    _focus={{ bg: 'white', color: 'black' }}
                    _hover={{ bg: 'white', color: 'black' }}
                    fontSize="lg"
                  >
                    <Box display="flex">
                      <Heading
                        fontFamily="diodrum-bold !important"
                        fontSize={['lg', 'lg', '2xl', '2xl']}
                      >
                        {' '}
                        الكوميديا الإلهية
                      </Heading>
                    </Box>
                  </MenuItem>
                </Link>
                <Link onClick={handleToggle} to="/ourProjects/translationForum">
                  <MenuItem
                    _focus={{ bg: 'white', color: 'black' }}
                    _hover={{ bg: 'white', color: 'black' }}
                    fontSize="lg"
                  >
                    <Box display="flex">
                      <Heading
                        fontFamily="diodrum-bold !important"
                        fontSize={['lg', 'lg', '2xl', '2xl']}
                      >
                        {' '}
                        ملتقى الترجمة
                      </Heading>
                    </Box>
                  </MenuItem>
                </Link>
                <Link
                  onClick={handleToggle}
                  to="/ourProjects/arabCultureFestivalInMilan"
                >
                  <MenuItem
                    _focus={{ bg: 'white', color: 'black' }}
                    _hover={{ bg: 'white', color: 'black' }}
                    fontSize="lg"
                  >
                    <Box display="flex">
                      <Heading
                        fontFamily="diodrum-bold !important"
                        fontSize={['lg', 'lg', '2xl', '2xl']}
                      >
                        {' '}
                        مهرجان الثقافة العربية في ميلانو
                      </Heading>
                    </Box>
                  </MenuItem>
                </Link>
                <Link
                  onClick={handleToggle}
                  to="/ourProjects/literatureIsStronger"
                >
                  <MenuItem
                    _focus={{ bg: 'white', color: 'black' }}
                    _hover={{ bg: 'white', color: 'black' }}
                    fontSize="lg"
                  >
                    <Box display="flex">
                      <Heading
                        fontFamily="diodrum-bold !important"
                        fontSize={['lg', 'lg', '2xl', '2xl']}
                      >
                        {' '}
                        الأدب أقوى
                      </Heading>
                    </Box>
                  </MenuItem>
                </Link>
              </Flex>
              {/* </SimpleGrid> */}
            </MenuList>
          </Menu>

          <Text
            mt={{ base: 4, md: 0 }}
            ml="1.6vw"
            display="block"
            fontWeight="bold"
            fontSize="lg"
            fontFamily="diodrum-bold !important"
          >
            <Link onClick={handleToggle} to="/blog">
              المدونة
            </Link>
          </Text>
          <Text
            mt={{ base: 4, md: 0 }}
            ml="1.6vw"
            display="block"
            fontWeight="bold"
            fontSize="lg"
            fontFamily="diodrum-bold !important"
          >
            <Link onClick={handleToggle} to="/events">
              نشاطات
            </Link>
          </Text>

          <Text
            fontFamily="diodrum-bold !important"
            fontWeight="bold"
            mt={{ base: 4, md: 0 }}
            ml="1.6vw"
            display="block"
            fontSize="18px"
          >
            <Link onClick={handleToggle} to="/podcast">
              بودكاست
            </Link>
          </Text>
          <Text
            fontFamily="diodrum-bold !important"
            fontWeight="bold"
            mt={{ base: 4, md: 0 }}
            ml="1.6vw"
            display="block"
            fontSize="18px"
          >
            <Link onClick={handleToggle} to="/videos">
              فيديو
            </Link>
          </Text>

          <Text
            mt={{ base: 4, md: 0 }}
            ml="1.6vw"
            display="block"
            fontWeight="bold"
            fontSize="lg"
            fontFamily="diodrum-bold !important"
          >
            <Link onClick={handleToggle} to="/about">
              عن المتوسط
            </Link>
          </Text>
          <Text
            mt={{ base: 4, md: 0 }}
            ml="1.6vw"
            display="block"
            fontWeight="bold"
            fontSize="lg"
            fontFamily="diodrum-bold !important"
          >
            <Link onClick={handleToggle} to="/ourWriters/publishConditions">
              أنشر معنا
            </Link>
          </Text>

          {/* <ShopBadge></ShopBadge> */}
          <Box
            cursor="pointer"
            mx="1vw"
            mt={['6', '6', '0', '0']}
            fontSize="24px"
            onClick={toggleColorMode}
          >
            {' '}
            {colorMode === 'light' ? <FaMoon></FaMoon> : <FaSun></FaSun>}
          </Box>
          {/* <Up></Up> */}
        </Box>
      </Flex>

      {/*Moblile nav*/}

      <Drawer
        // style={{dir:"rtl"}}

        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent color={color[colorMode]} bg={bg[colorMode]}>
          {/*<DrawerCloseButton/>*/}
          <DrawerHeader>
            <Flex wrap={'nowrap'} style={{ justifyContent: 'space-between' }}>
              <Link onClick={onClose} to="/">
                <Heading
                  cursor="pointer"
                  fontWeight="bold"
                  as="h1"
                  fontSize="36px"
                  letterSpacing={'-.1rem'}
                >
                  <Image
                    loading="lazy"
                    w="200px"
                    className="main-logo"
                    src={logo}
                  ></Image>
                </Heading>
              </Link>
              <Box cursor="pointer" fontSize="24px" onClick={toggleColorMode}>
                {' '}
                {colorMode === 'light' ? <FaMoon></FaMoon> : <FaSun></FaSun>}
              </Box>
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            <Text
              fontFamily="diodrum-bold !important"
              mt={{ base: 4, md: 0 }}
              ml={8}
              display="block"
              fontWeight="bold"
              fontSize="lg"
            >
              <Link onClick={onClose} to="/books">
                كتب المتوسط
              </Link>
            </Text>
            <Text
              fontFamily="diodrum-bold !important"
              mt={2}
              ml={8}
              display="block"
              fontWeight="bold"
              fontSize="lg"
            >
              <Link onClick={onClose} to="/ourWriters/writers">
                كتّاب المتوسط
              </Link>
            </Text>

            <Text
              fontFamily="diodrum-bold !important"
              mt={2}
              ml={8}
              display="block"
              fontWeight="bold"
              fontSize="lg"
            >
              <Link onClick={onClose} to="/blog">
                المدونة
              </Link>
            </Text>
            <Text
              fontFamily="diodrum-bold !important"
              mt={2}
              ml={8}
              display="block"
              fontWeight="bold"
              fontSize="lg"
            >
              <Link onClick={onClose} to="/events">
                نشاطات
              </Link>
            </Text>

            <Text
              fontFamily="diodrum-bold !important"
              mt={2}
              ml={8}
              display="block"
              fontWeight="bold"
              fontSize="lg"
            >
              <Link onClick={onClose} to="/podcast">
                بودكاست
              </Link>
            </Text>

            <Text
              fontFamily="diodrum-bold !important"
              mt={2}
              ml={8}
              display="block"
              fontWeight="bold"
              fontSize="lg"
            >
              <Link onClick={onClose} to="/videos">
                فيديو
              </Link>
            </Text>

            <Text
              fontFamily="diodrum-bold !important"
              mt={2}
              ml={8}
              display="block"
              fontWeight="bold"
              fontSize="lg"
            >
              <Link onClick={onClose} to="/about">
                عن المتوسط
              </Link>
            </Text>

            <Text
              fontFamily="diodrum-bold !important"
              mt={2}
              ml={8}
              display="block"
              fontWeight="bold"
              fontSize="lg"
            >
              <Link onClick={onClose} to="/ourWriters/publishConditions">
                أنشر معنا
              </Link>
            </Text>
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
