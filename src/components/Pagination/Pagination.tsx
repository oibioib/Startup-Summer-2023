import { useMemo } from 'react';

import { usePageParam } from '@hooks';
import { Center, Pagination as MantinePagination } from '@mantine/core';

import useStyles from './Pagination.styles';

const Pagination = ({ totalPages }: { totalPages: number }) => {
  const { activePage, setPageParam } = usePageParam();
  const { classes } = useStyles();
  const isPagination = useMemo(() => totalPages > 1, [totalPages]);

  return (
    <>
      {isPagination ? (
        <Center>
          <MantinePagination
            value={activePage ? +activePage : 1}
            onChange={setPageParam}
            total={totalPages}
            className={classes.pagination}
            classNames={{ dots: classes.dots, control: classes.control }}
          />
        </Center>
      ) : null}
    </>
  );
};

export default Pagination;
