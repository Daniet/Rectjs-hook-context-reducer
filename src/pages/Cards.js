import React, {
  useContext,
} from 'react'

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Grid,
  Typography,
} from '@material-ui/core'

import { CardStoreContext } from '../stores/CardStore'

import image from '../assets/images/contemplative-reptile.jpg'

const Cards = () => {
  const [state] = useContext(CardStoreContext)
  return <Grid container spacing={2} direction="row" justify="center">
    {state.cards.map((card, index) => <Grid key={index} item xs={12} md={4} lg={3}>
      <Card>
        <CardActionArea>
          <CardMedia component="img" alt="Contemplative Reptile" height="140" image={image} title="Contemplative Reptile" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {card.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {card.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>)}
  </Grid>
}

export default Cards
