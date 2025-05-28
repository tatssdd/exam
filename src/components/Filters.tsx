import { Select, DatePicker, Button, Input, ConfigProvider, Flex } from 'antd';
import { categories } from '../utils/categories';
import styled from '@emotion/styled';

const StyledFilters = styled(Flex)`
  justify-content: space-around;
  height: 33px;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

interface FiltersProps {
  categoryFilter: string | null;
  setCategoryFilter: (category: string | null) => void;
  setDateFilter: (date: string | null) => void;
  favoriteFilter: boolean;
  setFavoriteFilter: (fav: boolean) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const Filters = ({
  categoryFilter,
  setCategoryFilter,
  setDateFilter,
  favoriteFilter,
  setFavoriteFilter,
  searchTerm,
  setSearchTerm,
}: FiltersProps) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <StyledFilters>
        <Select
          allowClear
          placeholder='Тип мероприятия'
          style={{ flex: 1, maxWidth: '140px' }}
          options={categories}
          value={categoryFilter}
          onChange={(category) => setCategoryFilter(category)}
        >
          <Select.Option value='sample'>Sample</Select.Option>
        </Select>
        <ConfigProvider>
          <DatePicker
            format='DD.MM.YYYY'
            onChange={(date) => setDateFilter(date ? date.toISOString() : null)}
          />
        </ConfigProvider>
        <Button
          style={{ flex: 1, maxWidth: '140px' }}
          onClick={() => setFavoriteFilter(!favoriteFilter)}
        >
          {favoriteFilter ? 'Все' : 'Только избранные'}
        </Button>
      </StyledFilters>
      <Input
        allowClear
        placeholder='Поиск по названию'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};
