import { useSetRecoilState } from 'recoil';

import { CategoryID, countriesState, Country } from '../atoms';

function useActions() {
  const setCountries = useSetRecoilState(countriesState);

  const handleChangeCategory = (id: number, category: CategoryID) => () => {
    setCountries((prevCountries) => {
      const currentIndex = prevCountries.findIndex((country) => country.id === id);
      const newCountry: Country = { ...prevCountries[currentIndex], category };
      return [...prevCountries.slice(0, currentIndex), newCountry, ...prevCountries.slice(currentIndex + 1)];
    });
  };

  const handleRemove = (id: number) => () => {
    setCountries((prevCountries) => {
      return prevCountries.filter((country) => country.id !== id);
    });
  };

  return {
    handleChangeCategory,
    handleRemove,
  };
}

export default useActions;
