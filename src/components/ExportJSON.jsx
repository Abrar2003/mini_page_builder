import React from "react";

const ExportJSON = () => {
  const handleDownload = () => {
    // Retrieve data from localStorage
    const data = localStorage.getItem("components");

    if (data) {
      // Convert the data to a Blob
      const blob = new Blob([data], { type: "application/json" });

      // Create a temporary URL for the Blob
      const url = URL.createObjectURL(blob);

      // Create a link element
      const link = document.createElement("a");

      // Set the href attribute to the URL of the Blob
      link.href = url;

      // Set the download attribute to specify the filename
      link.download = "components.json";

      // Append the link to the document body
      document.body.appendChild(link);

      // Click the link to initiate the download
      link.click();

      // Clean up by revoking the temporary URL
      URL.revokeObjectURL(url);
    } else {
      alert("No data found in localStorage.");
    }
  };

  return (
    <button className="exportButton" onClick={handleDownload}>
      Export JSON
    </button>
  );
};

export default ExportJSON;
