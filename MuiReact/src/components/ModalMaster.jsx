import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal({btnTextNext}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>{btnTextNext}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close Final</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

ChildModal.propTypes = {
  btnTextNext: PropTypes.string.isRequired
}


export default function ModalMaster({ btnText,modalHead,modalContent,btnTextNext }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>{btnText}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">{modalHead}</h2>
          <p id="parent-modal-description">
            {modalContent}
          </p>
          <ChildModal btnTextNext={btnTextNext}/>
        </Box>
      </Modal>
    </div>
  );
}

ModalMaster.propTypes = {
  btnText: PropTypes.string.isRequired,
  modalHead: PropTypes.string.isRequired,
  modalContent: PropTypes.string.isRequired,
  btnTextNext: PropTypes.string.isRequired
};
