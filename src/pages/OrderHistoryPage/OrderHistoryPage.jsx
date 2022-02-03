import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './OrderHistoryPage.css';
import Logo from '../../components/Logo/Logo';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import OrderList from '../../components/OrderList/OrderList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import * as ordersAPI from '../../utilities/orders-api';

export default function OrderHistoryPage({ user, setUser }) {
  const [orderItems, setOrderItems] = useState([]);
  const [activeOrder, setActiveOrder] = useState('');

  useEffect(function() {
    async function getOrders() {
      const orders = await ordersAPI.getOrders();
      console.log("OrderHistoryPage TWO", orders);
      setOrderItems(orders);
    }
    getOrders();
  }, []);

  return (
    <main className="OrderHistoryPage">
      <aside>
        <Logo />
        <Link to="/orders/new" className="button btn-sm">NEW ORDER</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>

      <OrderList 
        orderItems={orderItems}
        // handleAddToOrder={handleAddToOrder}
      />
      <OrderDetail 
        // handleChangeQty={handleChangeQty} 
        // order={cart} 
        // handleCheckout={handleCheckout}  
      />

    </main>
  );
}