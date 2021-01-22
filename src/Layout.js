import React, { useState ,useEffect} from "react";
import axios from "axios";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import "./App.css";

export default function ComboBox() {
  const [url, seturl] = useState("");
  const [type, settype] = useState("");
  const [name, setname] = useState("");
  const base_url='https://restcountries.eu/rest/v2/';
  useEffect(()=>{
    const fetch=async()=>{
       await axios.base_url.get("/name/eesti");
    }
    fetch();
  },[])
  return (
    <React.Fragment>
      <Container maxWidth="sm" className="container">
        <div>
          <span> Country Search Box:</span>
        </div>
        <Autocomplete
          className="autocomplete"
          id="combo-box-demo"
          options={top100Films}
          getOptionLabel={(option) => option.title}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Search type" variant="outlined" />
          )}
        />
      </Container>
    </React.Fragment>
  );
}

const top100Films = [
  { title: "Name"},
  { title: "Full Name"},
  { title: "Code" },
  { title: "List of codes" },
  { title: "Currency" },
  { title: "Language"},
  { title: "Capital city" },
  { title: "Calling code" },
  { title: "Region" },
  { title: "Regional Bloc" },
  { title: "Region" },
];
