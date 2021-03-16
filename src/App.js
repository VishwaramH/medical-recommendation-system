import { Grid } from '@material-ui/core';
import './App.css';
import FeatureCards from './components/FeatureCards';
import Hero from './components/Hero';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Grid container><Nav />
        </Grid>
      <Grid container>
      <Hero />
      
      </Grid>
      <Grid container>
      <FeatureCards />
      </Grid>
    </div>
  );
}

export default App;
