import React, { Component } from 'react'

import styles from './styles.css'

export default class TreeComponent extends Component {
  static propTypes = {
    text: ''
  }

  render() {
    const {
      text
    } = this.props

    return (
      <div className={styles.test}>
        {text}
      </div>
    )
  }
}
