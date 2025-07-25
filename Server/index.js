const axios = require('axios');
const config = require('./config');

const getAccessToken = async () => {
  try {
    const auth = Buffer.from(`${config.consumerKey}:${config.consumerSecret}`).toString('base64');

    const response = await axios.get(
      'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
      {
        headers: {
          Authorization: `Basic ${auth}`,
        },
      }
    );

    return response.data.access_token;
  } catch (error) {
    console.error('Error fetching access token:', error.response?.data || error.message || error);
    throw error;
  }
};

module.exports = getAccessToken;
