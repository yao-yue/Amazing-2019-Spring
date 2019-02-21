import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Header extends Component {
    static contextTypes = {           //contextApi
        store: PropTypes.object
      }
    constructor () {
        super()
        this.state = {
            themeColor: ''
        }
    }
    componentWillMount() {
        const { store } = this.context;
        this._updateThemeColor();
        store.subscribe(() => this._updateThemeColor())
    }
    _updateThemeColor() {
        const { store } = this.context;
        let state = store.getState();
        this.setState({
            themeColor: state.themeColor
        }) 
    }
    render() {
        return (
            <h1 style={{ color: this.state.themeColor }}>react 小书</h1>
        )
    }
}

export default Header