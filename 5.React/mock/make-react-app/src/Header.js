import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from './react-redux'

class Header extends Component {
    // static contextTypes = {           //contextApi
    //     store: PropTypes.object
    //   }
    static propTypes = {
        themeColor: PropTypes.string
    }
    // constructor () {
    //     super()
    //     this.state = {
    //         themeColor: ''
    //     }
    // }
    // componentWillMount() {
    //     const { store } = this.context;
    //     this._updateThemeColor();
    //     store.subscribe(() => this._updateThemeColor())
    // }
    // _updateThemeColor() {
    //     const { store } = this.context;
    //     let state = store.getState();
    //     this.setState({
    //         themeColor: state.themeColor
    //     }) 
    // }
    render() {
        return (
            <h1 style={{ color: this.props.themeColor }}>react 小书</h1>
        )
    }
}
const mapStateToProps = (state) => {    //这里说明自己要的state
    return {
        themeColor: state.themeColor
    }
}
Header = connect(mapStateToProps)(Header);   //科里化后的函数，高阶组件 

export default Header