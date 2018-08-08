import React from 'react'

import { modalConfirmDeleteURLPropTypes, modalConfirmDeleteURLDefaultProps } from '../../lib/propsValidation'

const ModalConfirmDeleteURL = (props) => {
  const { id, title } = props.url

  return (
    <div className="modal fade" id="confirmDeleteURL" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Confirm delete</h5>
            <button type="button" className="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            Are you sure you want to delete {title}?
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => props.onDeleteURL(id)}
              data-dismiss="modal"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

ModalConfirmDeleteURL.propTypes = modalConfirmDeleteURLPropTypes
ModalConfirmDeleteURL.defaultProps = modalConfirmDeleteURLDefaultProps

export default ModalConfirmDeleteURL