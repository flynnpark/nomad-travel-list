import { atom, selector } from 'recoil';

export const categories = [
  { id: 'wantToGo', name: '내가 가고싶은 나라들' },
  { id: 'haveBeen', name: '내가 가본 나라들' },
  { id: 'favorite', name: '내가 좋아하는 나라들' },
] as const;

export type CategoryIdType = (typeof categories)[number]['id'];

export interface CountryItemType {
  id: number;
  name: string;
  category: CategoryIdType;
}

export const countriesState = atom<CountryItemType[]>({
  key: 'countries',
  default: [],
});

export const countriesSelector = selector({
  key: 'countriesSelector',
  get: ({ get }) => {
    const countries = get(countriesState);
    return categories.map((category) => ({
      category,
      countries: countries.filter((country) => country.category === category.id),
    }));
  },
});
