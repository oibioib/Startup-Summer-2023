import { StarIcon } from '@assets';
import { DATA_ELEMS } from '@constants';
import { useFavoritesStorage } from '@hooks';
import { ActionIcon } from '@mantine/core';

import useStyles from './AddToFavoritesButton.styles';

const AddToFavoritesButton = ({ vacancy }: { vacancy: VacancyData }) => {
  const { classes, cx } = useStyles();
  const { isFavorite, toggleFavorite } = useFavoritesStorage();
  const isVacancyInFavorites = isFavorite(vacancy.id);

  const onFavoriteClickHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(vacancy);
  };

  return (
    <ActionIcon
      variant="transparent"
      onClick={onFavoriteClickHandler}
      className={cx(classes.icon, { [classes.icon_active]: isVacancyInFavorites })}
      data-elem={DATA_ELEMS.VACANCY_SHORTLIST_BUTTON.replace(
        DATA_ELEMS.VACANCY_ID_TEMPLATE,
        vacancy.id.toString()
      )}
    >
      <StarIcon />
    </ActionIcon>
  );
};

export default AddToFavoritesButton;
