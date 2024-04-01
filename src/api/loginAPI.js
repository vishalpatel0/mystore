import { useState } from "react";

export function useAPI() {
  const [reporting, setReporting] = useState({ status: "", msg: "", data: "" });

  async function callAPI(data) {
    setReporting({ status: "sending", msg: "API Call", data: "" });

    try {
      const response = await fetch("http://localhost/react/API/login.php", {
        method: "POST",
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        setReporting({ status: "error", msg: "API Error", data: "" });
      }

      if (response.status === 200) {
        const mydata = await response.json();
        console.log(mydata);
        if (mydata.token) {
          setReporting({ status: "ok", msg: "API Done", data: mydata });
        } else {
          setReporting({
            status: "error",
            msg: "Invalid username or password",
            data: "",
          });
        }
      }
    } catch (error) {
      setReporting({ status: "error", msg: error, data: "" });
    }
  }

  return { reporting, callAPI };
}
