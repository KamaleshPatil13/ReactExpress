import React, { useState } from "react";
import "../CSS/form.css";

const API_Base = "http://locolhost:3001";

const MyForm = () => {
  const [dataValue, setDataValue] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/case1", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: dataValue }),
      });

      const data = await response.json();
      setResponse(data); // Assuming the server responds with a JSON object containing a "message" property
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label className="label">
          Enter Data-Value:
          <input
            type="text"
            value={dataValue}
            onChange={(e) => setDataValue(e.target.value)}
          />
        </label>
        <button className="button" type="submit">
          Submit
        </button>
      </form>
      {response && (
        <div>
          Response from server:{" "}
          {typeof response === "string" ? (
            response
          ) : (
            <>
            <div className="data">
              {Object.keys(response).map((key) => (
                <div key={key}>
                  <p> {key}:{response[key]} </p>
                  <p></p>
                </div>
              ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default MyForm;
