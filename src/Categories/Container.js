import { connect } from 'react-redux'
import Categories from './SWRComponent';


const mapStateToProps = (state) => {
  return {
    loggedIn: state.session.loggedIn,
    token: state.session.token
  }
}

const ConnectedCategories = connect(
  mapStateToProps,
  null
)(Categories)

export default ConnectedCategories;
