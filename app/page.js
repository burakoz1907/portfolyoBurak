"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta
          name="description"
          content="A portfolio site built with Next.js and Bootstrap"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="/">
              Burak Öz
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#home">
                    Anasayfa
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    Hakkımda
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#skills">
                    Beceriler
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projects">
                    Projelerim
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main className="container mt-5">
        <section id="home" className="mb-5 text-center">
          <div>
            <img
              src="/photo.jpg"
              alt="Profile Picture"
              className="img-fluid rounded-circle"
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
            <h1>Burak Öz</h1>
            <p className="lead">JR. Front End Developer</p>
            <button className="btn btn-danger text-dark">
              <Link className="button" href="/burak.pdf" target="_blank">
                CV Görüntüle
              </Link>
            </button>
          </div>
        </section>

        <section id="about" className="mb-5 text-center">
          <h2>Hakkımda</h2>
          <p>
            Merhaba, ben Burak Öz. 20 yaşındayım ve İstanbul'da yaşıyorum.
            Kariyerime front-end geliştirici olarak devam etmek için büyük bir
            tutku ve azimle çalışıyorum. Teknolojiye olan ilgim, yenilikçi ve
            kullanıcı dostu web çözümleri üretme isteğimle birleşiyor.
          </p>
        </section>

        <section id="skills" className="mb-5 text-center mt-5">
          <h2>Beceriler</h2>
          <div className="row">
            <div className="col-md-3 mb-3">
              <i className="fab fa-html5 fa-3x"></i>
              <img
                src="/html-5.png"
                alt="Project 1"
                style={{ width: "70px" }}
              />
            </div>
            <div className="col-md-3 mb-3">
              <i className="fab fa-css3-alt fa-3x"></i>
              <img src="/css-3.png" alt="Project 1" style={{ width: "70px" }} />
            </div>
            <div className="col-md-3 mb-3">
              <i className="fab fa-js-square fa-3x"></i>
              <img src="/js.png" alt="Project 1" style={{ width: "70px" }} />
            </div>
            <div className="col-md-3 mb-3">
              <i className="fab fa-react fa-3x"></i>
              <img src="/gitt.png" alt="Project 1" style={{ width: "70px" }} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-3">
              <i className="fab fa-git fa-3x"></i>
              <img
                src="/github.png"
                alt="Project 1"
                style={{ width: "70px" }}
              />
            </div>
            <div className="col-md-4 mb-3">
              <i className="fab fa-bootstrap fa-3x"></i>
              <img src="/react.png" alt="Project 1" style={{ width: "70px" }} />
            </div>
            <div className="col-md-4 mb-3">
              <i className="fab fa-npm fa-3x"></i>
              <img
                src="/bootstrap.png"
                alt="Project 1"
                style={{ width: "70px" }}
              />
            </div>
          </div>
        </section>
        <section id="projects" className="text-center">
          <h2>Projelerim</h2>
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="card">
                <img src="/net.png" className="card-img-top" alt="Project 1" />
                <div className="card-body">
                  <h5 className="card-title">Netflix Clone</h5>
                  <div className="d-flex gap-2 align-items-center justify-content-center">
                    <a
                      href="https://github.com/burakoz1907/NetflixClone"
                      className="btn btn-success"
                    >
                      Kodları İncele
                    </a>
                    <a
                      href="https://netflix-clone-rho-azure.vercel.app/"
                      className="btn btn-primary"
                    >
                      Siteye Git
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card">
                <img
                  src="/araba.png"
                  className="card-img-top"
                  alt="Project 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Araba Katalog</h5>
                  <div className="d-flex gap-2 align-items-center justify-content-center">
                    <a
                      href="https://github.com/burakoz1907/arabaKatalog"
                      className="btn btn-success"
                    >
                      Kodları İncele
                    </a>
                    <a
                      href="https://burakoz1907.github.io/arabaKatalog/index.html"
                      className="btn btn-primary"
                    >
                      Siteye Git
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card">
                <img
                  src="/klavye.png"
                  className="card-img-top"
                  alt="Project 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Figma Tasarım</h5>
                  <div className="d-flex gap-2 align-items-center justify-content-center">
                    <a
                      href="https://github.com/burakoz1907/keyboardMaster"
                      className="btn btn-success"
                    >
                      Kodları İncele
                    </a>
                    <a
                      href="https://keyboard-master-tau.vercel.app/"
                      className="btn btn-primary"
                    >
                      Siteye Git
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card">
                <img
                  src="/hesapp.png"
                  className="card-img-top"
                  alt="Project 4"
                />
                <div className="card-body">
                  <h5 className="card-title">Hesap Makinesi</h5>
                  <div className="d-flex gap-2 align-items-center justify-content-center">
                    <a
                      href="https://github.com/burakoz1907/carculator"
                      className="btn btn-success"
                    >
                      Kodları İncele
                    </a>
                    <a
                      href="https://carculator-jade.vercel.app/"
                      className="btn btn-primary"
                    >
                      Siteye Git
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-light text-center py-3 mt-5">
        <p className="mb-0">&copy; 2025 Burak Öz.</p>
      </footer>
    </>
  );
}
