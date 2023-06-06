import { Country } from '../../atoms';
import useActions from '../../hooks/useActions';
import { CheckIcon, HandThumbDownIcon, HandThumbUpIcon, NoSymbolIcon, TrashIcon } from '../icons';

interface ActionsProps {
  country: Country;
}

function Actions({ country }: ActionsProps) {
  const { handleChangeCategory, handleRemove } = useActions();

  if (country.category === 'wantToGo') {
    return (
      <>
        <button onClick={handleChangeCategory(country.id, 'haveBeen')}>
          <CheckIcon />
        </button>
        <button onClick={handleRemove(country.id)}>
          <TrashIcon />
        </button>
      </>
    );
  }

  if (country.category === 'haveBeen') {
    return (
      <>
        <button onClick={handleChangeCategory(country.id, 'favorite')}>
          <HandThumbUpIcon />
        </button>
        <button onClick={handleChangeCategory(country.id, 'wantToGo')}>
          <NoSymbolIcon />
        </button>
      </>
    );
  }

  if (country.category === 'favorite') {
    return (
      <button onClick={handleChangeCategory(country.id, 'haveBeen')}>
        <HandThumbDownIcon />
      </button>
    );
  }

  return null;
}

export default Actions;
