import "./Footer.css";
import * as React from "react";
import { useState } from "react";
import * as Icon from "react-bootstrap-icons";
import { Button, Modal } from "react-bootstrap";

function Footer() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <footer className="bg-dark text-lg-start d-flex justify-content-around">
      <div className="text-center p-3 background-color: rgba(0, 0, 0, 0.2);">
        <p className="copyright" onClick={handleShow}>
          © 2021 Copyright: NectoJ.ninja
        </p>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Copyright</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              MIT License Copyright (c) 2021 Jamie Lam Permission is hereby
              granted, free of charge, to any person obtaining a copy of this
              software and associated documentation files (the "Software"), to
              deal in the Software without restriction, including without
              limitation the rights to use, copy, modify, merge, publish,
              distribute, sublicense, and/or sell copies of the Software, and to
              permit persons to whom the Software is furnished to do so, subject
              to the following conditions: The above copyright notice and this
              permission notice shall be included in all copies or substantial
              portions of the Software. THE SOFTWARE IS PROVIDED "AS IS",
              WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
              NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
              PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
              OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
              OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE
              OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
            </p>
            <br />
            <div>
              Favicon made by{" "}
              <a
                href="https://www.flaticon.com/authors/prettycons"
                title="prettycons"
              >
                prettycons
              </a>{" "}
              from{" "}
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div
        id="platforms"
        className="d-flex justify-content-around align-items-center"
      >
        <a
          id="github"
          className="height: 100%;"
          href="https://github.com/SemiShogun"
        >
          <Icon.Github size={30} />
        </a>
        <a id="twitter" href="https://twitter.com/NectoJ">
          <Icon.Twitter size={30} />
        </a>
        <a
          id="youtube"
          href="https://www.youtube.com/channel/UCtasG8isspygUxh8MMHjAPw"
        >
          <Icon.Youtube size={30} />
        </a>
        <a id="twitch" href="https://www.twitch.tv/semishogun">
          <Icon.Twitch size={30} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
