import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from '../pages/Home/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Forum from '../pages/Forum';
import Product from '../pages/Product/Product';
import Cart from '../cart-comp/Cart/index';

export default function StoreContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Forum') {
      return <Forum />;
    }
    if (currentPage === 'Product') {
      return <Product />;
    }
    if (currentPage === 'Cart') {
        return <Cart />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
