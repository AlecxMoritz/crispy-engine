import { makeStyles, Typography, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  header: {
    fontSize: 20,
  },
  accentText: {
    color: theme.palette.primary.main,
  },
  divider: {
    margin: theme.spacing(2, 0),
    width: '90%',
    margin: '8px auto',
  },
  container: {
    width: '100%',
    textAlign: 'center',
    marginTop: theme.spacing(7),
  }
}))

export const DeleteMe = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
        <Typography variant="h3">Welcome to your new project</Typography>
        <Divider className={classes.divider} variant="middle" />
        <Typography className={classes.accentText}>Delete the <code>~/components/DeleteMe</code> folder, and get started.</Typography>
    </div>
  )
}
