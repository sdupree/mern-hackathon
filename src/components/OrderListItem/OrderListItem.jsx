import './OrderListItem.css';

export default function OrderListItem({ orderItem, handleShowOrder }) {
  const orderDate = new Date(orderItem.createdAt).toLocaleDateString();

  return (
    <div className="OrderListItem" onClick={() => handleShowOrder(orderItem)}>
      <div className="orderId">{orderItem.orderId}</div>
      <div className="orderTotal">{orderItem.orderTotal}</div>
      <div className="totalQty">{orderItem.totalQty}</div>
      <div className="orderDate">{orderDate}</div>
    </div>
  );
}