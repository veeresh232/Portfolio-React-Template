import React from 'react';

const Footer = () => {
  return (
    <footer className="footer text-center">
    <div className="container">
        <div className="row">
            {/* <!-- Footer Location--> */}
            <div className="col-lg-4 mb-5 mb-lg-0">
                <h4 className="text-uppercase mb-4">Location</h4>
                <p className="lead mb-0">
                    Veeresh M
                    <br />
                    Bangalore 
                </p>
            </div>
            {/* <!-- Footer Social Icons--> */}
            <div className="col-lg-4 mb-5 mb-lg-0">
                <h4 className="text-uppercase mb-4">Around the Web</h4>
                <a className="btn btn-outline-light btn-social mx-1" href="https://www.facebook.com/veeresh.veer/"><i className="fab fa-fw fa-facebook-f"></i></a>
                <a className="btn btn-outline-light btn-social mx-1" href="https://twitter.com/the_veer_"><i className="fab fa-fw fa-twitter"></i></a>
                <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/veeresh-m-078892142/"><i className="fab fa-fw fa-linkedin-in"></i></a>
                <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/veeresh232"><i className="fab fa-fw fa-github"></i></a>
                <a className="btn btn-outline-light btn-social mx-1" href="https://www.youtube.com/channel/UCelRt2AikJdQavT3Fh9weNw"><i className="fab fa-fw fa-youtube"></i></a>
            </div>
            {/* <!-- Footer About Text--> */}
            <div className="col-lg-4">
                <h4 className="text-uppercase mb-4">About Freelancer</h4>
                <p className="lead mb-0">
                    Freelance is a free to use, MIT licensed Bootstrap theme created by
                    <a href="http://startbootstrap.com">Start Bootstrap</a>
                    .
                </p>
            </div>
        </div>
    </div>
</footer>
  )
};

export default Footer;
