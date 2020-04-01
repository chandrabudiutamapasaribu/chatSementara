import React from "react";
import Login from "./Login";
import Register from "./Register";
import "./LoginReg.css";
import { Tabs } from "react-bootstrap";
import { Tab } from "react-bootstrap";
import Toka from "../asset/app/touka.png";
class LogindanRegister extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <>
        <div className="container" style={{ width: "600px" }}>
          <div className="card card-login mx-auto mt-5">
            <div className="card-body">
              {/*mungkin ini*/}
              <Tabs
                defaultActiveKey="login"
                transition={false}
                id="noanim-tab-example"
                className="#b2ff59 light-green accent-2"
              >
                <Tab eventKey="login" id="pagelogin" title="Login">
                  <Login />
                </Tab>
                <Tab eventKey="register" title="Register">
                  <Register />
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LogindanRegister;
