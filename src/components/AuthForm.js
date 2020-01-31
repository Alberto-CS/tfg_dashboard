import logo200Image from 'assets/img/logo/logo_200.png';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { connect} from 'react-redux'
import { signUp, signIn } from '../store/actions/authActions'
import { Redirect } from 'react-router-dom'


class AuthForm extends React.Component {
  get isLogin() {
    return this.props.authState === STATE_LOGIN;
  }

  get isSignup() {
    return this.props.authState === STATE_SIGNUP;
  }

  changeAuthState = authState => event => {
    event.preventDefault();

    this.props.onChangeAuthState(authState);
  };

  state = {
    email: '',
    password: ''
}
  handleChange = (e) => {
      this.setState({
          [e.target.id]: e.target.value
      })
  }
  handleSubmit = (e) => {
      e.preventDefault();
      if (! this.isSignup) this.props.signIn(this.state);
      if (this.isSignup) this.props.signUp(this.state);
  }   

  renderButtonText() {
    const { buttonText } = this.props;

    if (!buttonText && this.isLogin) {
      return 'Login';
    }

    if (!buttonText && this.isSignup) {
      return 'Signup';
    }

    return buttonText;
  }

  render() {
    const {
      showLogo,
      usernameLabel,
      usernameInputProps,
      passwordLabel,
      passwordInputProps,
      children,
      onLogoClick,
    } = this.props;
    const {authError, auth} = this.props;
    if (auth.uid) return <Redirect to='/' />
    return (
      <Form onSubmit={this.handleSubmit}>
        {showLogo && (
          <div className="text-center pb-4">
            <img
              src={logo200Image}
              className="rounded"
              style={{ width: 60, height: 60, cursor: 'pointer' }}
              alt="logo"
              onClick={onLogoClick}
            />
          </div>
        )}
        <FormGroup>
          <Label for={usernameLabel}>{usernameLabel}</Label>
          <Input {...usernameInputProps} id="email" onChange={ this.handleChange } />
        </FormGroup>
        <FormGroup>
          <Label for={passwordLabel}>{passwordLabel}</Label>
          <Input {...passwordInputProps} id="password" onChange={ this.handleChange }/>
        </FormGroup>
        {this.isSignup && (
          <div>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input id="name" onChange={ this.handleChange } />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="restaurant">Restaurant</Label>
              <Input id="restaurant" onChange={ this.handleChange } />
            </FormGroup>
          </div>
        )}

        <hr />
        <Button
          size="lg"
          className="bg-gradient-theme-left border-0"
          block
          onClick={this.handleSubmit}>
          {this.renderButtonText()}
        </Button>
        <div className="text-danger">
          {authError ? <p>{authError}</p> : null}
        </div>
        <div className="text-center pt-1">
          <h6>or</h6>
          <h6>
            {this.isSignup ? (
              <a href="#login" onClick={this.changeAuthState(STATE_LOGIN)}>
                Login
              </a>
            ) : (
              <a href="#signup" onClick={this.changeAuthState(STATE_SIGNUP)}>
                Signup
              </a>
            )}
          </h6>
        </div>

        {children}
      </Form>
    );
  }
}

export const STATE_LOGIN = 'LOGIN';
export const STATE_SIGNUP = 'SIGNUP';

AuthForm.propTypes = {
  authState: PropTypes.oneOf([STATE_LOGIN, STATE_SIGNUP]).isRequired,
  showLogo: PropTypes.bool,
  usernameLabel: PropTypes.string,
  usernameInputProps: PropTypes.object,
  passwordLabel: PropTypes.string,
  passwordInputProps: PropTypes.object,
  confirmPasswordLabel: PropTypes.string,
  confirmPasswordInputProps: PropTypes.object,
  onLogoClick: PropTypes.func,
};

AuthForm.defaultProps = {
  authState: 'LOGIN',
  showLogo: true,
  usernameLabel: 'Email',
  usernameInputProps: {
    type: 'email',
    placeholder: 'your@email.com',
  },
  passwordLabel: 'Password',
  passwordInputProps: {
    type: 'password',
    placeholder: 'your password',
  },
  confirmPasswordLabel: 'Confirm Password',
  confirmPasswordInputProps: {
    type: 'password',
    placeholder: 'confirm your password',
  },
  onLogoClick: () => {},
};

const mapStateToProps = (state) => {
  return {
      authError: state.auth.authError,
      auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  
  return{
      signIn: (creds) => dispatch(signIn(creds)),
      signUp: (newUser) => dispatch(signUp(newUser))

  }
}

export default connect(mapStateToProps, mapDispatchToProps) (AuthForm);
