import React from "react";

export default function Container({ type, children }) {
  const renderContainerType = (type) => {
    switch (type) {
      case "fluid":
        return "container-fluid";
      default:
        return "container";
    }
  };
  return <div className={renderContainerType(type)}>{children}</div>;
}
