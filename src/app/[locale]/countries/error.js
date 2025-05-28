"use client";

import React from "react";

/**
 * Error component to display an error message and a reset button.
 *
 * @param {Object} props - The properties object.
 * @param {Object} props.error - The error object containing the error message.
 * @param {Function} props.reset - The function to reset or retry the action that caused the error.
 *
 * @returns A div containing the error message and a button to retry the operation.
 */

const Error = ({ error, reset }) => {
  return (
    <div>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
};

export default Error;
