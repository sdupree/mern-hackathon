import './OrderList.css';
import OrderListItem from '../OrderListItem/OrderListItem';

export default function OrderList({ orderItems }) {
  const items = orderItems.map(order =>
    <OrderListItem
      key={order._id}
      orderItem={order}
    />
  );
  return (
    <main className="OrderList">
      {items}
    </main>
  );
}