// import * as React from "react";
// import Box from "@mui/material/Box";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import { useTranslation } from "react-i18next";

// export default function Language() {
//   const { t, i18n } = useTranslation();
//   const handleClick = (lang) => {
//     i18n.changeLanguage(lang);
//   };
//   const [language, setLanguage] = React.useState("");

//   const handleChange = (event) => {
//     setLanguage(event.target.value);
//   };

//   return (
//     <Box sx={{ minWidth: 120 }}>
//       <FormControl fullWidth>
//         <InputLabel id="demo-simple-select-label">Language</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={Language}
//           label="Language"
//           onChange={handleChange}
//         >
//           <MenuItem
//             onClick={() => {
//               handleClick("en");
//             }}
//             value={english}
//           >
//             English
//           </MenuItem>
//           <MenuItem
//             onClick={() => {
//               handleClick("hi");
//             }}
//             value={hindi}
//           >
//             Hindi
//           </MenuItem>
//           <MenuItem
//             onClick={() => {
//               handleClick("pa");
//             }}
//             value={punjabi}
//           >
//             Punjabi
//           </MenuItem>
//         </Select>
//       </FormControl>
//     </Box>
//   );
// }

import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTranslation } from "react-i18next";
import { NativeSelect } from "@mui/material";

export default function Language() {
  const { t, i18n } = useTranslation();
  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  };
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box
      sx={{
        minWidth: 120,
        "& .MuiOutlinedInput-root.Mui-focused": {
          "& > fieldset": {
            borderColor: "rgba(0, 0, 0, 0.23)",
          },
        },
        "& .MuiOutlinedInput-root:hover": {
          "& > fieldset": {
            borderColor: "rgba(0, 0, 0, 0.23)",
          },
        },
      }}
    >
      <FormControl fullWidth>
        {/* <InputLabel id="demo-simple-select-label">language</InputLabel> */}
        <Select
          defaultValue="english"
          size="small"
          //value="english"
          //label="language"
          onChange={handleChange}
        >
          <MenuItem
            selected
            onClick={() => {
              handleClick("en");
            }}
            value="english"
          >
            English
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClick("pa");
            }}
            value="Punjabi"
          >
            Punjabi
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClick("hi");
            }}
            value="hindi"
          >
            Hindi
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
