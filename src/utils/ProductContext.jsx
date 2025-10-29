import React, { createContext, useContext } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "./apiClients";

// Buat konteks
const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  const queryClient = useQueryClient();

  //GET ALL PRODUCTS
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await apiClient.get("/products");
      return res.data.data;
    },
  });
  // SHOW PRODUCT DETAIL
  const getProductById = async (id) => {
    const res = await apiClient.get(`/products/${id}`);
    return res.data.data;
  };
  //store product
  const addProduct = async (formData) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await apiClient.post("/products", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      queryClient.invalidateQueries(["products"]);
      return response;
    } catch (error) {
      throw error;
    }
  };
  // UPDATE PRODUCT
  const updateProduct = async (id, formData) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await apiClient.post(
        `/products/${id}?_method=PUT`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      queryClient.invalidateQueries(["products"]);
      return response;
    } catch (error) {
      throw error;
    }
  };
  // DELETE PRODUCT
  const deleteProduct = useMutation({
    mutationFn: async (id) => await apiClient.delete(`/products/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },
  });
  // Export PROVIDER
  return (
    <ProductContext.Provider
      value={{
        products,
        isLoading,
        isError,
        getProductById,
        addProduct,
        updateProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);