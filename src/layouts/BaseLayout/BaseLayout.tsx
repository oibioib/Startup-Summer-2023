import { Outlet } from 'react-router-dom';

import { useScroll } from '@hooks';
import { Header } from '@layouts';
import { AppShell, Container as AppShellContainer, Header as AppShellHeader } from '@mantine/core';

import useStyles from './BaseLayout.styles';

const BaseLayout = () => {
  const { classes, cx } = useStyles();
  const scrolled = useScroll();

  return (
    <AppShell
      header={
        <AppShellHeader
          height={{ base: 100, xs: 50, sm: 70, xl: 84 }}
          className={cx({ [classes.header_shadow]: scrolled })}
        >
          <Header />
        </AppShellHeader>
      }
    >
      <AppShellContainer pt={{ base: 'md', md: 'lg', xl: 'xl' }} h="100%">
        <Outlet />
      </AppShellContainer>
    </AppShell>
  );
};

export default BaseLayout;
