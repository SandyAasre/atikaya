import React from 'react'

const Header = () => {
    return (
        <div>
            <div class="container-fluid bg-light px-0 wow fadeIn" data-wow-delay="0.1s">
                <div class="row gx-0 align-items-center d-none d-lg-flex">
                    <div class="col-lg-6 px-5 text-start">
                        <ol class="breadcrumb mb-0">
                            <li ><a class="small text-secondary" href="#"></a></li>
                            <li ><a class="small text-secondary" href="#"></a></li>
                            <li ><a class="small text-secondary" href="#"></a></li>
                            <li ><a class="small text-secondary" href="#"></a></li>
                        </ol>
                    </div>
                    <div class="col-lg-6 px-5 text-end">
                        <small>Follow us:</small>
                        <div class="h-100 d-inline-flex align-items-center">
                            <a class="btn-square text-primary border-end rounded-0" href="#"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn-square text-primary border-end rounded-0" href="#"><i class="fab fa-twitter"></i></a>
                            <a class="btn-square text-primary border-end rounded-0" href="#"><i class="fab fa-linkedin-in"></i></a>
                            <a class="btn-square text-primary pe-0" href="#"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Topbar End --> */}


            {/* <!-- Brand & Contact Start --> */}

            <div class="container-fluid py-4 px-5 wow fadeIn" data-wow-delay="0.1s">
                <div class="row align-items-center top-bar">
                    <div class="col-lg-4 col-md-12 text-center text-lg-start">
                        <a href="#" class="navbar-brand m-0 p-0">
                            <h1 class="fw-bold text-primary m-0"><i class="fa fa-laptop-code me-3"></i>Atikaya</h1>
                            {/* <!-- <img src="img/logo.png" alt="Logo"> --> */}
                        </a>
                    </div>
                    <div class="col-lg-8 col-md-7 d-none d-lg-block">
                        <div class="row">
                            <div class="col-4">
                                <div class="d-flex align-items-center justify-content-end">
                                    <div class="flex-shrink-0 btn-lg-square border rounded-circle">
                                        <i class="far fa-clock text-primary"></i>
                                    </div>
                                    <div class="ps-3">
                                        <p class="mb-2">Opening Hour</p>
                                        <h6 class="mb-0">Mon - Fri, 8:00 - 9:00</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="d-flex align-items-center justify-content-end">
                                    <div class="flex-shrink-0 btn-lg-square border rounded-circle">
                                        <i class="fa fa-phone text-primary"></i>
                                    </div>
                                    <div class="ps-3">
                                        <p class="mb-2">Call Us</p>
                                        <h6 class="mb-0">+012 345 6789</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="d-flex align-items-center justify-content-end">
                                    <div class="flex-shrink-0 btn-lg-square border rounded-circle">
                                        <i class="far fa-envelope text-primary"></i>
                                    </div>
                                    <div class="ps-3">
                                        <p class="mb-2">Email Us</p>
                                        <h6 class="mb-0">info@example.com</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Brand & Contact End --> */}


            {/* <!-- Navbar Start --> */}

            <nav class="navbar navbar-expand-lg bg-primary navbar-dark sticky-top py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
                <a href="#" class="navbar-brand ms-3 d-lg-none">MENU</a>
                <button type="button" class="navbar-toggler me-3" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav me-auto p-3 p-lg-0">
                        <a href="main" class="nav-item nav-link active">Home</a>
                        <a href="about-us" class="nav-item nav-link">About Us</a>
                        <a href="service" class="nav-item nav-link">Services</a>
                        <a href="project" class="nav-item nav-link">Projects</a>
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div class="dropdown-menu border-0 rounded-0 rounded-bottom m-0">
                                <a href="feature" class="dropdown-item">Features</a>
                                <a href="team" class="dropdown-item">Our Team</a>
                                <a href="testimonial" class="dropdown-item">Testimonial</a>
                                {/* <a href="404.html" class="dropdown-item">404 Page</a> */}
                            </div>
                        </div>
                        <a href="contact" class="nav-item nav-link">Contact Us</a>
                    </div>
                    <a href="#" class="btn btn-sm btn-light rounded-pill py-2 px-4 d-none d-lg-block">Get Started</a>
                </div>
            </nav>
            {/* Navbar End  */}
        </div>
    )
}

export default Header