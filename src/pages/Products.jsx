import React from "react";
import image from '../assets/weWEAR-12.png';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
} from "mdb-react-ui-kit";

function App() {
  return (
    <MDBContainer fluid className="my-5">
      <MDBRow>
        <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
          <MDBCard>
            <div className="d-flex justify-content-between p-3">
              <p className="lead mb-0">Today's Combo Offer</p>
              <div
                className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                style={{ width: "35px", height: "35px" }}
              >
                <p className="text-white mb-0 small">x4</p>
              </div>
            </div>
            <MDBCardImage
              src={image}
              position="top"
              alt="T-Shirt"
            />
            <MDBCardBody>
              <div className="d-flex justify-content-between">
                <p className="small">
                  <a href="#!" className="text-muted">
                    T-Shirts
                  </a>
                </p>
                <p className="small text-danger">
                  <s>£100.99</s>
                </p>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">WeWear T-Shirt</h5>
                <h5 className="text-dark mb-0">£80.00</h5>
              </div>

              <div class="d-flex justify-content-between mb-2">
                <p class="text-muted mb-0">
                  Available: <span class="fw-bold">6</span>
                </p>
                <div class="ms-auto text-warning">
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
          <MDBCard>
            <div className="d-flex justify-content-between p-3">
              <p className="lead mb-0">Today's Combo Offer</p>
              <div
                className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                style={{ width: "35px", height: "35px" }}
              >
                <p className="text-white mb-0 small">x2</p>
              </div>
            </div>
            <MDBCardImage
              src={image}
              position="top"
              alt="Jeans"
            />
            <MDBCardBody>
              <div className="d-flex justify-content-between">
                <p className="small">
                  <a href="#!" className="text-muted">
                    Jeans
                  </a>
                </p>
                <p className="small text-danger">
                  <s>£70.99</s>
                </p>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">WeWear Jeans</h5>
                <h5 className="text-dark mb-0">£49.99</h5>
              </div>

              <div class="d-flex justify-content-between mb-2">
                <p class="text-muted mb-0">
                  Available: <span class="fw-bold">7</span>
                </p>
                <div class="ms-auto text-warning">
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon far icon="star" />
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
          <MDBCard>
            <div className="d-flex justify-content-between p-3">
              <p className="lead mb-0">Today's Combo Offer</p>
              <div
                className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                style={{ width: "35px", height: "35px" }}
              >
                <p className="text-white mb-0 small">x3</p>
              </div>
            </div>
            <MDBCardImage
              src={image}
              position="top"
              alt="Jackets"
            />
            <MDBCardBody>
              <div className="d-flex justify-content-between">
                <p className="small">
                  <a href="#!" className="text-muted">
                    Jackets
                  </a>
                </p>
                <p className="small text-danger">
                  <s>£89.99</s>
                </p>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">WeWear Jacket</h5>
                <h5 className="text-dark mb-0">£50.00</h5>
              </div>

              <div class="d-flex justify-content-between mb-2">
                <p class="text-muted mb-0">
                  Available: <span class="fw-bold">5</span>
                </p>
                <div class="ms-auto text-warning">
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star-half-alt" />
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <br></br>
      <MDBRow>
        <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
          <MDBCard>
            <div className="d-flex justify-content-between p-3">
              <p className="lead mb-0">Today's Combo Offer</p>
              <div
                className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                style={{ width: "35px", height: "35px" }}
              >
                <p className="text-white mb-0 small">x4</p>
              </div>
            </div>
            <MDBCardImage
              src={image}
              position="top"
              alt="T-Shirt"
            />
            <MDBCardBody>
              <div className="d-flex justify-content-between">
                <p className="small">
                  <a href="#!" className="text-muted">
                    T-Shirts
                  </a>
                </p>
                <p className="small text-danger">
                  <s>£100.99</s>
                </p>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">WeWear T-Shirt</h5>
                <h5 className="text-dark mb-0">£80.00</h5>
              </div>

              <div class="d-flex justify-content-between mb-2">
                <p class="text-muted mb-0">
                  Available: <span class="fw-bold">6</span>
                </p>
                <div class="ms-auto text-warning">
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
          <MDBCard>
            <div className="d-flex justify-content-between p-3">
              <p className="lead mb-0">Today's Combo Offer</p>
              <div
                className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                style={{ width: "35px", height: "35px" }}
              >
                <p className="text-white mb-0 small">x2</p>
              </div>
            </div>
            <MDBCardImage
              src={image}
              position="top"
              alt="Jeans"
            />
            <MDBCardBody>
              <div className="d-flex justify-content-between">
                <p className="small">
                  <a href="#!" className="text-muted">
                    Jeans
                  </a>
                </p>
                <p className="small text-danger">
                  <s>£70.99</s>
                </p>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">WeWear Jeans</h5>
                <h5 className="text-dark mb-0">£49.99</h5>
              </div>

              <div class="d-flex justify-content-between mb-2">
                <p class="text-muted mb-0">
                  Available: <span class="fw-bold">7</span>
                </p>
                <div class="ms-auto text-warning">
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon far icon="star" />
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
          <MDBCard>
            <div className="d-flex justify-content-between p-3">
              <p className="lead mb-0">Today's Combo Offer</p>
              <div
                className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                style={{ width: "35px", height: "35px" }}
              >
                <p className="text-white mb-0 small">x3</p>
              </div>
            </div>
            <MDBCardImage
              src={image}
              position="top"
              alt="Jackets"
            />
            <MDBCardBody>
              <div className="d-flex justify-content-between">
                <p className="small">
                  <a href="#!" className="text-muted">
                    Jackets
                  </a>
                </p>
                <p className="small text-danger">
                  <s>£89.99</s>
                </p>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">WeWear Jacket</h5>
                <h5 className="text-dark mb-0">£50.00</h5>
              </div>

              <div class="d-flex justify-content-between mb-2">
                <p class="text-muted mb-0">
                  Available: <span class="fw-bold">5</span>
                </p>
                <div class="ms-auto text-warning">
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star-half-alt" />
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default App;