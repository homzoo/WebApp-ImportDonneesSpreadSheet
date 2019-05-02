function doGet() {
// relier script au la page HTML
  var output = HtmlService.createTemplateFromFile('page');
      return output.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getData() {
  return SpreadsheetApp
      .openById('1gRutn7gIJmOQ8qHvXdpjDPpqtqthYSyGlpWDmFACnX8')
      .getActiveSheet()
      .getDataRange()
      .getValues();
}

