import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

let LinkForm = (props) => {
  const {
    pristine,
    submitting,
    handleSubmit,
    onCancel
  } = props

  return (
    <form className='list-group-item form-inline' onSubmit={handleSubmit}>
      <div className='row'>
        <Field className='form-control' component='input' type='hidden' name='id'></Field>
        <Field
          className='form-control col-sm-4 p-2'
          component='input'
          type='text'
          name='title'
          placeholder='Link name'
        ></Field>
        <Field
        className='form-control col-sm-8 p-2'
        component='input'
        type='text'
        name='url'
        placeholder='URL'
      ></Field>
      </div>
      <div className='m-0 d-flex mt-2 justify-content-end'>
        <button
          type="submit"
          className="btn btn-sm btn-primary"
          disabled={ pristine || submitting }
        >
          Save
        </button>
        <button
          type="button"
          className="btn btn-sm btn-light"
          onClick={onCancel}
          disabled={submitting}
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

LinkForm = reduxForm({
  form: 'link'
})(LinkForm)

class InlineLinkForm extends Component {
  constructor() {
    super()

    this.handleSubmit = this.handleSubmit.bind(this)
    this.onCancel = this.onCancel.bind(this)
  }

  handleSubmit(url) {
    this.props.callback(url)
  }

  onCancel() {
    this.props.onCancel()
  }

  render() {
    return (
      <LinkForm
        initialValues={this.props.initialValues}
        onSubmit={this.handleSubmit}
        onCancel={this.onCancel}
      />
    )
  }
}

export default InlineLinkForm
