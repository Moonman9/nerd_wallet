import React from 'react';
import CartItem from './Cart/CartItem/index';
import Auth from '../../utils/auth';
// import './Cart/style.css';

const Cart = () => {
  return (
    <div className="cart">
      <div className="close">[close]</div>
      <h2> Shopping Cart </h2>
      <div>
          <CartItem item={{name:'', image:'', price:'', purchaseQuantity:''}} />
          <CartItem item={{name:'', image:'', price:'', purchaseQuantity:''}} />

          <div className="flex-row space-between">
            <strong>Total: $0</strong>
            {
              Auth.loggedIn() ?
                <button>
                  Checkout
                </button>
                :
                <span>(log in to check out)</span>
            }
          </div>
        </div>
    </div>
  );
};

export default Cart;
