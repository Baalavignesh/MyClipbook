import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextareaAutosize,
} from "@mui/material";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import React, { useState } from "react";
import Masonry from "react-masonry-css";
import "./Clipboard.styles.css";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  title: {
    padding: "24px 12px 4px 28px !important",
  },
  content: {
    padding: "0px 12px 0px 28px !important",
  },
  dialogShadow: {
    boxShadow: "0 1px 3px 0 rgb(0 0 0 / 60%), 0 4px 8px 3px rgb(0 0 0 / 30%)",
  },
});

function Clipboard(props) {
  const classes = useStyles();
  // let [clipDimension, setClipDimension] = useState([]);
  // const targetRef = useRef();
  const [openDialog, setOpenDialog] = useState(false);
  const [currentNote, setCurrentNote] = useState(0);

  let [NewNoteData, setNewNoteData] = useState({
    title: "",
    content: "",
  });
  function inputHandle(event) {
    let { name, value } = event.target;
    setNewNoteData((prev) => {
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

  const handleOpenDialog = (index) => {
    setCurrentNote(index);
    setNewNoteData({
      title: props.allBoard[index].title,
      content: props.allBoard[index].content,
    });
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    let allBoard = [...props.allBoard];

    if (NewNoteData.title === "" && NewNoteData.content === "") {
      props.deleteClipboard();
    } else {
      allBoard[currentNote] = NewNoteData;
      props.updateClipboard(allBoard);
    }
    setOpenDialog(false);
  };

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <div className="allClipboard">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {props.allBoard &&
          props.allBoard.map((clip, index) => {
            return (
              <div
                className="singleClipboard"
                key={index}
                onClick={() => {
                  handleOpenDialog(index);
                }}
              >
                <div className="clipboard-text clipboard-title">
                  {clip.title}
                </div>
                <div className="clipboard-text clipboard-content">
                  {clip.content}
                </div>
              </div>
            );
          })}
      </Masonry>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth={"sm"}
        fullWidth={true}
        scroll="paper"
        classes={{ root: classes.dialogShadow }}
      >
        <DialogTitle className="dialogColor" classes={{ root: classes.title }}>
          <TextareaAutosize
            placeholder="Title"
            className="c-general-input c-title-input"
            name="title"
            style={{ width: 500 }}
            onChange={inputHandle}
            value={NewNoteData.title}
          ></TextareaAutosize>
        </DialogTitle>
        <DialogContent className="dialogColor" classes={{ root: classes.content }}>
          <DialogContentText>
            <TextareaAutosize
              className="c-general-input c-content-input"
              placeholder="Take a note..."
              style={{ width: 500 }}
              name="content"
              onChange={inputHandle}
              value={NewNoteData.content}
            />
          </DialogContentText>
        </DialogContent>
        <div className="dialog-bottom">
          <Button
            variant="text"
            color="error"
            onClick={() => {
              handleCloseDialog();
              props.deleteClipboard(currentNote);
            }}
          >
            <DeleteForeverIcon color="error" fontSize="large" />
          </Button>
          <Button variant="text" color="error" onClick={handleCloseDialog}>
            close
          </Button>
        </div>
      </Dialog>
    </div>
  );
}

export default Clipboard;
