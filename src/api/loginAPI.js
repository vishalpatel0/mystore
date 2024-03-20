import { useState } from "react";

export function useAPI() {

  const [data, setDeta] = useState({ status: "", msg: "", data: "" });

  async function callAPI(data) {
    
    setDeta({ status: "sending", msg: "API Call", data: "" });

    const response = await fetch("http://localhost/react/API/login.php", {
      method: "POST",
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      setDeta({ status: "error", msg: "API Error", data: "" });
    }

    if (response.status === 200) {
      const mydata = await response.json();
      if (mydata.token) {
        setDeta({ status: "ok", msg: "API Done", data: mydata });
      }
    }
  }

  return { data, setDeta, callAPI };
}
