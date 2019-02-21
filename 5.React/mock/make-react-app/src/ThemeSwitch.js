import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class ThemeSwitch extends Component {
    static contextTypes = {
        store: PropTypes.object
    }
    constructor () {
        super()
        this.state = { themeColor:　''}
        // this.handleSwitchColor = this.handleSwitchColor.bind(this)
    }
    componentWillMount() {
        const { store } = this.context;
        this._updateThemeColor() 
        // store.state 更新以后去重新渲染数据 也就是要subscribe一下
        store.subscribe(() => this._updateThemeColor());  //当store里面的数据更新的时候会调用这个函数
        //_updateThemeColor 会去 store 里面取最新的 themeColor
    }
    _updateThemeColor() {
        const { store } = this.context;
        const state = store.getState()
        this.setState({
            themeColor: state.themeColor
        })
    }
    handleSwitchColor(color) {
        const { store } = this.context;
        store.dispatch({
            type: 'CHANGE_COLOR',
            themeColor: color 
        })
    }
  render() {
    return (
      <div>
        <button style={{color: this.state.themeColor}} onClick={this.handleSwitchColor.bind(this,'red')}>Red</button>
        <button style={{color: this.state.themeColor}} onClick={this.handleSwitchColor.bind(this,'blue')}>Blue</button>
      </div>
    )
  }
}
