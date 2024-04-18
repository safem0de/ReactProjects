import MainContainer from "../components/MainContent";
import MasterTable from "../components/MasterTable";
import Papa from "papaparse";

import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import * as React from "react";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function filterDuplicatesByKey(data, key) {
  const seen = new Set();
  const filteredData = data.filter(item => {
      const keyValue = item[key];
      if (!seen.has(keyValue)) {
          seen.add(keyValue);
          return true;
      }
      return false;
  });
  return filteredData;
}

const MasterFilter = () => {
  const [headerZ, setHeaderZ] = React.useState([]);
  const [rowZ, setRowZ] = React.useState([]);

  const createHeader = (Objdata, addRowNo = true) => {
    if (!Objdata || !Objdata.length) {
      return [];
    }

    var headers = [];
    if (addRowNo) {
      headers.push({ id: "no", label: "No." });
      Object.keys(Objdata[0]).forEach((element) => {
        headers.push({
          id: element,
          label: element
            .replace(/_/g, " ")
            .replace(/\b\w/g, (l) => l.toUpperCase()),
        });
      });
      return headers;
    } else {
      headers = [];
      Object.keys(Objdata[0]).forEach((element) => {
        headers.push({
          id: element,
          label: element
            .replace(/_/g, " ")
            .replace(/\b\w/g, (l) => l.toUpperCase()),
        });
      });
      return headers;
    }
  };

  function addIdToObjects(array, strColumn = "no") {
    return array.map((item, index) => ({
        id: index + 1,  // Add an 'id' property based on the index, starting from 1
        [strColumn] : (index + 1).toString(),
        ...item,
    }));
  }

  const changeHandler = (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        console.log(results.data);
        console.log(createHeader(results.data, false));

        console.log(createHeader(results.data, true));
        console.log(addIdToObjects(results.data));

        setHeaderZ(createHeader(results.data, true));
        setRowZ(addIdToObjects(results.data, "no"));

        console.log(filterDuplicatesByKey(addIdToObjects(results.data, "no"),"y_no"));

        // setHeaderZ([
        //   {
        //     id: "name",
        //     label: "Dessert(100g serving)",
        //   },
        //   {
        //     id: "calories",
        //     label: "Calories",
        //   },
        //   {
        //     id: "fat",
        //     label: "Fat(g)",
        //   },
        //   {
        //     id: "carbs",
        //     label: "Carbs(g)",
        //   },
        //   {
        //     id: "protein",
        //     label: "Protein(g)",
        //   },
        // ]);

        // function createData(id, name, calories, fat, carbs, protein) {
        //   return {
        //     id,
        //     name,
        //     calories,
        //     fat,
        //     carbs,
        //     protein,
        //   };
        // }

        // setRowZ([
        //   createData(1, "Cupcake", 305, 3.7, 67, 4.3),
        //   createData(2, "Donut", 452, 25.0, 51, 4.9),
        //   createData(3, "Eclair", 262, 16.0, 24, 6.0),
        //   createData(4, "Frozen yoghurt", 159, 6.0, 24, 4.0),
        //   createData(5, "Gingerbread", 356, 16.0, 49, 3.9),
        //   createData(6, "Honeycomb", 408, 3.2, 87, 6.5),
        //   createData(7, "Ice cream sandwich", 237, 9.0, 37, 4.3),
        //   createData(8, "Jelly Bean", 375, 0.0, 94, 0.0),
        //   createData(9, "KitKat", 518, 26.0, 65, 7.0),
        //   createData(10, "Lollipop", 392, 0.2, 98, 0.0),
        //   createData(11, "Marshmallow", 318, 0, 81, 2.0),
        //   createData(12, "Nougat", 360, 19.0, 9, 37.0),
        //   createData(13, "Oreo", 437, 18.0, 63, 4.0),
        // ]);

        // console.log(headerZ);
        // console.log(rowZ);
      },
    });
  };

  return (
    <MainContainer>
      <Grid container justifyContent="center">
        <Grid item xs={10} md={10}>
          <h2>Master Filter</h2>
        </Grid>
        <Grid item xs={10} md={10}>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
          >
            Upload file
            <VisuallyHiddenInput
              type="file"
              accept=".csv"
              onChange={changeHandler}
            />
          </Button>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item xs={8} md={10}>
          {headerZ.length > 0 && rowZ.length > 0 ? (
            <MasterTable Header={headerZ} Row={rowZ} />
          ) : null}
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item xs={8} md={10}>
          <Button>Insert to Database</Button>
        </Grid>
      </Grid>
    </MainContainer>
  );
};

export default MasterFilter;
