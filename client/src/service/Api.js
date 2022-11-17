import { DOMAIN } from "../constant/server";
import axios from "axios";

const API_URL = DOMAIN + "/api";

export default axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json", accept: "application/json" },
});
