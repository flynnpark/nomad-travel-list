import { Country } from '../../atoms';
import Actions from './Actions';

interface ListItemProps {
  country: Country;
}

function ListItem({ country }: ListItemProps) {
  return (
    <li>
      {country.name} <Actions country={country} />
    </li>
  );
}

export default ListItem;
