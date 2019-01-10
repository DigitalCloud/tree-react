import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TreeComponent extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  }

  render() {
    const { text } = this.props
    return (
      <div>
        {text}
      </div>
    )
  }
}
