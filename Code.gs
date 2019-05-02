function doGet() {
  //return HtmlService
     // .createTemplateFromFile('WebappHTML')
  var output = HtmlService.createTemplateFromFile('page');
      return output.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
      //.evaluate()//.setxframeoptionsmode(htmelservice.xframeoptionmode.allowall;
}

function getData() {
  return SpreadsheetApp
      .openById('1gRutn7gIJmOQ8qHvXdpjDPpqtqthYSyGlpWDmFACnX8')
      .getActiveSheet()
      .getDataRange()
      .getValues();
}

