const mysql = require('mysql')

describe('dockerize tests depend on mysql', () => {
  it('should connect to mysql', done => {
    mysql.createConnection({
      host: 'mysql',
      user: 'test',
      database: 'test',
      password : 'test',
    }).connect(done)
  })
})
