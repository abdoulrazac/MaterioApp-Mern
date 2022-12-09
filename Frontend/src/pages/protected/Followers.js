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
import SearchIcon from "@mui/icons-material/Search";
import CustomModal from "../../components/common/Modal";
import CustomDialog from "../../components/common/Dialog";
import EnhancedTableHead from "../../components/table/TableHead";
import { useSelector, useDispatch } from "react-redux";
import { getComparator, stableSort } from "../../components/table/CommonTable";
import { snackBar, getUserId } from "../../Store/Slice/commonSlice";
import { Chip, InputAdornment, TextField } from "@mui/material";
import { getRequest } from "../../Services/AxiosService";

export function createData(
  FirstName,
  LastName,
  Address,
  Status,
  Action,
  Language
) {
  return {
    FirstName,
    LastName,
    Address,
    Status,
    Action,
    Language,
  };
}

const rows = [
  createData("Manas", "garg", "Sangrur", "Longowal", false, "punjabi"),
  createData("Raman", "kumar", "mohali", "sohana", false, "english"),
  createData("Rinky", "ahuja", "chandigarh", "sukhna", false, "punjabi"),
  createData("pinky", "moga", "kharar", "landran", false, "hindi"),
];
const headCells = [
  {
    id: "name",
    numeric: false,
    // disablePadding: true,
    label: "FirstName",
    isSearch: "isAlphabetic",
  },
  {
    id: "lastName",
    numeric: true,
    disablePadding: false,
    label: "LastName",
    isSearch: "isAlphabetic",
  },
  {
    id: "address",
    numeric: true,
    disablePadding: false,
    label: "Address",
    isSearch: "isAlphabetic",
  },

  {
    id: "status",
    numeric: true,
    disablePadding: false,
    label: "Status",
  },
  {
    id: "action",
    numeric: true,
    disablePadding: false,
    label: "Action",
  },
  {
    id: "language",
    numeric: true,
    disablePadding: false,
    label: "Language",
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
          Followers
        </Typography>
      )}

      <TextField
        size="small"
        placeholder="search here..."
        sx={{
          ".MuiInputBase-root": {
            borderRadius: "50px",
          },

          borderRadius: "50px",
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment>
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function Followers(props) {
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
  const [page, setPage] = React.useState(1);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [message, setMessage] = React.useState("");
  const [heading, setHeading] = React.useState("");
  const [checked, setChecked] = React.useState();
  const [sortId, setSortId] = React.useState("");
  const [id, setId] = React.useState();
  const [followers, setFollowers] = React.useState([]);
  const [userId, setUserId] = React.useState();
  const [type, setType] = React.useState();

  const dispatch = useDispatch();
  const deleteUser = useSelector((state) => state.loader.deleteuser);

  React.useEffect(() => {
    getRequest(`/follower?page=${page}`)
      .then((res) => {
        setFollowers(...followers, res.follower_list);
        dispatch(
          snackBar({
            status: true,
            severity: "success",
            message: res.message,
          })
        );
      })
      .catch((err) => {
        dispatch(
          snackBar({
            status: true,
            severity: "error",
            message: "dhgsrhsrthsrt",
          })
        );
      });
  }, [deleteUser]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  console.log("refreshhh deleteee", deleteUser);
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = followers.map((n) => n.firstName);
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
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - followers.length) : 0;

  const onSuccess = () => {
    alert("");
  };

  const Identity = (id) => {
    setId(id);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
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
              rowCount={followers.length}
              Identity={Identity}
              headCells={headCells}
              getSearchId={setSortId}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.sort(getComparator(order, orderBy)).slice() */}
              {followers.length > 0 ? (
                stableSort(followers, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.name);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.firstName)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.name}
                        //selected={isItemSelected}
                      >
                        {/* <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell> */}
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="true"
                        >
                          {row.firstName}
                        </TableCell>
                        <TableCell align="left">{row.lastName}</TableCell>

                        <TableCell align="left">{row.address}</TableCell>
                        <TableCell align="left">
                          <FormControlLabel
                            control={
                              <Switch
                                //checked={dense}
                                checked={row.status}
                                onClick={() => {
                                  openDialog();
                                  setHeading("Check Status");
                                  setMessage(
                                    "Are you sure you want to disable status"
                                  );
                                }}
                                onChange={handleChangeDense}
                              />
                            }
                          />
                        </TableCell>
                        <TableCell align="left">
                          <Box>
                            <IconButton>
                              <EditIcon
                                sx={{ color: "green" }}
                                onClick={() => {
                                  openModal();
                                  setHeading("Edit");
                                  setMessage("Add a new Product");
                                  setUserId(row._id);
                                  dispatch(getUserId(row._id));
                                  setType("add");
                                  // dispatch(
                                  //   snackBar({
                                  //     status: false,
                                  //     severity: "success",
                                  //     message: "item edited successfully",
                                  //   })
                                  // );
                                }}
                              />
                            </IconButton>
                            <IconButton>
                              <DeleteIcon
                                sx={{ color: "red" }}
                                onClick={() => {
                                  openModal();
                                  setHeading("delete product");
                                  setUserId(row._id);
                                  setType("delete");
                                  setMessage(
                                    "are you sure you want to delete this product?"
                                  );
                                  dispatch(
                                    snackBar({
                                      status: false,
                                      severity: "success",
                                      message: "item deleted successfully",
                                    })
                                  );
                                }}
                              />
                            </IconButton>
                          </Box>
                        </TableCell>
                        <TableCell align="left">{row.language}</TableCell>
                      </TableRow>
                    );
                  })
              ) : (
                <TableCell colSpan={8} align="center">
                  No Data
                </TableCell>
              )}
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
          count={followers.length}
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
        userId={userId}
        type={type}
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
