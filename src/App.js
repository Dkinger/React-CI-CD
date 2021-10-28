import img from './Cigna.png'
import wb from './wb.png'
import wc from './wc.png'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box' 
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch'

export default function App() {
  const [wellnessOpen, setWellnessOpen] = React.useState(false);
  
  const handleClickWellnessOpen = () => {
    setWellnessOpen(true);
  };

  const handleWellnessClose = () => {
    setWellnessOpen(false);
  }; 

  const [learningOpen, setLearningOpen] = React.useState(false);
  
  const handleClickLearningOpen = () => {
    setLearningOpen(true);
  };

  const handleLearningClose = () => {
    setLearningOpen(false);
  };

  const [networkingOpen, setNetowrkingOpen] = React.useState(false);
  
  const handleClickNetworkingOpen = () => {
    setNetowrkingOpen(true);
  };

  const handleNetworkingClose = () => {
    setNetowrkingOpen(false);
  };

  const rerouteToWB= () => window.open("http://www.google.com")

  return (
<div>
<Grid
container
spacing={5}
alignItems="center"
justifyContent="center"
style={{ minHeight: '100vh' }}
>

  <Grid item xs={3}>
    <Card sx={{  }} >
      <CardMedia
        component="img"
        height="140"
        image={wb}
        alt="Wellness Goals"
        height={400}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          WellBeats
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Improve your wellbeing with access to Wellbeats
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large"  onClick={handleClickWellnessOpen}>Learn More</Button>
        <Dialog
        open={wellnessOpen}
        onClose={handleWellnessClose}
      >
        <DialogContent>
        <Grid
        container
        spacing={5}
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '1vh' }}
        >
        <Grid item xs={12}>
        <Card sx={{ maxWidth: 1000 }}>
          <CardMedia
            component="img"
            height="140"
            image={wb}
            alt="Wellness Goals"
          />
         
          <CardActions>
            <Button size="large" onClick={rerouteToWB}>Open Wellbeats</Button>
            
          </CardActions>
        </Card>
        </Grid>
        <Grid item xs={12}>
        <Card sx={{ maxWidth: 1000 }}>
         
          <CardContent>
            <Typography variant="h8" color="text.secondary">
              webeats offers a variety of health related classes, including exersize workouts, mindfullness and meditation, mental health classes, nutrition classes, and more. From two minute office stretch breaks to healthy recipes, Wellbeats has something to offer for everyone
            </Typography>
          </CardContent>
        </Card>
        </Grid>

        </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleWellnessClose}>Close</Button>
        </DialogActions>
      </Dialog>
      </CardActions>
    </Card>
    
  </Grid>  

  <Grid item xs={3}>
    <Card sx={{ }}>
      <CardMedia
        component="img"
        height="140"
        image={wc}
        alt="Learning Goals"
        height={400}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Cigna Wellness Challenge
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Challenge yourself with wellness objectives
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" onClick={handleClickLearningOpen}>Learn More</Button>
        <Dialog
        open={learningOpen}
        onClose={handleLearningClose}
        >
        <DialogTitle>Wellness</DialogTitle>
        <DialogContent>
            <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={img}
            alt="Learning Goals"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Learning Goals  
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Improve your wellbeing with access to Wellbeats
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large" >Learn More</Button>
            
          </CardActions>
        </Card>
              
            </DialogContent>
            <DialogActions>
              <Button onClick={handleLearningClose}>Close</Button>
            </DialogActions>
          </Dialog>
          </CardActions>
        </Card>
  </Grid> 

  

</Grid> 
</div>
  );
}