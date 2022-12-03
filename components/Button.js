import React from "react";
import { CircularProgress } from "@material-ui/core";

const Button = ({ title, onClickFunc, isLoading = false, children, style }) => {
  const classes = useStyles();

  return (
    <button
      onClick={onClickFunc}
      className="bg-black w-10 h-10"
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <CircularProgress
            style={{ width: 25, height: 25, marginRight: 10, color: "#fff" }}
          />{" "}
          {" Loading"}
        </>
      ) : (
        title
      )}
      {children}
    </button>
  );
};
export default Button;
