module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'slkdfjlékasdjféklasdkléf'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'slkdfjlksadjklfdsaf'),
  },
});
