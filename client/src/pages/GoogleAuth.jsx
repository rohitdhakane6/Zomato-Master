import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { googleAuth } from "../app/store";

function GoogleAuth() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");

  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(googleAuth(token)).then(
        () => (window.location.href =window.location.origin)
      );
    }
  }, [token]);

  return (
    <div>
      <p>Logging in...</p>
    </div>
  );
}

export default GoogleAuth;
