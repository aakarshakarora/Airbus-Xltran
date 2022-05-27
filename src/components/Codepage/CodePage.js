import React from "react";
import { Container, Form, Button, Modal } from "react-bootstrap";
import { usehistory } from "react-router-dom";
class CopyExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = { copySuccess: "" };
  }

  copyToClipboard = (e) => {
    this.textArea.select();
    document.execCommand("copy");
    e.target.focus();
    this.setState({ copySuccess: " Copied!" });
  };

  render() {
    // const location = useLocation();
    // console.log(location);
    return (
      <Container className="max-w-[1240px] mx-auto">
        <Modal.Dialog size="xl">
          <Modal.Header closeButton>
            <Modal.Title>Instructions</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="mb-1">
              ➡ If You have flutter SDK installed in your system, then copy code
              in <b>main.dart</b> file of your project and run your code in
              either Android/iOS/Web Emulator to see result.
            </p>
            <p className="mb-1">
              ➡ If you dont have flutter SDK installed then you can run your
              code in{" "}
              <a
                id="link"
                href="https://dartpad.dev/"
                target="_blank"
                style={{ color: "blue" }}
              >
                https://dartpad.dev/
              </a>{" "}
              or{" "}
              <a
                id="link"
                href="https://flutlab.io/"
                target="_blank"
                style={{ color: "blue" }}
              >
                https://flutlab.io/
              </a>
              .
            </p>
            <p className="mb-1">
              ➡ For the BitCoin App add the <b>http</b> dependency in{" "}
              <b>pubspec.yaml</b> from{" "}
              <a
                id="link"
                href="https://pub.dev/"
                target="_blank"
                style={{ color: "blue" }}
              >
                https://pub.dev/
              </a>
              .
            </p>
          </Modal.Body>
        </Modal.Dialog>
        <Modal.Dialog size="xl">
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label className="text-2xl font-bold text-center">
                  Source Code
                </Form.Label>
                <p>
                  The Source code has been downloaded as a text file. If not
                  then please try again
                </p>
              </Form.Group>
            </Form>
          </Modal.Body>
        </Modal.Dialog>
      </Container>
    );
  }
}

export default CopyExample;
