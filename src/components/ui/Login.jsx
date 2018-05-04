import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'

let LoginForm = (props) => {
  const { pristine, submitting, handleSubmit } = props
  const { error } = props.auth
  return (
    <div className='col-xs-12 col-sm-8 offset-sm-2 px-4 mt-5'>
      <h1 className='display-4'>Login</h1>
      <p className='text-secondary mb-3'>You must log in to continue.</p>
      <form onSubmit={handleSubmit}>
        <div className='form-row'>
          <div className='form-group col-sm-6'>
            <Field className='form-control' component='input' type='text' name='username' placeholder='Username'></Field>
          </div>
          <div className='form-group col-sm-6'>
            <Field className='form-control' component='input' type='password' name='password' placeholder='Password'></Field>
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-block px-1" disabled={pristine || submitting}>Login</button>
        {
          error
            ? <p className='alert alert-danger mb-0 mt-3 p-2' role='alert'>{error.response ? error.response.message : 'Unable to connect to the server.'}</p>
            : null
        }
      </form>
    </div>
  )
}

LoginForm = reduxForm({
  form: 'login'
})(LoginForm)

class Login extends Component {
  constructor() {
    super()

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(credentials) {
    this.props.onLogin(credentials)
  }

  render() {
    return (
      this.props.auth.isAuthenticated
        ? <Redirect to='/' />
        : <LoginForm onSubmit={this.handleSubmit} auth={this.props.auth} />
    )
  }
}

export default Login
