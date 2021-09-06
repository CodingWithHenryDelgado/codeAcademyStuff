exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, colName: 'email'},
        {id: 2, colName: 'first_name'},
        {id: 3, colName: 'last_name'}
      ]);
    });
};
