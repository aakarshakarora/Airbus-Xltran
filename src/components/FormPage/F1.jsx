import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

const F1 = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  //   const [values, setValues] = useState({
  //     project_name: "",
  //     description: "",
  //     colour: "",
  //   });
  //   const onSubmit = async (event) => {
  //     event.preventDefault(); // Prevent default submission
  //     try {
  //       await saveFormData();
  //       alert("Your Project is ready");
  //       navigate("/");
  //     } catch (e) {
  //       alert(`Task failed! ${e.message}`);
  //     }
  //   };

  //   const onReset = async (e) => {
  //     e.preventDefault();
  //     try {
  //       await clearFormData();
  //     } catch (e) {
  //       alert(`Failed ${e.message}`);
  //     }
  //   };

  return (
    <div
      className="d-flex-col justify-content-center"
      style={{ margin: "20px" }}
    >
      <div className="d-flex justify-content-center">
        <h1>Please add your custom setting for the application</h1>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Project name</Form.Label>
              <Form.Control required type="text" placeholder="Project name" />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Description</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Desc"
                defaultValue="Otto"
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="3">
              <Form.Label>Colour</Form.Label>
              <Col sm="10">
                <Form.Select>
                  <option value="">Choose colour</option>
                  <option defaultValue="open">Red</option>
                  <option values="in progress">Green</option>
                  <option values="completed">Blue</option>
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group as={Col} md="3">
              <Form.Label>Colour</Form.Label>
              <Col sm="10">
                <Form.Select
                  aria-label="Floating label select example"
                  // onChange={set("colour")}
                  // value={values.colour}
                  placeholder="set colour"
                  required
                >
                  <option value="">Choose colour</option>
                  <option defaultValue="open">Red</option>
                  <option values="in progress">Green</option>
                  <option values="completed">Blue</option>
                </Form.Select>
              </Col>
            </Form.Group>{" "}
            <Form.Group as={Col} md="3">
              <Form.Label>Colour</Form.Label>
              <Col sm="10">
                <Form.Select
                  aria-label="Floating label select example"
                  // onChange={set("colour")}
                  // value={values.colour}
                  placeholder="set colour"
                  required
                >
                  <option value="">Choose colour</option>
                  <option defaultValue="open">Red</option>
                  <option values="in progress">Green</option>
                  <option values="completed">Blue</option>
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Label>Anything User Wants </Form.Label>
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-3 ml-2">
                <Form.Check
                  inline
                  label="1"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="2"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
              </div>
            ))}
          </Row>

          <Button type="submit">Submit form</Button>
        </Form>
      </div>
    </div>
  );
};

export default F1;
