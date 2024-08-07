import React from "react";
import CustomerFeedback from "./CustomerFeedback";
import RecentOrdersTable from "./RecentOrders";
import ActivityChart from "./ActivityChart";
import RightSideContent from "./SummaryCard";
import OrderStatistics from "./OrderStatistics";
import NetProfit from "./NetProfit";

const Dashboard = () => {
  return (
    <div className="App">
      <h3 className="mb-4 mx-2">Dashboard</h3>
      <div className="content mb-5">
        <div className="chart-column">
          <OrderStatistics />
        </div>
        <div className="content-column">
          <NetProfit />
        </div>
      </div>
      <div className="content mb-5">
        <div className="chart-column">
          <ActivityChart />
        </div>
        <div className="content-column">
          <RightSideContent />
        </div>
      </div>

      <div className="content">
        <div className="table-column">
          <h1>Recent Orders</h1>
          <RecentOrdersTable />
        </div>
        <div className="feedback-column">
          <CustomerFeedback />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
