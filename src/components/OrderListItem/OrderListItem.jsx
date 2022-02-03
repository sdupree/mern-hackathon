import './OrderListItem.css';

export default function OrderListItem({ orderItem }) {
  const orderDate = new Date(orderItem.createdAt).toLocaleDateString();
  console.log("OrderListItem", orderItem);
  console.log("OrderListItem", orderDate);

  return (
    <div className="OrderListItem">
      <div className="orderId">{orderItem.orderId}</div>
      <div className="orderTotal">{orderItem.orderTotal}</div>
      <div className="totalQty">{orderItem.totalQty}</div>
      <div className="orderDate">{orderDate}</div>
    </div>
  );
}