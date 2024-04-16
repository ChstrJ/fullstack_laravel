import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import User from "../helpers/utils/User";

export default function DefaultLayout() {
  const { user, token } = useStateContext();
  if (!token) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div id="defaultLayout">
      <div className="content">
        <header>
          <div>Header</div>
          <div>
          {user.name}
          <a href="#" onClick={User.logout()} className="btn-logout">Logout</a>
          </div>
        </header>

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
