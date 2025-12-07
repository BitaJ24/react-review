import {
  CardMedia,
  Card,
  Typography,
  CardActions,
  Button,
  CardContent,
  Grid,
  Container,
} from "@mui/material";
import useBear from "../store/store";

function ShowCard({ title, id }) {
  const counts = useBear((state) => state.counts);
  const increment = useBear((state) => state.increasePopulation);
  const decrement = useBear((state) => state.decreasePopulation);
  const clear = useBear((state) => state.removeAllBears);
  const count = counts[id] || 0;

  // function log() {
  //   console.log(count);

  // }

  return (
    <Grid>
      <Card
        sx={{
          backgroundColor: "#e1bee7",
          boxShadow: "5px 3px",
          border: "solid 2px black",
        }}
      >
        {/* <CardMedia sx={{ height: 140 }} image={image} title={title} /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {count}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => increment(id)}>
            Count
          </Button>
          <Button
            size="small"
            disabled={count === 0}
            onClick={() => decrement(id)}
          >
            Decrease
          </Button>
          <Button size="small" onClick={() => clear(id)} disabled={count === 0}>
            Clear
          </Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default ShowCard;
