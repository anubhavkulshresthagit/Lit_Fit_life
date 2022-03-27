import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';
import { Auth0Provider } from "@auth0/auth0-react";



ReactDOM.render(
  <Auth0Provider
    domain="dev-5reowq56.us.auth0.com"
    clientId="uHqtYSikocgf5GfIkNRot79LjiPiplqd"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
