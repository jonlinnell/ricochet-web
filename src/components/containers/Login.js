import { connect } from 'react-redux'

import { login } from '../../store/actions'

import Login from '../ui/login'

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = dispatch => ({
  onLogin(credentials) {
    dispatch(login(credentials))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
