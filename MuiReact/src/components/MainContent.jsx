import * as React from "react";
import PropTypes from 'prop-types';
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
// import { useTheme } from '@mui/material/styles';

export default function MainContainer(props) {
  // const theme = useTheme();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false}>
        <Box
          sx={{
            bgcolor: "#cfe8fc",
            height: "100vh",
            minHeight: "100vh",
            paddingTop: "0.1vh"
          }}
        >
          {props.children}
        </Box>
      </Container>
    </React.Fragment>
  );
}

MainContainer.propTypes = {
  children: PropTypes.node,
}