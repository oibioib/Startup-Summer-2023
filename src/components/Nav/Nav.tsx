import { NavLink, useLocation } from 'react-router-dom';

import { APP_SETTINGS } from '@constants';
import { Box } from '@mantine/core';

import useStyles from './Nav.styles';

const Nav = () => {
  const { classes, cx } = useStyles();
  const { pathname } = useLocation();

  const links = APP_SETTINGS.PAGES_IN_NAV.map((page) => {
    const { ID, ROUTE, TITLE } = APP_SETTINGS.PAGES[page];
    const isNotNestedRoute = pathname === ROUTE;

    return (
      <Box key={ID} component="li">
        <NavLink
          to={ROUTE}
          className={({ isActive }) =>
            cx(classes.link, {
              [classes.link_active]: isActive,
              [classes.link_not_nested]: isNotNestedRoute,
            })
          }
        >
          {TITLE}
        </NavLink>
      </Box>
    );
  });

  return (
    <Box component="ul" className={classes.nav}>
      {links}
    </Box>
  );
};

export default Nav;
