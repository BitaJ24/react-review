import { Box, Button, Grid } from "@mui/material";
import ShowCard from "./components/ShowCard";
import Error from "./Error";
import useShows from "./Hook/useShows";
import Loading from "./Loading";
import Image from "./assets/image.png";
import { Link, useNavigate } from "react-router-dom";

function App() {
  // const base_URL = "https://api.tvmaze.com/shows";

  // const [shows, setShows] = useState([]);

  // useEffect(() => {
  //   console.log("Fetching data");
  //   axios
  //     .get(base_URL)
  //     .then((res) => {
  //       // console.log(res.data.slice(0, 10));
  //       setShows(res.data.slice(0, 10));
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // }, []);

  const { data: shows, isLoading, isError, error } = useShows();

  const navigate = useNavigate();

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
    <Grid container spacing={3} padding={"1rem"}>
      {shows?.slice(0, 10).map((show) => (
        <ShowCard title={show.name} id={show.id} key={show.id} />
      ))}
      {/* <Box position={"relative"}> */}
      {/* <img src={Image} alt="sth" id="necklace" /> */}

      <Button
        variant="contained"
        id="dataGrid"
        className="pacifico-regular"
        type="button"
        onClick={() => navigate("/data-grid")}
      >
        <img
          width="45"
          height="45"
          src="https://img.icons8.com/office/40/new-moon.png"
          alt="new-moon"
        />
        Data Grid
      </Button>

      {/* </Box> */}
    </Grid>
  );

  // console.log(shows);
}

export default App;
