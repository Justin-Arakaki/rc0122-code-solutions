/* exported student */
const student = {
  firstName: 'Justin',
  lastName: 'Arakaki',
  subject: 'JavaScript Probably',
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction: function () {
    const msg = 'Hello, my name is ' + this.getFullName() +
    ' and I am studying ' + this.subject + '.';
    return msg;
  }
};
