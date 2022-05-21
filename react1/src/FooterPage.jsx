import React from "react";
import { MDBFooter } from 'mdbreact'; //'mdb-react-ui-kit';

function FooterPage () {
  return (
  <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        {/* <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-google'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-instagram'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-linkedin'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-github'></i>
          </a>
        </div> */}
      </section>

      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i></i>Lichen Yu
              </h6>
              <p>
              4th year Computer Science(University of Waterloo) and Business Administation (Wilfrid Laurier University) Student with 12 months working experience on software development
              </p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Skills</h6>
              {/* <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p> */}
              <p>
                <a href='#!' className='text-reset'>
                  C, C++, Java, Python
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Android Studio
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  AWS, Google Cloud Platform
                </a>
              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Projects(Clickable)</h6>
              {/* <p>
                <a href='https://www.linkedin.com/in/lichen-yu/' className='text-reset'>
                  Linkedin
                </a>
              </p> */}
              <p>
                <a href='https://github.com/lichendd/InCREPEable' className='text-reset'>
                  InCREPEable
                </a>
              </p>
              <p>
                <a href='https://github.com/lichendd/OperatingSystem_OS161' className='text-reset'>
                  OS161
                </a>
              </p>
              <p>
                <a href='https://github.com/lichendd/Waterloo_Cola_System' className='text-reset'>
                  Waterloo Cola System
                </a>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className='fas fa-home me-3'></i> 330 Phillip St, Waterloo, Ontario
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i> lichenyuu@gmail.com
              </p>
              <p>
                <i className='fas fa-phone me-3'></i> + 01 674 917 8176
              </p>
              {/* <p>
                <i className='fab fa-github'></i> https://github.com/lichendd?tab=repositories
              </p> */}
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;