import { connect } from 'react-redux'

import { loadClicks, setModifyURL, clearModifyURL, remoteModifyURL } from '../../store/actions'

import URLRecord from '../ui/URLRecord'

const mapStateToProps = state => ({
  modifying: state.modifying
})

const mapDispatchToProps = dispatch => ({
  loadClicks(id) {
    dispatch(loadClicks(id))
  },

  onSetModifyURL(id) {
    dispatch(setModifyURL(id))
  },

  onClearModifyURL() {
    dispatch(clearModifyURL())
  },

  onRemoteModifyURL(url) {
    dispatch(remoteModifyURL(url))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(URLRecord)