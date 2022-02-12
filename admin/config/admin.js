module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '01d057446ec757618b6eed97615d5896'),
  },
});
