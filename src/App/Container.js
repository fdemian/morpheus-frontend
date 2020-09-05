import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = (state, ownProps) => {
  return {
    blogName: state.config.blogName,
    description:state.config.description
  }
}

const AppContainer = connect(mapStateToProps, null)(App);

export default AppContainer;
