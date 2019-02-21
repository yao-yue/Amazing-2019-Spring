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

export default connect;