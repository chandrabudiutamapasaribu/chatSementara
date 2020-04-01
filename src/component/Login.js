// Loggin baru
import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

export default class Login extends Component {
  state = {
    telepon: null,
    password: "",
    redirect: false,
    authError: false,
    isLoading: false
  };

  handleteleponChange = event => {
    this.setState({ telepon: event.target.value });
  };
  handlePwdChange = event => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    const url = "https://chatbismillah.herokuapp.com/api/login";
    const telepon = this.state.telepon;
    const password = this.state.password;
    let bodyFormData = new FormData();
    bodyFormData.set("telepon", telepon);
    bodyFormData.set("password", password);
    axios
      .post(url, bodyFormData)
      .then(result => {
        if (result) {
          localStorage.setItem("api_token", result.data[1].token);
          this.setState({ redirect: true, isLoading: false });
          localStorage.setItem("isLoggedIn", true);
        }
        // console.log(result);
      })
      .catch(error => {
        console.log(error);
        this.setState({ authError: true, isLoading: false });
      });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/groupchatt" />;
    }
  };

  render() {
    const isLoading = this.state.isLoading;
    return (
      <div id="login">
        <div className="container" style={{ width: "500px" }}>
          <div className="card card-login mx-auto mt-5">
            <div className="card-header">Login</div>
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <div className="form-label-group">
                    <input
                      className={
                        "form-control " +
                        (this.state.authError ? "is-invalid" : "")
                      }
                      id="inputtelepon"
                      placeholder="No.Hp"
                      type="number"
                      name="telepon"
                      onChange={this.handleteleponChange}
                      autoFocus
                      required
                    />
                    <label htmlFor="inputtelepon">
                      <i>*silakan isi Nomor Telp</i>
                    </label>
                    <div className="invalid-feedback">
                      Please provide a valid Phone Number.
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-label-group">
                    <input
                      type="password"
                      className={
                        "form-control " +
                        (this.state.authError ? "is-invalid" : "")
                      }
                      id="inputPassword"
                      placeholder="******"
                      name="password"
                      onChange={this.handlePwdChange}
                      required
                    />
                    <label htmlFor="inputPassword">
                      <i>*silakan isi Password Anda</i>
                    </label>
                    <div className="invalid-feedback">
                      Please provide a valid Password.
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="checkbox"></div>
                </div>
                <div className="form-group">
                  <button
                    className="btn #b2ff59 light-green accent-2 btn-block"
                    type="submit"
                    disabled={this.state.isLoading ? true : false}
                  >
                    Login &nbsp;&nbsp;&nbsp;
                    {isLoading ? (
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    ) : (
                      <span></span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
          {this.renderRedirect()}
        </div>
      </div>
    );
  }
}
