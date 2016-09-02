
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('g31students').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('g31students').insert({
          'First Name': 'Taylor',
          'Last Name': 'Hessel',
          'Attendance Number': 26,
        }),
        knex('g31students').insert({
          'First Name': 'Thomas',
          'Last Name': 'Rizzo',
          'Attendance Number': 27,

        }),
        knex('g31students').insert({
          'First Name': 'Tyler',
          'Last Name': 'Chase',
          'Attendance Number': 28,
        })
      ]);
    });
};
