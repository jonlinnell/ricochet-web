import { connect } from 'react-redux'

import { remoteDeleteURL } from '../../store/actions'

import ModalConfirmDelete from '../ui/ModalConfirmDelete'

const mapStateToProps = state => ({
  url: state.urls.data.filter(url => url.id === state.urls.activeUpdate.remove.id)[0]
})

const mapDispatchToProps = dispatch => ({
  onDeleteURL(id) {
    dispatch(remoteDeleteURL(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalConfirmDelete)
