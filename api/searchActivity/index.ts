import { baseSearchurl } from "../api";
import axios from 'axios';

const searchResult = ({searchTerm,pageIndex,pageSize}: any) => axios.get(`${baseSearchurl}/V1/common/global-search`,{ params: { searchTerm: searchTerm,pageIndex:pageIndex,pageSize:pageSize } })

const SearchActivity = {
    searchResult
};

export default SearchActivity;