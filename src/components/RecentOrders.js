import React from "react";
import { CgProfile } from "react-icons/cg";

const orders = [
  {
    customer: "Wade Warren",
    orderNo: "15476258",
    amount: "$124.00",
    status: "Delivered",
  },
  {
    customer: "Jane Cooper",
    orderNo: "48496758",
    amount: "$395.02",
    status: "Delivered",
  },
  {
    customer: "Guy Hawkins",
    orderNo: "78958215",
    amount: "$45.88",
    status: "Canceled",
  },
  {
    customer: "Kristin Watson",
    orderNo: "20896732",
    amount: "$95.00",
    status: "Canceled",
  },
  {
    customer: "Cody Fisher",
    orderNo: "93715620",
    amount: "$345.00",
    status: "Delivered",
  },
  {
    customer: "Savannah Nguyen",
    orderNo: "78154858",
    amount: "$128.20",
    status: "Delivered",
  },
];

const RecentOrdersTable = () => {
  return (
    <div className="table-container">
      <table className="orders-table">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Order No.</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td className="d-flex align-items-center gap-2">
                <CgProfile style={{ width: "25px", height: "30px" }} />
                {order.customer}
              </td>
              <td>{order.orderNo}</td>
              <td>{order.amount}</td>
              <td>
                <span className={`status ${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrdersTable;
