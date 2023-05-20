import { Logo, Nav } from '@components';
import { Box, Container, Flex } from '@mantine/core';

import useStyles from './Header.styles';

const Header = () => {
  const { classes } = useStyles();

  return (
    <Container h="100%">
      <Flex className={classes.wrapper}>
        <Box className={classes.logo}>
          <Logo />
        </Box>
        <Box component="nav" w="100%">
          <Nav />
        </Box>
      </Flex>
    </Container>
  );
};

export default Header;
