import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./utils/CartContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { ProductProvider } from "./utils/ProductContext.jsx";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <CartProvider>
          <ProductProvider>
            <App />
            <Toaster position="top-right" reverseOrder={false} />
          </ProductProvider>
        </CartProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
