import { useEffect, useState } from 'react';
import './style.css';

const TableRow = ({ order, updateOrder }) => {
  const onStatusChanged = (e) => {
    updateOrder(order.id, e.target.value);
  };

  return (
    <tr>
      <td>{order.from}</td>
      <td>{order.to}</td>
      <td>{order.people}</td>
      <td>{order.meal}</td>
      <td>{order.pets ? 'true' : 'false'}</td>
      <td>{order.child ? 'true' : 'false'}</td>
      <td>{order.noLimits ? 'true' : 'false'}</td>
      <td>{order.email}</td>
      <td>{order.phone}</td>
      {/* <td>{order.status}</td> */}
      <td>
        <select onChange={onStatusChanged}>
          <option value="new">New</option>
          <option value="confirmed">Confirmed</option>
          <option value="rejected">Rejected</option>
        </select>
      </td>
      <td>{order.sum}</td>
    </tr>
  );
};

const renderRows = (orders, updateOrder) => {
  return orders.map((order) => {
    return <TableRow updateOrder={updateOrder} key={order.id} order={order} />;
  });
};

export const AdminPage = () => {
  const [orders, setOrders] = useState([]);
  const fetchOrders = async () => {
    const response = await fetch(
      'http://localhost:4000/api/objednavky?filter=status:eq:new',
    );
    const data = await response.json();
    console.log(data.result);
    setOrders(data.result);
  };

  const updateOrder = async (id, status) => {
    await fetch(`http://localhost:4000/api/objednavky/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify([
        {
          op: 'replace',
          path: '/status',
          value: status,
        },
      ]),
    });
    fetchOrders();
  };

  useEffect(() => {
    fetchOrders();
  }, []);
  return (
    <div>
      <h1>Hello from Admin Page</h1>
      <table>
        <thead>
          <tr>
            <th>From</th>
            <th>To</th>
            <th>People</th>
            <th>Meal</th>
            <th>Pets</th>
            <th>Child</th>
            <th>No-limits</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Sum</th>
          </tr>
        </thead>
        <tbody>{renderRows(orders, updateOrder)}</tbody>
      </table>
    </div>
  );
};
