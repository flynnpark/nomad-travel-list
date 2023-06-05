import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';

import { countriesState } from '../atoms';

interface FormData {
  countryName: string;
}

function InputForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const setCountries = useSetRecoilState(countriesState);

  const onValid = ({ countryName }: FormData) => {
    setCountries((prevCountries) => [
      {
        id: Date.now(),
        name: countryName,
        category: 'wantToGo',
      },
      ...prevCountries,
    ]);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input type="text" {...register('countryName', { required: 'Required!' })} />
      {errors.countryName?.message}
      <button type="submit">가보자고!</button>
    </form>
  );
}

export default InputForm;
