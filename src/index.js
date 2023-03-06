function PROTECT_ALL_SHEETS() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheets = spreadsheet.getSheets();

  for (let i = 0; i < sheets.length; i++) {
    const sheet = sheets[i];
    const protection = sheet.protect();
    protection.setWarningOnly(true);
  }
}
