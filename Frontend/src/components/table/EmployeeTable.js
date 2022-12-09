import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import EditIcon from "@mui/icons-material/Edit";
import { useRef } from "react";
import CustomModal from "../common/Modal";
import CustomDialog from "../common/Dialog";
import EnhancedTableHead from "./TableHead";
import { useSelector, useDispatch } from "react-redux";
import { getComparator, stableSort } from "./CommonTable";
import { snackBar } from "../../Store/Slice/commonSlice";
export function createData(fullname, email, gender, country, salary) {
  return {
    fullname,
    email,
    gender,
    country,
    salary,
  };
}

const rows = [
  createData("gingerbread", "ginger@19gmail.com", "male", "india", 12500),
  createData("Honeycomb", "honey@14gmail.com", "male", "india", 165.32),
  createData("Icecream ", "ice@14gmail.com", "female", "india", 140.34),
  createData("TEST", "ice@12gmail.com", "female", "germany", 10000),
  createData("KitKat", "kitkat@13gmail.com", "female", "germany", 10000),
  createData("USER", "kitkat@17gmail.com", "female", "germany", 2220.3),
  createData("potato", "potato@16gmail.com", "male", "india", 12500),
  createData("tomato", "tomato@18gmail.com", "male", "india", 165.32),
  createData("hello", "veg@1gmail.com", "female", "india", 140.34),
  createData("Marshmallow", "marsh@12gmail.com", "female", "india", 140.34),
  createData("Nougat", "noughat@10gmail.com", "female", "india", 14440.34),
  createData("Oreo", "noughat@11gmail.com", "female", "india", 14440.34),
];
const headCells = [
  {
    id: "fullname",
    numeric: false,
    disablePadding: true,
    label: "FullName",
    isSearch: "isAlphabetic",
  },
  {
    id: "email",
    // numeric: true,
    disablePadding: false,
    label: "Email",
    isSearch: "isAlphabetic",
  },
  {
    id: "gender",
    //numeric: true,
    disablePadding: false,
    label: "Gender",
    isSearch: "isAlphabetic",
  },
  {
    id: "country",
    //numeric: true,
    disablePadding: false,
    label: "Country",
    isSearch: "isAlphabetic",
  },

  {
    id: "salary",
    numeric: true,
    disablePadding: false,
    label: "Salary",
    isSearch: "isNumber",
  },
];

export function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Nutrition
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EmployeeTable(props) {
  const childRef = useRef();
  const DialogRef = useRef();

  const openModal = () => {
    childRef.current.handleClickOpen();
  };
  const EnableStatus = (status) => {
    setChecked(status);
  };
  const openDialog = () => {
    DialogRef.current.handleClickOpenDialog();
  };

  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [message, setMessage] = React.useState("");
  const [heading, setHeading] = React.useState("");
  const [checked, setChecked] = React.useState();
  const [id, setId] = React.useState();
  const [isSort, setIsSort] = React.useState();

  const dispatch = useDispatch();

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const onSuccess = () => {
    alert("");
  };

  const Identity = (id) => {
    setId(id);
  };
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            // size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              Identity={Identity}
              headCells={headCells}
              getSorting={setIsSort}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.sort(getComparator(order, orderBy)).slice() */}
              {stableSort(rows, getComparator(order, orderBy, isSort))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.fullname}
                      </TableCell>
                      <TableCell align="right">{row.email}</TableCell>
                      <TableCell align="right">{row.gender}</TableCell>
                      <TableCell align="right">{row.country}</TableCell>
                      <TableCell align="right">{row.salary}</TableCell>
                    </TableRow>
                  );
                })}
              {/* {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )} */}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      {/* <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      /> */}

      <CustomModal
        ref={childRef}
        heading={heading}
        Message={message}
        onSuccess={onSuccess}
      />
      <CustomDialog
        ref={DialogRef}
        heading={heading}
        Message={message}
        EnableStatus={EnableStatus}
      />
    </Box>
  );
}
