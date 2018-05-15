import React from 'react'
import { connect } from 'react-redux'

import { loadDataUARequest } from './actions'

const UserAgent = props => (
  <div>
    <p>User Agent: {props.data}</p>
    { !props.isFetching && <button onClick={() => props.loadData()}>Load</button>}
    { props.isFetching && <span>Loading...</span>}
  </div>
)

const mapStateToProps = (state) => ({
  isFetching: state.ua.isFetching,
  data: state.ua.data,
  error: state.ua.error
})

const mapDispatchToProps = (dispatch) => ({
  loadData: () => dispatch(loadDataUARequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserAgent)
