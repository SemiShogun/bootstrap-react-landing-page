import * as React from "react";
import * as Icon from 'react-bootstrap-icons';

function Footer() {
  return (
    <footer className="bg-dark text-lg-start d-flex justify-content-around">
      <div className="text-center p-3 background-color: rgba(0, 0, 0, 0.2);">
        © 2020 Copyright: NectoJ.ninja
      </div>
      <div id="platforms" className="d-flex justify-content-around align-items-center">
        <a id="github" className="height: 100%;" href="https://github.com/SemiShogun">
            <Icon.Github size={30}/>
        </a>
        <a id="twitter" href="https://twitter.com/NectoJ">
            <Icon.Twitter size={30}/>
        </a>
        <a id="youtube" href="https://www.youtube.com/channel/UCtasG8isspygUxh8MMHjAPw">
            <Icon.Youtube size={30}/>
        </a>
        <a id="twitch" href="https://www.twitch.tv/semishogun">
            <Icon.Twitch size={30}/>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
