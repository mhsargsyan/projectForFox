const faker = require('faker').internet;


module.exports = {

  generateEmail() {
    const email = faker.email();
    return email;
  },

};
