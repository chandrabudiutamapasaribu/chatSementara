// // registerbaru;
// import React, { Component } from "react";
// import axios from "axios";
// import { Link, Redirect } from "react-router-dom";

// export default class Register extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       telepon: null,
//       password: "",
//       token: "",
//       name: ""
//     };
//   }
//   handleChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };
//   handleSubmit = e => {
//     e.preventDefault();
//     const dataInput = {
//       telepon: this.state.telepon,
//       password: this.state.password,
//       name: this.state.name
//     };
//     axios
//       .post("https://chatbismillah.herokuapp.com/api/register", dataInput)
//       .then(res => {
//         console.log("reg berhasil");
//         this.setState({
//           token: res.data[1].token
//         });
//       })
//       .then(res => localStorage.setItem("api_token", this.state.token))
//       .catch(err => console.log("reg gagal"));
//   };
//   render() {
//     const isLoading = this.state.isLoading;
//     return (
//       <div className="container" style={{ width: "500px" }}>
//         <div className="card card-login mx-auto mt-5">
//           <div className="card-header">Register</div>
//           <div className="card-body">
//             <form onSubmit={this.handleSubmit}>
//               <div className="form-group">
//                 <div className="form-label-group">
//                   <input
//                     type="text"
//                     id="inputName"
//                     className="form-control"
//                     placeholder="Username"
//                     name="name"
//                     onChange={this.handleChange}
//                     required
//                   />
//                   <label htmlFor="inputName">
//                     <i>*silakan masukkan nama Anda,min 8 karakter</i>
//                   </label>
//                 </div>
//               </div>

//               <div className="form-group">
//                 <div className="form-label-group">
//                   <input
//                     id="inputtelepon"
//                     className={
//                       "form-control " +
//                       (this.state.authError ? "is-invalid" : "")
//                     }
//                     placeholder="No.Hp"
//                     type="number"
//                     name="telepon"
//                     onChange={this.handleChange}
//                     autoFocus
//                     required
//                   />
//                   <label htmlFor="inputtelepon">
//                     <i>*silakan masukkan No.Hp Anda,min 10 digit</i>
//                   </label>
//                   <div className="invalid-feedback">
//                     Please provide a valid telepon. or telepon Exis
//                   </div>
//                 </div>
//               </div>
//               <div className="form-group">
//                 <div className="form-label-group">
//                   <input
//                     type="password"
//                     className="form-control"
//                     id="inputPassword"
//                     placeholder="******"
//                     name="password"
//                     onChange={this.handleChange}
//                     required
//                   />
//                   <label htmlFor="inputPassword">
//                     <i>*silakan masukkan Password Anda</i>
//                   </label>
//                 </div>
//               </div>

//               <div className="form-group">
//                 <button
//                   className="btn #b2ff59 light-green accent-2btn-block"
//                   type="submit"
//                   disabled={this.state.isLoading ? true : false}
//                 >
//                   Register &nbsp;&nbsp;&nbsp;
//                   {isLoading ? (
//                     <span
//                       className="spinner-border spinner-border-sm"
//                       role="status"
//                       aria-hidden="true"
//                     ></span>
//                   ) : (
//                     <span></span>
//                   )}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

export default class Register extends Component {
  state = {
    name: "",
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
  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    const url = "https://chatbismillah.herokuapp.com/api/register";
    const telepon = this.state.telepon;
    const password = this.state.password;
    const name = this.state.name;
    let bodyFormData = new FormData();
    bodyFormData.set("telepon", telepon);
    bodyFormData.set("name", name);
    bodyFormData.set("password", password);
    axios
      .post(url, bodyFormData)
      .then(result => {
        this.setState({ isLoading: false });
        if (result.data.status !== "fail") {
          this.setState({ redirect: true, authError: true });
        } else {
          this.setState({ redirect: false, authError: true });
        }
      })
      .catch(error => {
        console.log(error);
        this.setState({ authError: true, isLoading: false });
      });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  render() {
    const isLoading = this.state.isLoading;
    return (
      <div className="container">
        <div className="card card-login mx-auto mt-5">
          <div className="card-header">Register</div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <div className="form-label-group">
                  <input
                    type="text"
                    id="inputName"
                    className="form-control"
                    placeholder="Username"
                    name="name"
                    onChange={this.handleNameChange}
                    required
                  />
                  <label htmlFor="inputName">
                    <i>*silakan masukkan nama Anda</i>
                  </label>
                </div>
              </div>

              <div className="form-group">
                <div className="form-label-group">
                  <input
                    id="inputtelepon"
                    className={
                      "form-control " +
                      (this.state.authError ? "is-invalid" : "")
                    }
                    placeholder="No.Hp"
                    type="number"
                    name="telepon"
                    onChange={this.handleteleponChange}
                    autoFocus
                    required
                  />
                  <label htmlFor="inputtelepon">
                    <i>*silakan isi No.Hp Anda</i>
                  </label>
                  <div className="invalid-feedback">
                    Please provide a valid phone number. or phone number Exis
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="form-label-group">
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="******"
                    name="password"
                    onChange={this.handlePwdChange}
                    required
                  />
                  <label htmlFor="inputPassword">
                    <i>*silakan buat password</i>
                  </label>
                </div>
              </div>

              <div className="form-group">
                <button
                  className="btn #b2ff59 light-green accent-2 btn-block"
                  type="submit"
                  disabled={this.state.isLoading ? true : false}
                >
                  Register &nbsp;&nbsp;&nbsp;
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
    );
  }
}
