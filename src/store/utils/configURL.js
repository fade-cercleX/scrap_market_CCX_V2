import axios from "axios";
import { AuthApp } from "./config";
import * as SecureStore from "expo-secure-store";

function getAuthApi() {
  let Auth = axios.create(AuthApp);
  SecureStore.getItemAsync("__CCX_SCRAP_MARKET").then((token) => {
    if (token) Auth.defaults.headers.common[""] = token;
  });
  return Auth;
}

function getAuthURL() {
  return AuthApp.baseURL;
}

export const Auth = getAuthApi();
export const AuhtURL = getAuthURL();
