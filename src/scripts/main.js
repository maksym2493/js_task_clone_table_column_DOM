'use strict';

function createCopy(table, columnIndex, copyTo) {
  const column = getColumn(table, columnIndex);

  changeColumn(table, column, copyTo);
}

function changeColumn(tablet, column, copyTo) {
  column.forEach((element, i) => {
    if (copyTo === undefined) {
      tablet.rows[i].append(element.cloneNode(true));
    } else {
      tablet.rows[i].cells[copyTo].innerHTML = element.innerHTML;
    }
  });
}

function getColumn(tablet, column) {
  return [...tablet.rows].map((row) => row.cells[column]);
}

createCopy(document.querySelector('table'), 4);
createCopy(document.querySelector('table'), 1, 4);
