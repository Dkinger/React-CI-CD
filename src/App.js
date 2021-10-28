import img from './Cigna.png'
import wb from './wb.png'
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

  const rerouteToWB= () => window.open("www.google.com")

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
    <Card sx={{ maxWidth: 345 }}
    width= {200}
    height = {500}>
      <CardMedia
        component="img"
        height="140"
        image={img}
        alt="Wellness Goals"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Wellness Goals
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
        <DialogTitle>Wellness Goals</DialogTitle>
        <DialogContent>
        <Card sx={{ maxWidth: 1000 }}>
          <CardMedia
            component="img"
            height="140"
            image={wb}
            alt="Wellness Goals"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              webeats offers .. . .. .. . . .. .aef e fe fe fa ef  ae faef  a f a f  ea f e a f a ef  a f 
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large" onClick={rerouteToWB}>Open Wellbeats</Button>
            
          </CardActions>
        </Card>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleWellnessClose}>Close</Button>
        </DialogActions>
      </Dialog>
      </CardActions>
    </Card>
  </Grid>  

  <Grid item xs={3}>
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
          Challenge yourself with new Learning Goals
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

  <Grid item xs={3}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={img}
        alt="Networking Goals"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Networking Goals
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Make new connections by establishing Networking Goals
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" onClick={handleClickNetworkingOpen}>Learn More</Button>
        <Dialog
        open={networkingOpen}
        onClose={handleNetworkingClose}
        >
        <DialogTitle>Optional sizes</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can set my maximum width and whether to adapt or not.
          </DialogContentText>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleNetworkingClose}>Close</Button>
        </DialogActions>
      </Dialog>
      </CardActions>
    </Card>
  </Grid>

</Grid> 
</div>
  );
}