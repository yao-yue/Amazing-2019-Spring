import React, { Component } from 'react'
import PropTypes from 'prop-types'

const connect = (mapStateToProps,mapDispatchToProps) => (WrappedComponent) => {
    class Connect extends Component {
        static contextTypes = {
            store: PropTypes.object
        }
        constructor() {
            super()
            this.state = {
                allProps: {}
            }
        }
        // 获取数据
        componentWillMount() {
            const { store } = this.context;
            this._updateColor();
            store.subscribe(() => this._updateColor())
        }
        _updateColor() {
            const {store} = this.context;
            let stateProps = mapStateToProps ?mapStateToProps(store.getState(), this.props): {}
            let dispatchProps = mapDispatchToProps
            ? mapDispatchToProps(store.dispatch, this.props)
            : {} // 防止 mapDispatchToProps 没有传入
            this.setState({
                allProps: {
                    ...stateProps,
                    ...this.props,
                    ...dispatchProps,
                }
            })
        }
        render() {
            return (
                <WrappedComponent {...this.state.allProps} />
            )
        }
    }
    return Connect
}

// provider  //做为一个容器组件，把嵌套的内容原封不动作为自己的子组件渲染出来。  //主要提供store
class Provider extends Component {
    static propTypes = {
        store: PropTypes.object,
        children: PropTypes.any
    }
    static contextTypes = {
        store: PropTypes.object
    }
    getChildContext () {    //context的API
        return {
            store: this.props.store
        }
    }
    render () {
        return (
            <div>{this.props.children}</div>
        )
    }
}

export {
    connect,
    Provider
}