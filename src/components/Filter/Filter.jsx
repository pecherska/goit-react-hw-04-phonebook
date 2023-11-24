import { FilterContainer, FilterInpur } from './Filter.styled';
const Filter = ({ name, onChange }) => {
  return (
    <FilterContainer>
      <label>Find contacts by name</label>
      <FilterInpur type="text" value={name} onChange={onChange}></FilterInpur>
    </FilterContainer>
  );
};

export default Filter;
