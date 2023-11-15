import { lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

const LayoutAuth = lazy(() => import("../components/auth/LayoutAuth"));
const LayoutDasboard = lazy(() =>
  import("../components/dashboard/LayoutDashboard")
);

const routes = {
  AUTH: "/",
  DASHBOARD: "/dashboard",
};

const BaseRoutes = () => {
  const location = useLocation();
  const background = location.state?.background;

  return (
    <>
      <Routes location={background || location}>
        <Route path={routes.AUTH} element={<LayoutAuth />} />
        <Route
          path={routes.DASHBOARD}
          element={
            <LayoutDasboard />
          }
        />
      </Routes>
    </>
  );
};

export default BaseRoutes;
