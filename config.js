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
       "username": "i5ting",
       "password": "000000",
       "database": "moajs",
       "host": "127.0.0.1",
       "dialect": "mysql"
     },
     "test": {
       "username": "i5ting",
       "password": "000000",
       "database": "moajs",
       "host": "127.0.0.1",
       "dialect": "mysql"
     },
     "production": {
       "username": "i5ting",
       "password": "000000",
       "database": "moajs",
       "host": "127.0.0.1",
       "dialect": "mysql"
     }
  }
}