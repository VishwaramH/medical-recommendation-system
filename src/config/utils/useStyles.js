import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
  navbar: {
    backgroundColor: 'white',
    color: 'black'
  },
  navHead: {
    fontWeight: 'bold',
  },
  navList: {
    display: 'flex',
    justifyContent: 'flex-end',
    '& li': {
      "list-style-type": 'none',
      paddingRight: 5
    }
  }
});