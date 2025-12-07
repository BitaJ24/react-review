import { Box } from "@mui/material";
import React from "react";
import { useRouteError } from "react-router-dom";

function Error({ message }) {
  const error = useRouteError();
  // console.log(error);

  return (
    <Box component={"h1"} color={"crimson"}>
      {message || error.data}
    </Box>
  );
}

export default Error;
