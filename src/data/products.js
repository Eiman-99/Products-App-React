import axios from "axios";

export const axiosInterceptor = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export function getProducts() {
  return axiosInterceptor.get("/products").then((res) => res.data);
}
