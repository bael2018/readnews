import { useGetSearchNewsQuery } from 'store/query/newsQuery';
import { useDebounce } from 'hooks/useDebounce';
import SearchListNews from '../SearchListNews';
import cls from './search.module.scss';
import { useState } from 'react';

const SearchNews = () => {
  const [search, setSearch] = useState<string>('')
  const value = useDebounce(search)

  const { data, isLoading, error } = useGetSearchNewsQuery({ search: value })

  return (
    <div className={cls['search']}>
      <div className={cls['search-input']}>
        <input 
          type="search" 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
          placeholder='Search' 
        />
      </div>

      {
        search && data && <SearchListNews
          data={data}
          isLoading={isLoading}
          error={error}
        />
      }

      {/* <Pagination/> */}
    </div>
  )
}

export default SearchNews