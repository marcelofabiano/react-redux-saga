import React from 'react'
import { connect } from 'react-redux'

import { loadDataRequest } from './actions'

const Info = props => (
  <div>
    <p>Info: {props.data}</p>
    { !props.isFetching && <button onClick={() => props.loadData()}>Load</button> }
    { props.isFetching && <span>Loading...</span> }
  </div>
)

const mapStateToProps = (state) => ({
  isFetching: state.ip.isFetching,
  data: state.ip.data,
  error: state.ip.error
})

const mapDispatchToProps = (dispatch) => ({ loadData: () => dispatch(loadDataRequest()) })

export default connect(mapStateToProps, mapDispatchToProps)(Info)
