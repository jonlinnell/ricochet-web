import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faMousePointer, faCalendar } from '@fortawesome/fontawesome-free-solid'

import InlineLinkFormUpdate from '../containers/InlineLinkFormUpdate'

import '../../styles/URLRecord.css'

const secondaryActionClasses = ['text-secondary', 'font-weight-light']
const linkActionClasses = [...secondaryActionClasses, 'link-action', 'ml-2']

class LinkRecord extends Component {
  render() {
    const {
      id,
      title,
      url,
      clicks,
      createdAt
    } = this.props.url

    const zeroPad = n => (n < 10 ? `0${n}` : n)

    const formatDate = (rawDate) => {
      const date = new Date(rawDate)
      return `${date.getFullYear()}-${zeroPad(date.getMonth())}-${zeroPad(date.getDate())}`
    }

    return this.props.modify.id === id
      ? <InlineLinkFormUpdate />
      : <li className='list-group-item'>
          <div className='row d-flex align-items-center justify-content-start'>
            <p className='col-sm-4 col-xs 12 h5 m-0 p-0'>{title}</p>
            <a
              className='col-sm-8 col-xs-12 h5 m-0 p-0 text-info url'
              href={url}
              title={url}
              target='_blank'
            >
              <em>{url}</em>
            </a>
          </div>
          <div className='row d-flex align-items-center justify-content-end mt-2'>
            <div className={[...secondaryActionClasses, 'm-0', 'mr-auto', 'click-count'].join(' ')}>
              {clicks ? <span className='mr-3'><FontAwesomeIcon className='mr-0' icon={faMousePointer} /> {clicks}</span> : null}
              <span><FontAwesomeIcon className='mr-1' icon={faCalendar} />{formatDate(createdAt)}</span>
            </div>
            <a
              className={linkActionClasses.join(' ')}
              onClick={() => this.props.onSetModifyURL(id)}
              role='button'
            >
              Modify
            </a>
            <a className={linkActionClasses.join(' ')}>Stats</a>
            <a
              className={linkActionClasses.join(' ')}
              onClick={() => this.props.onSelectDeleteURL(id)}
              data-toggle='modal'
              data-target='#confirmDelete'
              role='button'
            >
              Delete
            </a>
          </div>
        </li>
  }
}

export default LinkRecord
