import propTypes from 'prop-types'

const shapes = {
  url: {
    clicks: propTypes.number,
    createdAt: propTypes.string,
    deleted: propTypes.bool,
    id: propTypes.number,
    title: propTypes.string,
    updatedAt: propTypes.string,
    url: propTypes.string,
  },
}

export const clientErrorPropTypes = {
  error: propTypes.string.isRequired,
  index: propTypes.number.isRequired,
  onClearError: propTypes.func.isRequired,
}

export const hamburgerPropTypes = {
  expanded: propTypes.bool.isRequired,
  onClick: propTypes.func.isRequired,
}

export const linkFormPropTypes = {
  onSubmit: propTypes.func.isRequired,
  onCancel: propTypes.func.isRequired,
  pristine: propTypes.bool,
  submitting: propTypes.bool,
}

export const linkFromDefaultProps = {
  pristine: true,
  submitting: false,
}

export const linkViewPropTypes = {
  activeUpdate: propTypes.shape({
    add: propTypes.number,
    modify: propTypes.number,
    delete: propTypes.number,
  }),
  allURLs: propTypes.arrayOf(propTypes.shape(shapes.url)).isRequired,
  fetching: propTypes.bool.isRequired,
  filter: propTypes.string,
  handleSetFilter: propTypes.func.isRequired,
  onSetAddingURL: propTypes.func.isRequired,
}

export const inlineLinkFormPropTypes = {
  onCancel: propTypes.func.isRequired,
  callback: propTypes.func.isRequired,
  initialProps: propTypes.shape(shapes.url),
}

export const inlineLinkFormDefaultProps = {
  initialValues: {
    clicks: null,
    createdAt: null,
    deleted: null,
    id: null,
    title: null,
    updatedAt: null,
    url: null,
  },
}

export const linksViewDefaultProps = {
  activeUpdate: {
    add: null,
    modify: null,
    delete: null,
  },
  filter: null,
}

export const loginFormPropTypes = {
  pristine: propTypes.bool,
  submitting: propTypes.bool,
  handleSubmit: propTypes.func,
  auth: propTypes.shape({
    isAuthenticated: propTypes.bool,
    error: propTypes.object,
  }),
}

export const loginFormDefaultProps = {
  pristine: true,
  submitting: false,
  handleSubmit: null,
  auth: {
    isAuthenticated: false,
    error: null,
  },
}

export const mainViewPropTypes = {
  auth: propTypes.object,
  error: propTypes.object,
}

export const mainViewDefaultProps = {
  auth: null,
  error: null,
}

export const modalConfirmDeleteURLPropTypes = {
  url: propTypes.shape({
    id: propTypes.number,
    title: propTypes.string,
  }),
  onDeleteURL: propTypes.func.isRequired,
}

export const modalConfirmDeleteURLDefaultProps = {
  url: {
    id: null,
    title: null,
  },
}

export const modalConfirmDeleteUserPropTypes = {
  user: propTypes.shape({
    id: propTypes.number,
    username: propTypes.string,
  }),
  onDeleteUser: propTypes.func.isRequired,
}

export const modalConfirmDeleteUserDefaultProps = {
  user: {
    id: null,
    username: 'no user specified',
  },
}

export const updateFormPropTypes = {
  pristine: propTypes.bool,
  submitting: propTypes.bool,
  onSubmit: propTypes.func.isRequired,
  onCancel: propTypes.func.isRequired,
}

export const updateFormDefaultProps = {
  pristine: true,
  submitting: false,
}

export const modalUpdateUserPasswordPropTypes = {
  initialValues: propTypes.object,
  onModifyUser: propTypes.func.isRequired,
  onCancel: propTypes.func.isRequired,
}

export const modalUpdateUserPasswordDefaultProps = {
  initialValues: null,
}

export const navbarPropTypes = {
  auth: propTypes.shape({
    user: propTypes.string,
    isAuthenticated: propTypes.bool,
  }),
  onLogout: propTypes.func.isRequired,
}

export const navbarDefaultProps = {
  auth: {
    user: null,
    isAuthenticated: false,
  },
}

export const privateRoutePropTypes = {
  component: propTypes.func.isRequired,
}

export default null
