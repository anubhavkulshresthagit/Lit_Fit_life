import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';
import { Auth0Provider } from "@auth0/auth0-react";



ReactDOM.render(
  <Auth0Provider
    domain="dev-aju9-801.us.auth0.com"
    clientId="lHLm20fXq9s08rEu7nzaYyqMdqoaXbxc"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
