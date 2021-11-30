import { Routes, Route } from "react-router-dom";
import {
  InventoryListRoute,
  DashboardRoute,
  IndexRoute,
  ShipOrderListRoute,
} from "routes";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<IndexRoute />}></Route>
        <Route path="shipping" element={<DashboardRoute />}>
          <Route path="dashboard" element={<DashboardRoute />} />
          <Route path="ship_order_list" element={<ShipOrderListRoute />} />
        </Route>
        <Route path="inventory" element={<InventoryListRoute />}>
          <Route path="inventory_list" element={<InventoryListRoute />} />
        </Route>
      </Routes>
    </>
  );
};
