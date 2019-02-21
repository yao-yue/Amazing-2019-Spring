import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch'

export default class Content extends Component {
  render() {
    return (
      <div>
        <p>React 小书的内容</p>
        <ThemeSwitch/>
      </div>
    )
  }
}
