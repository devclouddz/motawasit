import React from 'react';
// import { ArrowUpIcon } from '@chakra-ui/icons';
import { animateScroll as scroll } from 'react-scroll';

import { FaChevronUp } from 'react-icons/fa';
import { Box, useBreakpointValue } from '@chakra-ui/core';
import Headroom from 'react-headroom';

export default function Up() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
    <>
      {isSmallScreen && (
        <Box
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            zIndex: 90,
            bottom: '70px',
            left: '20px',
            backgroundColor: '#151a23',
            borderRadius: '50%',
            padding: 10,
            cursor: 'pointer',
          }}
        >
          <FaChevronUp fontSize="24px" color="white" />
        </Box>
      )}
      {!isSmallScreen && (
        <Box
          style={{
            backgroundColor: '#151a23',
            borderRadius: '50%',
            position: 'fixed',
            bottom: 80,
            left: 20,
            zIndex: 997,
            padding: 10,
            cursor: 'pointer',
          }}
          mr="auto"
        >
          <FaChevronUp onClick={scrollToTop} fontSize="24px" color="white" />
        </Box>
      )}
    </>
  );
}
