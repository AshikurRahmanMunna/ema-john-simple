import { useEffect, useState } from "react"
import useProducts from "./useProducts";

const useSearch = () => {
    const [search, setSearch] = useState('');
    const [products, setProduct] = useProducts();
    const [searchedProducts, setSearchedProducts] = useState([]);
    const setSearchText = e => {
        setSearch(e.target.value);
        // console.log(e.target.value)
    }
    useEffect(() => {
        // console.log(products)
        const searchedProducts = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
        setSearchedProducts(searchedProducts);
    }, [search])
    
    return {search, setSearchText, searchedProducts};
}

export default useSearch;