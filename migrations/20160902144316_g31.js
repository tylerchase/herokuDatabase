
exports.up = function(knex, Promise) {
  return knex.schema.createTable('g31students', function(table){
    table.increments();
    table.string('First Name')
    table.string('Last Name')
    table.integer('Attendance Number')
    table.string('Github Account')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('g31students')
};
