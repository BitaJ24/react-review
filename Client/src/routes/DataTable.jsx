import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Paper } from "@mui/material";
import useShows from "../Hook/useShows";

function DataTable() {
  const { data: shows, isLoading, isError, error } = useShows();

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "type", headerName: "Type", width: 200 },
    { field: "rating", headerName: "Rating", width: 90 },
    { field: "genres", headerName: "Genres", width: 300 },
  ];

  const rows = shows?.slice(0, 50).map((show) => ({
    id: show.id,
    name: show.name,
    type: show.type,
    rating: show.rating.average,
    genres: show.genres,
  }));

  if (isLoading) {
    return (
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"100vh"}
      >
        <Loading />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"100vh"}
      >
        <Error message={error.message} />
      </Box>
    );
  }

  return (
    <Paper
      sx={{ height: "100vh" }}
      square={false}
      variant="elevation"
      elevation={24}
      style={{ margin: "1rem" }}
    >
      <DataGrid
        columns={columns}
        rows={rows}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Paper>
  );
}

export default DataTable;
