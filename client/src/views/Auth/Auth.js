import { React, useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';
import useStyles from './styles';
import Input from './Input';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { GoogleLogin } from 'react-google-login';
import Icon from './icon';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { signin, signuphere } from '../../actions/auth';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

function Auth() {
  const classes = useStyles();
  const [signup, setIsSignup] = useState(false);
  const [showPassword, setshowPassword] = useState(false);
  const [form, setForm] = useState(initialState);
  // const dispatch = useDispatch();
  // const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (signup) {
    //   console.log(form);
    //   dispatch(signuphere(form, history));
    // } else {
    //   dispatch(signin(form, history));
    // }
  }
  const handleChange = (e) =>  setForm({ ...form, [e.target.name]: e.target.value });

  const handleShowPassword = () => {
    setshowPassword(!showPassword)
  }
  const switchMode = () => {
    setIsSignup(!signup)
  }
  const googleSuccess = async (res) => {
    // const result = res?.profileObj;
    // const token = res?.tokenId;

    // try {
    //   dispatch({ type: 'AUTH', data: { result, token } });
    //   history('/');
    // } catch (error) {
    //   console.log(error);
    // }

  }
  const googleError = (error) => {
    console.log(error)
    alert('Google Sign In was unsuccessful. Try again later');
  }
  return (
    <div className="gradient-bg-welcome">
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon/>
        </Avatar>
        <Typography variant="h5">{signup ? 'Sign Up' : 'Sign In'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {
              signup && (
                <>
                  <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                  <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                </>
              )}
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            {signup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
          </Grid>
          <Button type="submit" fullWidth variant="contained" color='#38b2f9' className={classes.submit}>
            {signup ? 'Sign Up' : 'Sign In'}
          </Button>
          <GoogleLogin
            clientId='983873906158-moqbtetckfo6ev76t591i5sagb40jr1a.apps.googleusercontent.com'
            render={(renderProps) => (
              <Button className={classes.googleButton} fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {signup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
    </div>
  )
}

export default Auth
