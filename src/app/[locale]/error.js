"use client";

import React from "react";

const Error = ({ error, reset }) => {
  return (
    <html lang="en">
      <body>
        <div>
          <p>{error.message}</p>
          <button onClick={() => reset()}>Try again</button>
        </div>
      </body>
    </html>
  );
};

export default Error;
