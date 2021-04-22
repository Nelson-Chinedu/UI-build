import React from "react";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

import ListMessage from "./ListMessage";

const Messages = () => {
  return (
    <div className="c-messages">
      <div className="c-messages-top">
        <p>Messages</p>
        <button className="c-message-button">+ New message</button>
      </div>
      <ListMessage
        imagePath="/cregital.jpg"
        brand="Cregital"
        body="Don't forget to clear server cache"
        time="20mins agoo"
        iconName={faEllipsisV}
      />
      <ListMessage
        imagePath="/intelia.jpg"
        brand="Intelia"
        body="Don't forget to clear server cache"
        time="25mins agoo"
        iconName={faEllipsisV}
      />
      <ListMessage
        imagePath="/talosmart.png"
        brand="Talosmart"
        body="Don't forget to clear server cache"
        time="25mins agoo"
        iconName={faEllipsisV}
      />
      <ListMessage
        imagePath="/enyata.jpg"
        brand="Enyata"
        body="Don't forget to clear server cache"
        time="25mins agoo"
        iconName={faEllipsisV}
      />
    </div>
  );
};

export default Messages;
