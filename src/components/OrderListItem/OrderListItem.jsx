import './OrderListItem.css';

export default function OrderListItem({ orderItem, handleAddToOrder }) {
  return (
    <div className="OrderListItem">
      <div className="emoji flex-ctr-ctr">{orderItem.emoji}</div>
      <div className="name">{orderItem.name}</div>
      <div className="buy">
        <span>${orderItem.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(orderItem._id)}>
          ADD
        </button>
      </div>
    </div>
  );
}