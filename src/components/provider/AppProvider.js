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

  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {

    fetchData(page, limit);
  }, [page, limit]);

  const fetchData = async (page, limit) => {
    try {

      const resProducts = await axios.get("http://localhost:9999/products/?_page=" + page + "&_limit=" + limit);
      setProducts(resProducts.data);

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

  const getProductById = (id) => {
    return products.find((product) => product.id === id);
  }


  const addEmployeeToCard = (product, quantity) => {
    const existingMember = card.find(member => member.id === product.id);
    if (existingMember) {
      setCard(card.map(member => 
        member.id === product.id ? { ...member, quantity: member.quantity + quantity } : member
      ));
    } else {
      setCard([...card, { ...product, quantity }]);
    }
  };

  const increaseQuantity = (id) => {
    setCard(card.map(member => 
      member.id === id ? { ...member, quantity: member.quantity + 1 } : member
    ));
  };

  const decreaseQuantity = (id) => {
    setCard(card.map(member => {
      if (member.id === id) {
        if (member.quantity > 1) {
          return { ...member, quantity: member.quantity - 1 };
        } else {
          return null; // Đánh dấu để xóa
        }
      }
      return member;
    }).filter(member => member !== null));
  };

  const addToWishlist = (product) => {
    setWishlist((prevWishlist) => [...prevWishlist, product]);
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== productId));
  };

  const toggleWishlist = (product) => {
    if (wishlist.some((item) => item.id === product.id)) {
      removeFromWishlist(product.id);
      alert(`${product.title} has been removed from your wishlist!`);
    } else {
      addToWishlist(product);
      alert(`${product.title} has been added to your wishlist!`);
    }
  };

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
      getProductById,
      addEmployeeToCard,
      increaseQuantity,
      decreaseQuantity,
      wishlist,
      toggleWishlist,
      removeFromWishlist,
    }}>
      {children}
      {/* app  */}
    </AppContext.Provider>
  );
}

export default AppProvider;
