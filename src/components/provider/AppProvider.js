import React, { useEffect, useState } from "react";
import AppContext from "./Context";
import axios from "axios";

function AppProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [meta, setMeta] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);
  const [searchTerm, setSearchTerm] = useState("");

  const [brand, setBrand] = useState('');
  const [card, setCard] = useState([]);

  // Khang - create list category
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  
  useEffect(() => {
    fetchData(page, limit, selectedCategory);
    fetchCategories();
  }, [page, limit, selectedCategory]);

  const fetchData = async (page, limit, selectedCategory) => {
    try {
      let url = "http://localhost:9999/products/?_page=" + page + "&_limit=" + limit;
      if(selectedCategory){
        url += "&category=" + selectedCategory;
      }
      const resProducts = await axios.get(url);
      setProducts(resProducts.data);

      const resMeta = await axios.get("http://localhost:9999/meta");
      setMeta(resMeta.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:9999/categories');
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const filteredProducts = products.filter((product) => {
    const matchesSearchTerm = product.title.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesSearchTerm
  });


  // Khang - handle select category
  const handleSelectCategory = (categoryId) =>{
      setSelectedCategory(categoryId);
      console.log(categoryId);
  }

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
      setCard, categories,
      handleSelectCategory
    }}>
      {children}
      {/* app  */}
    </AppContext.Provider>
  );
}

export default AppProvider;
