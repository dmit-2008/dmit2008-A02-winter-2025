
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import { MOVIE_LIST } from '../utils/movies'

export default function Home() {
  // make the inputs controlled

  // make the movie list stateful.
  return (
    <div>
      <Head>
        <title>Our Movie App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>

      <main>
        <Container>
          <Typography variant="h2" component="h2" style={{textAlign: "center"}}>
            Movies
          </Typography>
          <form style={{width: '100%'}}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  id="search-field"
                  label="search..."
                  variant="standard"
                  sx={{width: '100%'}}

                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="year-field"
                  label="year"
                  variant="standard"
                  sx={{width: '100%'}}

                />
              </Grid>
              <Grid item xs={2}>
                <Button
                  type="submit"
                  variant="contained"
                >Filter</Button>
              </Grid>
              <Grid item xs={10}>
                {/* Add the error message here*/}
              </Grid>
            </Grid>
          </form>
          <List sx={{width: `100%`}}>
          { MOVIE_LIST.map((movieData, index)=> {
              return <ListItem key={index}>
                <ListItemText>
                  <Typography variant="p" component="div">
                    {movieData.name} ({movieData.year})
                  </Typography>
                </ListItemText>
              </ListItem>
            })
          }
          </List>
        </Container>
      </main>
    </div>
  )
}
