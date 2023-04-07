import React from "react";
import { Alert } from "react-bootstrap";

const Message = ({ variant, children, className }) => {
  return (
    <Alert variant={variant} className={className}>
      {children}
    </Alert>
  );
};

Message.defaultProps = {
  variant: "info",
};

export default Message;
