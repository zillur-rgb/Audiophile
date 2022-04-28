import { useLocation } from "react-router-dom";

const RouteMatchPath = (route) => {
  const location = useLocation();
  if (location.pathname === route) {
    return true;
  }
};

export default RouteMatchPath;
