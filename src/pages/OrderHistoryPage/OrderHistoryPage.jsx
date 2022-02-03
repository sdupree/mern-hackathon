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
  const [activeOrder, setActiveOrder] = useState(null);

  useEffect(function() {
    async function getOrders() {
      const orders = await ordersAPI.getOrders();
      setOrderItems(orders);
    }
    getOrders();
  }, []);

  async function handleShowOrder(order) {
    setActiveOrder(order);
  }

  return (
    <main className="OrderHistoryPage">
      <aside>
        <Logo />
        <Link to="/orders/new" className="button btn-sm">NEW ORDER</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>

      <OrderList 
        orderItems={orderItems}
        handleShowOrder={handleShowOrder}
      />
      <OrderDetail 
        // handleChangeQty={handleChangeQty} 
        order={activeOrder} 
        // handleCheckout={handleCheckout}  
      />

    </main>
  );
}