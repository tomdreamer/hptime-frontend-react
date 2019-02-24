// See and copy pasta available components
import React, { Component } from "react";
//import Button from "react-bootstrap/Button";

class Template extends Component {
  render() {
    return (
      <section>
        <div className="col-lg-7">
          <p className="bs-component">
            <button type="button" className="btn btn-primary">
              Primary
            </button>
            <button type="button" className="btn btn-secondary">
              Secondary
            </button>
            <button type="button" className="btn btn-success">
              Success
            </button>
            <button type="button" className="btn btn-info">
              Info
            </button>
            <button type="button" className="btn btn-warning">
              Warning
            </button>
            <button type="button" className="btn btn-danger">
              Danger
            </button>
            <button type="button" className="btn btn-link">
              Link
            </button>
          </p>

          <p className="bs-component">
            <button type="button" className="btn btn-outline-primary">
              Primary
            </button>
            <button type="button" className="btn btn-outline-secondary">
              Secondary
            </button>
            <button type="button" className="btn btn-outline-success">
              Success
            </button>
            <button type="button" className="btn btn-outline-info">
              Info
            </button>
            <button type="button" className="btn btn-outline-warning">
              Warning
            </button>
            <button type="button" className="btn btn-outline-danger">
              Danger
            </button>
          </p>
        </div>

        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header">
                <h1 id="typography">Typography</h1>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <div className="bs-component">
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
                <h6>Heading 6</h6>
                <h3>
                  Heading
                  <small className="text-muted">with muted text</small>
                </h3>
                <p className="lead">
                  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                  auctor.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="bs-component">
                <h2>Example body text</h2>
                <p>
                  Nullam quis risus eget <a href="/">urna mollis ornare</a> vel
                  eu leo. Cum sociis natoque penatibus et magnis dis parturient
                  montes, nascetur ridiculus mus. Nullam id dolor id nibh
                  ultricies vehicula.
                </p>
                <p>
                  <small>
                    This line of text is meant to be treated as fine print.
                  </small>
                </p>
                <p>
                  The following is <strong>rendered as bold text</strong>.
                </p>
                <p>
                  The following is <em>rendered as italicized text</em>.
                </p>
                <p>
                  An abbreviation of the word attribute is{" "}
                  <abbr title="attribute">attr</abbr>.
                </p>
              </div>
            </div>
          </div>

          <div className="bs-docs-section">
            <div className="row">
              <div className="col-lg-12">
                <div className="page-header">
                  <h1 id="indicators">Indicators</h1>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <h2>Alerts</h2>
                <div className="bs-component">
                  <div className="alert alert-dismissible alert-warning">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                    >
                      ×
                    </button>
                    <h4 className="alert-heading">Warning!</h4>
                    <p className="mb-0">
                      Best check yo self, you{"'"}re not looking too good. Nulla
                      vitae elit libero, a pharetra augue. Praesent commodo
                      cursus magna,{" "}
                      <a href="/" className="alert-link">
                        vel scelerisque nisl consectetur et
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="bs-component">
                  <div className="alert alert-dismissible alert-danger">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                    >
                      ×
                    </button>
                    <strong>Oh snap!</strong>{" "}
                    <a href="/" className="alert-link">
                      Change a few things up
                    </a>{" "}
                    and try submitting again.
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="bs-component">
                  <div className="alert alert-dismissible alert-success">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                    >
                      ×
                    </button>
                    <strong>Well done!</strong> You successfully read{" "}
                    <a href="/" className="alert-link">
                      this important alert message
                    </a>
                    .
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="bs-component">
                  <div className="alert alert-dismissible alert-info">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                    >
                      ×
                    </button>
                    <strong>Heads up!</strong> This{" "}
                    <a href="/" className="alert-link">
                      alert needs your attention
                    </a>
                    , but it{"'"}s not super important.
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="bs-component">
                  <div className="alert alert-dismissible alert-primary">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                    >
                      ×
                    </button>
                    <strong>Oh snap!</strong>{" "}
                    <a href="/" className="alert-link">
                      Change a few things up
                    </a>{" "}
                    and try submitting again.
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="bs-component">
                  <div className="alert alert-dismissible alert-secondary">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                    >
                      ×
                    </button>
                    <strong>Well done!</strong> You successfully read{" "}
                    <a href="/" className="alert-link">
                      this important alert message
                    </a>
                    .
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="bs-component">
                  <div className="alert alert-dismissible alert-light">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                    >
                      ×
                    </button>
                    <strong>Heads up!</strong> T
                    <a href="/" className="alert-link">
                      alert needs your attention
                    </a>
                    , but it{"'"}s not super important.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Template;
