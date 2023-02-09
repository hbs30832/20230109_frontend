// src/component/common

import { Navigate } from "react-router";

function Redirect({ to }) {
  return <Navigate to={to}></Navigate>;
}

export default Redirect;
