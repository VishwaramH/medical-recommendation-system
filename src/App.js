import './App.css';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { useStyles } from './config/utils/useStyles';
import Nav from './components/Nav';

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Nav />
    </div>
  );
}

export default App;
