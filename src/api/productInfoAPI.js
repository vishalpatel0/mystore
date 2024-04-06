import { useState } from "react";

export function useProductInfoAPI() {
  const [reporting, setReporting] = useState({ status: "", msg: "", data: "" });

  async function CallAPI(product_id) {
    
    setReporting({ status: "APIcalling", msg: "", data: "" });
    
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${product_id}`
      );

      if (!response.ok) {
        setReporting({ status: "Error", msg: "API is Not CAll", data: "" });
      }

      if (response.status === 200) {
        const data = await response.json();
        setReporting({ status: "Ok", msg: "", data: data });
      }
    } catch (error) {
      setReporting({ status: "Error", msg: error, data: "" });
    }
  }

  return { reporting, CallAPI };
}
