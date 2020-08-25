import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';


export const ExampleComponent = (props) => {
  return (
    <Container maxWidth='lg'>
      <h1 style={{textAlign:"center"}}>{content.text}</h1>
      <Grid container>
        <Grid item xs={12} md={6} lg={6}>
          <Card style={{margin:"2rem", height:"300px",width:"400px"}}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2' style={{textAlign:"center"}}>
                  {cards.card1.title}
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                {cards.card1.desc}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <img style={{margin:"2rem", height:"300px", width:"400px"}} src={ cards.card1.image || "https://source.unsplash.com/random"} ></img>
        </Grid>
      </Grid>
      <Grid container>
      <Grid item xs={12} md={6} lg={6}>
          <img style={{margin:"2rem", height:"300px", width:"400px"}} src= {cards.card2.image || "https://source.unsplash.com/random"}></img>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Card style={{margin:"2rem", height:"300px",width:"400px",alignContent:"center"}}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'  style={{justifyContent:"center"}} >
                {cards.card2.title}
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                {cards.card2.desc}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        </Grid>
    </Container>
  )
}
