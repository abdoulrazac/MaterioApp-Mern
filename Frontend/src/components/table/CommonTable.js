export function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}
export function descendingComparator(a, b, orderBy, isSort) {
  console.log("aaa", a + "bbb", b + "orderby", orderBy + " is sort", isSort);

  let newValue = "";
  let oldValue = "";

  if (isSort === "isNumber") {
    newValue = parseFloat(b[orderBy]);
    oldValue = parseFloat(a[orderBy]);
  }
  if (isSort === "isAlphabetic") {
    newValue = b[orderBy].toLowerCase();
    oldValue = a[orderBy].toLowerCase();
  }
  if (oldValue < newValue) {
    return -1;
  }
  if (oldValue > newValue) {
    return 1;
  }

  return 0;
}

export function getComparator(order, orderBy, isSort) {
  console.log("sorrtt", isSort);
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy, isSort)
    : (a, b) => -descendingComparator(a, b, orderBy, isSort);
}
