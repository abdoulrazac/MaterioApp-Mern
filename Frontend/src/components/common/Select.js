import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import { Box, TextField } from "@mui/material";
function Select(props) {
  const { key, label, name, options, ...rest } = props;
  return (
    <Box>
      <TextField size="small" select name={name} id={name} {...rest}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </TextField>
      <ErrorMessage name={name} component={TextError} />
    </Box>
  );
}

export default Select;

// import React from "react";
// import Select from "@mui/material/Select";
// import {
//   Box,
//   FormControl,
//   InputLabel,
//   MenuItem,
//   TextField,
// } from "@mui/material";
// export const SelectItem = (props) => {
//   const { key, label, name, options, ...rest } = props;
//   return (
//     <Box sx={{ minWidth: 120, mt: 3 }}>
//       <FormControl fullWidth>
//         <InputLabel id="demo-simple-select-label">Age</InputLabel>
//         <Select
//           size="small"
//           labelId="demo-simple-select-label"
//           id={name}
//           value={value}
//           label={name}
//         >
//           <MenuItem value={10}>Ten</MenuItem>
//           <MenuItem value={20}>Twenty</MenuItem>
//           <MenuItem value={30}>Thirty</MenuItem>
//         </Select>
//       </FormControl>
//     </Box>
//   );
// };
