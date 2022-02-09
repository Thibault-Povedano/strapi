module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8edb1a396297d863d03a36552c13f11c'),
  },
});
