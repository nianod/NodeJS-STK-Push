const axios = require('axios');
const config = require('./config');
const getAccessToken = require('./auth');

const stkPush = async(amount, phoneNumber) => {
  const accessToken = await getAccessToken();
  const timestamp = new Date().toISOString().replace(/-/g, '').replace(/:/g, '').replace(/\..+/, '');
  const password = Buffer.from(`${config.businessShortCode}${config.lipaNaMpesaPasskey}${timestamp}`).toString('base64')

  const response = await axios.post('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest', {
    'businessShortCode': config.businessShortCode,
    'password': password,
    'timestamp': timestamp,
    'TransactionType': 'CustomerBuyGooodsOnline',
    'Amount': amount,
    'PartyA':phoneNumber,
    'PartyB': config.businessShortCode,
    'PhoneNumber': phoneNumber,
    'CallBackURL': config.CallbackURL,
    'AccountReference': "",
    'TransactionDesc': 'payment for Goods'
  }, {
    headers: {
      'Authorization':`Bearer ${accessToken}`,
      'Content-Type': 'Application/json',
    }
  })

  return response.data
}

module.exports = stkPush;
