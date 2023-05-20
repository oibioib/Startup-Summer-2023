import { Link } from 'react-router-dom';

import { LogoSvg } from '@assets';

import useStyles from './Logo.styles';

const Logo = () => {
  const { classes } = useStyles();

  return (
    <Link to="/">
      <LogoSvg className={classes.logo} />
    </Link>
  );
};

export default Logo;
