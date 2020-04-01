import React, { Component } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import Toka from "../asset/app/touka.png";
import About from "../asset/app/ab.jpg";
import "./Beranda.css";
export default class Header extends Component {
  componentDidMount() {
    $(document).on("click", "ul li", function() {
      $(this)
        .addClass("nav-active")
        .siblings()
        .removeClass("nav-active");
    });
  }
  componentDidMount() {
    const M = window.M;
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".carousel");
      var instances = M.Carousel.init(elems, {});
    });
  }
  render() {
    return (
      <div className="navbar-fixed">
        {/* Navbar */}
        <nav className="navbar fixed-top navbar-expand-lg  navkunavbar-light bg-gradient">
          <a
            className="navbar-brand text-white text-uppercase mr-6 text-title"
            data-wow-duration="3s"
            data-wow-delay="1s"
            href="#"
          >
            Touka
          </a>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-expanded="false"
            style={{ border: "1px solid #fff", outline: "none" }}
          >
            <i className="fa fa-bars" style={{ color: "#fff" }}></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul
              className="navbar-nav ml-auto"
              style={{ fontFamily: "'Nunito', sans-serif" }}
              data-wow-duration="3s"
              data-wow-delay="1s"
              id="ul-navbar"
            >
              <li className="nav-item nav-active mr-5">
                <a className="nav-link text-white" href="#">
                  Home <span className="sr-only"></span>
                </a>
              </li>
              <li className="nav-item mr-5">
                <a className="nav-link text-white" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item mr-5">
                <a className="nav-link text-white" href="#feature">
                  Features
                </a>
              </li>
              <li className="nav-item mr-5">
                <a className="nav-link text-white" href="#contactus">
                  Contact Us!
                </a>
              </li>
              <div className="nav-item nav-sign">
                <Link to="/login" className="link">
                  StartNow!!
                </Link>
              </div>
            </ul>
          </div>
        </nav>
        {/* Header Jumbotron */}
        <div id="home">
          <div className="start_content">
            <div
              className="  bg-gradient"
              style={{
                height: "625px",
                fontFamily: "'Nunito', sans-serif"
              }}
            >
              <div className="container">
                {/* Dekstop */}
                <div className="row" data-wow-duration="3s" data-wow-delay="1s">
                  <div className="col-xs-12 col-md-6 wow fadeInUp">
                    <figure className="figure-img">
                      <img width="500px" src={Toka} alt="mobile" />
                    </figure>
                  </div>
                  <div
                    className="col-xs-12 col-md-6 wow fadeIn"
                    data-wow-duration="3s"
                    data-wow-delay="1s"
                  >
                    <br />
                    <br />
                    <br />
                    <br />
                    <h1 className="text-white">
                      Chatting lebih enjoy dengan Touka
                    </h1>
                    <div className="space-50"></div>
                    <h4 className="text-white">
                      <i>
                        "Connect one's interactions easily, flexibly and simply"
                      </i>
                    </h4>
                    <div className="space-30"></div>

                    {/* Scroll Down */}
                    <a href="#about">
                      <div className="scroll_down">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </a>
                    {/* End */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*about */}
        <div id="about" className="about">
          <br />
          <div className="aboutcontent" style={{ display: "flex" }}>
            <img src={About} />
            <p style={{ marginTop: "90px" }}>
              ---Tentang Touka-- <br />
              Touka Chatt adalah aplikasi web yang dikembangkan untuk memudahkan
              sebuah komunikasi antar user melalui pesan singkat,dan dibekali
              beberapa fitur yang tengah dalam proses pengembangan
            </p>
          </div>
        </div>
        {/*fitur */}
        <div className="fitur" id="feature">
          <h4 className="container">---Fitur---</h4>
          <div class="row row-cols-1 row-cols-md-3 ">
            <div class="col mb-4 ">
              <div class="card h-100 #b2ff59 light-green accent-2">
                <img
                  src="https://www.flaticon.com/premium-icon/icons/svg/2704/2704772.svg"
                  class="card-img-top"
                  alt="mobile"
                />
                <div class="card-body">
                  <h5 class="card-title">Personal chatting</h5>
                  <p class="card-text">
                    Fitur untuk berkomunikasi secara pribadi dengan mengirimkan
                    pesan singkat
                  </p>
                </div>
              </div>
            </div>
            <div class="col mb-4 ">
              <div class="card h-100 #b2ff59 light-green accent-2">
                <img
                  src="https://www.flaticon.com/premium-icon/icons/svg/576/576113.svg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Update profile</h5>
                  <p class="card-text">
                    Memungkinkan user untuk mengedit foto profil mereka{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col mb-4">
              <div class="card h-100 #b2ff59 light-green accent-2">
                <img
                  src="https://www.flaticon.com/premium-icon/icons/svg/2641/2641821.svg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Personal Calling</h5>
                  <p class="card-text">
                    <i>InshaAllah tersedia di mobile</i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* contact us */}
        <div
          id="contactus"
          style={{ backgroundColor: "green" }}
          class="row row-cols-1 row-cols-md-4  kontak bg-gradient "
        >
          <div class="col mb-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Wahyu Prayogo</h5>
                <p class="card-text"></p>
              </div>
            </div>
          </div>
          <div class="col mb-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">M.Hanan</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div class="col mb-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Bibit Purnomo</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
          <div class="col mb-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Chandra Budi</h5>
                <p class="card-text"></p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer
          id="sticky-footer"
          className="py-4 #b2ff59 light-green accent-2text-white-50"
        >
          <div className="container text-center">
            <h5 className="text-white">Copyright &copy;2020 Touka|chatt</h5>
          </div>
        </footer>
      </div>
    );
  }
}
