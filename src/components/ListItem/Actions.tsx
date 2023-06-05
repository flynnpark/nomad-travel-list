import { CountryItemType } from '../../atoms';
import useActions from '../../hooks/useActions';
import { DEFAULT_SVG_SIZE } from '../../utils/constants';
import { CheckIcon, HandThumbDownIcon, HandThumbUpIcon, NoSymbolIcon, TrashIcon } from '../icons';

interface ActionsProps {
  country: CountryItemType;
}

function Actions({ country }: ActionsProps) {
  if (country.category === 'wantToGo') {
    return <WantToGoActions country={country} />;
  }

  if (country.category === 'haveBeen') {
    return <HaveBeenActions country={country} />;
  }

  if (country.category === 'favorite') {
    return <FavoriteActions country={country} />;
  }

  return null;
}

function WantToGoActions({ country }: ActionsProps) {
  const { handleChangeCategory, handleRemove } = useActions();

  return (
    <>
      <button onClick={handleChangeCategory(country.id, 'haveBeen')}>
        <CheckIcon width={DEFAULT_SVG_SIZE} height={DEFAULT_SVG_SIZE} />
      </button>
      <button onClick={handleRemove(country.id)}>
        <TrashIcon width={DEFAULT_SVG_SIZE} height={DEFAULT_SVG_SIZE} />
      </button>
    </>
  );
}
function HaveBeenActions({ country }: ActionsProps) {
  const { handleChangeCategory } = useActions();

  return (
    <>
      <button onClick={handleChangeCategory(country.id, 'favorite')}>
        <HandThumbUpIcon width={DEFAULT_SVG_SIZE} height={DEFAULT_SVG_SIZE} />
      </button>
      <button onClick={handleChangeCategory(country.id, 'wantToGo')}>
        <NoSymbolIcon width={DEFAULT_SVG_SIZE} height={DEFAULT_SVG_SIZE} />
      </button>
    </>
  );
}

function FavoriteActions({ country }: ActionsProps) {
  const { handleChangeCategory } = useActions();

  return (
    <>
      <button onClick={handleChangeCategory(country.id, 'haveBeen')}>
        <HandThumbDownIcon width={DEFAULT_SVG_SIZE} height={DEFAULT_SVG_SIZE} />
      </button>
    </>
  );
}

export default Actions;
