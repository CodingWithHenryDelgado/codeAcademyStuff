module.exports = {
  development: {
      client: "postgresql",
      connection: {
        port: 5432,
        database: 'knex-js',
        user: 'postgres',
        password: 'DatabaseSSP2000!',
      },
      migrations: {
          directory: 'F:/codeAcademyCode/trying-knex-js' + "/migrations"
      },
      seeds: {
          directory: "F:/codeAcademyCode/trying-knex-js" + "/seeds"
      }
  }
}