'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field tbody');
const max = 10;
const min = 2;

appendRow.addEventListener('click', () => {
  const rowsNumber = table.rows.length + 1;

  if (rowsNumber > max - 1) {
    appendRow.disabled = true;
  }

  if (rowsNumber > min) {
    removeRow.removeAttribute('disabled');
  }

  const row = table.insertRow();
  const columnNumber = table.rows[0].cells.length;

  for (let i = 0; i < columnNumber; i++) {
    row.insertCell(i);
  }
});

removeRow.addEventListener('click', () => {
  const rowsNumber = table.rows.length;

  if (rowsNumber <= max) {
    appendRow.removeAttribute('disabled');
  }

  if (rowsNumber === min + 1) {
    removeRow.disabled = true;
  }

  rowRemover();
});

const rowRemover = () => {
  const rowsNumber = table.rows.length;

  if (rowsNumber !== min) {
    const lastRow = rowsNumber[rowsNumber.length];

    table.deleteRow(lastRow);
  }
};

appendColumn.addEventListener('click', () => {
  const rows = [...document.querySelectorAll('tr')];
  const columnsNumber = table.rows[0].cells.length + 1;

  if (columnsNumber > max - 1) {
    appendColumn.disabled = true;
  }

  if (columnsNumber > min) {
    removeColumn.removeAttribute('disabled');
  }

  for (const row of rows) {
    const cell = document.createElement('td');

    row.appendChild(cell);
  }
});

removeColumn.addEventListener('click', () => {
  const columnsNumber = table.rows[0].cells.length;

  if (columnsNumber <= max) {
    appendColumn.removeAttribute('disabled');
  }

  if (columnsNumber === min + 1) {
    removeColumn.disabled = true;
  }
  columnRemover(columnsNumber);
});

const columnRemover = (number) => {
  const rows = table.rows;
  const i = number - 1;

  for (let j = 0; j < rows.length; j++) {
    rows[j].deleteCell(i);
  }
};
