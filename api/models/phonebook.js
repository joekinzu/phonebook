// class for phonebook
const mysql = require('mysql');
// mysql connection
const con = mysql.createPool({
  host: 'localhost',
  user: 'dev',
  password: '1',
  database: 'test'
});

class phonebook {
  // get all records
  static getall() {
    return new Promise((resolve, reject) => {
      con.getConnection((err, connection) => {
        if (err) {
          console.log('db connection not available')
          reject(err);
        }
        connection.query('SELECT * from phonebook', (err, rows) => {
          if (err) {
            reject(err);
          }
          resolve(rows);
          connection.release();
        });
      });
    });
  }
  // delete data
  static delete(id) {
    return new Promise((resolve, reject) => {
      con.getConnection((err, connection) => {
        if (err) {
          reject(err);
        }
        connection.query(
          'DELETE from phonebook where id=?',
          id,
          (err, rows) => {
            if (err) {
              reject(err);
            }
            resolve(rows);
            connection.release();
          }
        );
      });
    });
  }
  //insert data
  static add(phone, name) {
    return new Promise((resolve, reject) => {
      con.getConnection((err, connection) => {
        if (err) {
          reject(err);
        }
        connection.query(
          'INSERT INTO phonebook(phone,name) values (?,?)',
          [phone, name],
          (err, rows) => {
            if (err) {
              reject(err);
            }
            resolve(rows);
            connection.release();
          }
        );
      });
    });
  }
  //update data
  static update(phone, name, id) {
    return new Promise((resolve, reject) => {
      con.getConnection((err, connection) => {
        if (err) {
          reject(err);
        }
        connection.query(
          'Update phonebook set phone=?, name=? where id=?',
          [phone, name, id],
          (err, rows) => {
            if (err) {
              reject(err);
            }
            resolve(rows);
            connection.release();
          }
        );
      });
    });
  }
}

module.exports = phonebook;
