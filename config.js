module.exports = {  
  home: __dirname,
  // db_debug: true,

  // middlewares:{
  //
  // },
  
  routes:[{
    path: __dirname,
    folder: 'app/routes'
  }],
  
  database: {
    // dialect 'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql'
    "development": {
       "dialect": "sqlite",
       "storage": "./db.development.sqlite"
     },
     "test": {
       "username": "root",
       "password": null,
       "database": "database_test",
       "host": "127.0.0.1",
       "dialect": "mysql"
     },
     "production": {
       "username": "root",
       "password": null,
       "database": "database_production",
       "host": "127.0.0.1",
       "dialect": "mysql"
     }
  }
}