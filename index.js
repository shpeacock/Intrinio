require('dotenv').config();

var intrinioSDK = require('intrinio-sdk');

intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = process.env.SANDBOX_KEY;

var securityAPI = new intrinioSDK.SecurityApi();

var identifier = "AAPL"; // String | A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)

var opts = { 
  'startDate': new Date("2019-09-18"), // Date | Return prices on or after the date
  'endDate': new Date("2019-09-19"), // Date | Return prices on or before the date
  'frequency': "daily", // String | Return stock prices in the given frequency
  'pageSize': 100, // Number | The number of results to return
  'nextPage': null // String | Gets the next page of data from a previous API call
};

securityAPI.getSecurityStockPrices(identifier, opts).then(function(data) {
  console.log(data);
}, function(error) {
  console.error(error);
});