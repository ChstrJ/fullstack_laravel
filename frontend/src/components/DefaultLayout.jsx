import React, { useEffect } from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import User from "../helpers/utils/User";
import axiosClient from "../api/axiosClient";

export default function DefaultLayout() {
  const navigate = useNavigate();
  const { user, token, setUser, setToken } = useStateContext();
  if (!token) {
    return <Navigate to={"/login"} />;
  }

  const onLogout = (ev) => {
    ev.preventDefault();
    axiosClient.get("/logout").then(({}) => {
      setUser(null);
      setToken(null);
    });
  };

  useEffect(() => {
    axiosClient
      .get("/user")
      .then((res) => {
        setUser(res.data);
      })
  }, []);

  return (
    <div id="defaultLayout">
      <div className="content">
        <header>
          <div>Header</div>
          <div>
            {user.name}
            <a href="#" onClick={onLogout} className="btn-logout">
              Logout
            </a>
          </div>
        </header>

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
