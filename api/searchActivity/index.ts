import { baseSearchurl } from '../api';
import axios from 'axios';

const searchResult = (searchTerm: any, pageIndex: any, pageSize: any) =>
  axios.get(`${baseSearchurl}/V1/common/global-search`, {
    params: {
      searchTerm: searchTerm,
      pageIndex: pageIndex,
      pageSize: pageSize,
    },
  });

const SearchActivity = {
  searchResult,
};

export default SearchActivity;
