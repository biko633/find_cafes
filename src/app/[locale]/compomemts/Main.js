import React from "react";

/**
 * Main component serves as a container for the main content of the application.
 * It wraps its children with a flex layout, allowing them to expand and fill the available space.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The content to be rendered inside the main container.
 */

const Main = (props) => {
  const { children } = props;
  return <main className="flex-1">{children}</main>;
};

export default Main;
