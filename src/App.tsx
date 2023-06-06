import { Fragment } from 'react';
import { useRecoilValue } from 'recoil';

import { countriesSelector } from './atoms';
import InputForm from './components/InputForm';
import ListItem from './components/ListItem';

function App() {
  const datas = useRecoilValue(countriesSelector);

  return (
    <>
      {datas.map((section) => (
        <Fragment key={section.id}>
          <h1>{section.name}</h1>
          {section.id === 'wantToGo' && <InputForm />}
          <ul>
            {section.countries.map((country) => (
              <ListItem key={country.id} country={country} />
            ))}
          </ul>
        </Fragment>
      ))}
    </>
  );
}

export default App;
