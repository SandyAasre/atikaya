import React from 'react'

const Footer = () => {
    return (
        <div>
            {/* <!-- Footer Start --> */}
            <div class="container-fluid bg-dark text-body footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
                <div class="container py-5">
                    <div class="row g-5">
                        <div class="col-lg-3 col-md-6">
                            <h5 class="text-light mb-4">Address</h5>
                            <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                            <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                            <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@example.com</p>
                            <div class="d-flex pt-2">
                                <a class="btn btn-square btn-outline-secondary rounded-circle me-1" href="#"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square btn-outline-secondary rounded-circle me-1" href="#"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square btn-outline-secondary rounded-circle me-1" href="#"><i class="fab fa-youtube"></i></a>
                                <a class="btn btn-square btn-outline-secondary rounded-circle me-0" href="#"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h5 class="text-light mb-4">Quick Links</h5>
                            <a class="btn btn-link" href="about-us">About Us</a>
                            <a class="btn btn-link" href="contact">Contact Us</a>
                            <a class="btn btn-link" href="service">Our Services</a>
                            <a class="btn btn-link" href="#">Terms & Condition</a>
                            <a class="btn btn-link" href="#">Support</a>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h5 class="text-light mb-4">Gallery</h5>
                            <div class="row g-2">
                                <div class="col-4">
                                    <img class="img-fluid rounded" src="/assets/img/project-1.jpg" alt="Image" />
                                </div>
                                <div class="col-4">
                                    <img class="img-fluid rounded" src="/assets/img/project-2.jpg" alt="Image" />
                                </div>
                                <div class="col-4">
                                    <img class="img-fluid rounded" src="/assets/img/project-3.jpg" alt="Image" />
                                </div>
                                <div class="col-4">
                                    <img class="img-fluid rounded" src="/assets/img/project-4.jpg" alt="Image" />
                                </div>
                                <div class="col-4">
                                    <img class="img-fluid rounded" src="/assets/img/project-5.jpg" alt="Image" />
                                </div>
                                <div class="col-4">
                                    <img class="img-fluid rounded" src="/assets/img/project-6.jpg" alt="Image" />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h5 class="text-light mb-4">Newsletter</h5>
                            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                            <div class="position-relative mx-auto" style={{maxWidth: '400px'}}>
                                <input class="form-control bg-transparent border-secondary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                                <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid copyright">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                &copy; <a href="#">Atikaya</a>, All Right Reserved.
                            </div>
                            <div class="col-md-6 text-center text-md-end">
                                Designed By <a href="https://atikaya.com/">Atikaya</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Footer End --> */}


            {/* <!-- Back to Top --> */}
            <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i class="bi bi-arrow-up"></i></a>

        </div>
    )
}

export default Footer