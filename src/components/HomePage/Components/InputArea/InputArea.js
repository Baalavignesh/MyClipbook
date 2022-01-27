import { ClickAwayListener, TextareaAutosize } from "@mui/material";
import React, { useState } from "react";
import "./InputArea.styles.css";

function InputArea(props) {
  let [noteData, setNoteData] = useState({
    title: "",
    content: "",
  });
  let [showMore, setShowMore] = useState(false);

  function clipboardHandle() {
    if (showMore === false) {
      setShowMore((prev) => {
        return !prev;
      });
    }
  }

  function inputHandle(event) {
    let { name, value } = event.target;
    setNoteData((prev) => {
      if (name === "title") {
        return {
          title: value,
          content: prev.content,
        };
      } else if (name === "content") {
        return {
          title: prev.title,
          content: value,
        };
      }
    });
  }

  function closeNote() {
    if (noteData.title === "" && noteData.content === "") {
      setShowMore(false);
    }
  }

  return (
    <div className="inputarea">
      <ClickAwayListener onClickAway={closeNote}>
        <div className="input-component">
          <TextareaAutosize
            placeholder="Title"
            className="general-input title-input"
            name="title"
            onChange={inputHandle}
            value={noteData.title}
            style={{
              display: showMore ? "block" : "none",
            }}
          />

          <TextareaAutosize
            className="general-input content-input"
            placeholder="Take a note..."
            name="content"
            onChange={inputHandle}
            onClick={clipboardHandle}
            value={noteData.content}
          />

          <button
            className="close-button"
            style={{ display: showMore ? "block" : "none" }}
            onClick={() => {
              if (noteData.title !== "" && noteData.content !== "") {
                props.addBoard(noteData);
              }
              setNoteData({
                title: "",
                content: "",
              });
              closeNote();
            }}
          >
            Add Note
          </button>
        </div>
      </ClickAwayListener>
    </div>
  );
}

export default InputArea;
