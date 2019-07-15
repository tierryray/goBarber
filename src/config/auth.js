// MD5 Encryption Online, e tempo de expiração do token
export default {
  secret: process.env.APP_SECRET,
  expiresIn: '7d',
};
