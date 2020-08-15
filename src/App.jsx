import React from "react";
import ArticlePage from "./components/ArticlePage";
import { Header, Icon } from "semantic-ui-react";
import Login from "./components/Login";
import { connect } from "react-redux";

const App = (props) => {
  // state = {
  //   authenticated: false
  // }

  // let login
  // this.state.authenticated?(
  //   login = (
  //     <p id="login-message">You are currently logged in as {JSON.parse(localStorage.getItem("J-tockAuth-Storage")).uid}</p>
  //   )
  // ):(
  //   login = (
  //     <Login setAuthenticated={() => this.setState({authenticated: true})} />
  //   )
  // )
  return (
    <>
      <Header as="h1" icon textAlign="center">
        <Icon name="train" circular />
        News on Rails
      </Header>
      {/* <div>
        {login}
      </div> */}
      {props.userRole === "journalist" ? <ArticlePage /> : <Login />}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    authenticated: state.authenticated,
    userRole: state.currentUser.role,
    userEmail: state.currentUser.email
  };
};

export default connect(mapStateToProps)(App);
