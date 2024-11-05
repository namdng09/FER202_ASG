import React, { useEffect, useState } from "react";
import AppContext from "./Context";
import axios from "axios";

function AppProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [meta, setMeta] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState([]);

  const [brand, setBrand] = useState('');
  const [card, setCard] = useState([]);


  useEffect(() => {

    fetchData(page, limit);
  }, [page, limit]);

  const fetchData = async (page, limit) => {
    try {

      const resProducts = await axios.get("http://localhost:9999/products/?_page=" + page + "&_limit=" + limit);
      setProducts(resProducts.data);

      const resCategory = await axios.get("http://localhost:9999/categories");
      setCategory(resCategory.data);

      const resMeta = await axios.get("http://localhost:9999/meta");
      setMeta(resMeta.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearchTerm = product.title.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesSearchTerm
  });


  return (
    <AppContext.Provider value={{
      products: filteredProducts,
      setProducts,
      meta,
      setMeta,
      page,
      setPage,
      limit,
      setLimit,
      searchTerm,
      setSearchTerm,
      card,
      setCard,
      category,
      setCategory,
      brand,
      setBrand
    }}>
      {children}
      {/* app  */}
    </AppContext.Provider>
  );
}

export default AppProvider;
