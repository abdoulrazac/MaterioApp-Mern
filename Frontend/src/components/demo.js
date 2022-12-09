mport React from 'react'
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { useRef } from 'react';
import { useState ,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { getComparator, stableSort } from '../../util/common';
import { snakbarStatus } from '../../store/slices/common/common';
import EnhancedTableHead, { EnhancedTableToolbar } from '../../component/common/TabelHead';
import CustomModal from '../../muiComponents/modal/CustomModal';
import AlertDialog from '../../muiComponents/dialog/Custom_Dialog';
import {getRequest} from '../../services/AxiosService'

function createData(id, firstname, lastname, address,language, status, action) {
  return {
    id,
    firstname,
    lastname,
    address,
    language,
    status,
    action,
  };
}
const rows = [
  createData(1, 'Cupcake', 1, 'adfdf', 'sdfsdfsdfsdf', false),
  createData(2, 'Donut', 2, 'bdfdfgf', 'sdfsdferwefd', false),
  createData(3, 'Eclair', 3, 'cdfgdfgd', 'sdfsdfsdfsdfsdf', false),
  createData(4, 'Frozen yoghurt', 4, 'vchrthfgrt', 'cvbbvjutyds', false),
  // createData('Gingerbread', 356, 16.0, 49, 3.9),
  // createData('Honeycomb', 408, 3.2, 87, 6.5),
  // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  // createData('Jelly Bean', 375, 0.0, 94, 0.0),
  // createData('KitKat', 518, 26.0, 65, 7.0),
  // createData('Lollipop', 392, 0.2, 98, 0.0),
  // createData('Marshmallow', 318, 0, 81, 2.0),
  // createData('Nougat', 360, 19.0, 9, 37.0),
  // createData('Oreo', 437, 18.0, 63, 4.0),
];
const headCells = [
  {
    id: 'firstname',
    numeric: false,
    label: 'Firstname',
    isSearch: 'isAlphabet'
  },
  {
    id: 'lastname',
    numeric: true,
    disablePadding: false,
    label: 'Lastname',
    isSearch: 'isAlphabet'
  },
  
  {
    id: 'address',
    numeric: true,
    disablePadding: false,
    label: 'Address',
    isSearch: 'isAlphabet'
  },
  {
    id: 'language',
    numeric: true,
    disablePadding: false,
    label: 'Language',
    isSearch: 'isAlphabet'
  },
  
  {
    id: 'status',
    numeric: true,
    disablePadding: false,
    label: 'Status',
    isSearch: 'isAlphabet'
  },
  {
    id: 'action',
    numeric: true,
    label: 'Action',
    isSearch: 'isAlphabet'
  },

];

function User() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [checked, setChecked] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const childRef = useRef(null)
  const childRef1 = useRef(null)
  const [heading, setHeading] = useState('')
  const [message, setMessage] = useState('')
  const [sortId, setSortId] = useState('')
  const [id, setId] = useState('')
  const dispatch = useDispatch()
  const[user,setUser]=useState(null)

  useEffect(() => {  
    return () => {
      getRequest(`/profile/getData?page=${page}`)
    }
  }, [])
  


  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

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
        selected.slice(selectedIndex + 1),
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

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;


  //modalcalling
  const openModal = () => {
    childRef.current.handleClickOpen();
  };
  //dialog
  const handleDialog = () => {
    childRef1.current.handleClickOpenDialog();
  }
  //dialog getStatus
  const SwitchedStatus = (status) => {
    setChecked(status)
  }
  //get name id
  function nameId(id)
 {
    setId(id)

  }




  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <Paper sx={{ width: '100%', mb: 2 }}>
          <EnhancedTableToolbar />
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
            // size={dense ? 'small' : 'medium'}
            >
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                // onRequestSort={() => { handleRequestSort(orderBy, order, id, setOrderBy, setOrder) }}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
                nameId={nameId}
                headCells={headCells}
                getSearchId={setSortId}
              />
              <TableBody>
                {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.sort(getComparator(order, orderBy)).slice() */}
                {stableSort(rows, getComparator(order, orderBy, sortId))
                  .slice(page  rowsPerPage, page  rowsPerPage + rowsPerPage)
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
                      //selected={isItemSelected}
                      >
                        {/* <TableCell padding="checkbox">
                                                <Checkbox
                                                    color="primary"
                                                    checked={isItemSelected}
                                                    inputProps={{
                                                        'aria-labelledby': labelId,
                                                    }}
                                                />
                                            </TableCell> */}
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          align="left"
                        >
                          {row.firstname}
                        </TableCell>
                        <TableCell align="left">{row.lastname}</TableCell>
                        <TableCell align="left">{row.language}</TableCell>
                        <TableCell align="left">{row.address}</TableCell>
                        <TableCell align="left">
                          {/* <Chip label={row.status} sx={{
                                                    color: 'white',
                                                    backgroundColor: `${row.status === 'online' ? 'green' : 'red'}`
                                                }} /> */}
                          <FormControlLabel
                            control={<Switch onChange={handleChange} onClick={() => {
                              setMessage('Are you sure want disable')
                              handleDialog();
                            }} checked={row.status} />}
                          />
                        </TableCell>
                        <TableCell align="left">
                          <Box>
                            <IconButton onClick={() => {
                              setHeading("Delete Product")
                              setMessage("Are you sure want to delete item")

                              dispatch(snakbarStatus({
                                status: false,
                                severity: 'success',
                                message: 'item is deleted successfully'
                              }))
                              openModal();
                            }}>
                              <DeleteForeverIcon sx={{ color: 'red' }} />
                            </IconButton>
                            <IconButton onClick={() => {
                              setHeading("Add details")
                              setMessage("Are you sure want to edit details")
                              dispatch(snakbarStatus({
                                status: false,
                                severity: 'success',
                                message: 'successfully edit'
                              }))
                              openModal();

                            }}>
                              <EditIcon sx={{ color: 'green' }} />
                            </IconButton>
                          </Box>
                        </TableCell>
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
        <CustomModal
          ref={childRef}
          heading={heading}
          modalMessage={message}
        />
        <AlertDialog
          ref={childRef1}
          dialogMessage={message}
          SwitchedStatus={SwitchedStatus} />
      </Box>
    </div>
  )
}

export default User