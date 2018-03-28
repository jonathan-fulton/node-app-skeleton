/* EXECUTE BY HAND USING root USER. NOT INTENDED TO BE RUN VIA db-migration */


/*****************************************************************************
 * Main database setup
 *****************************************************************************/
DROP DATABASE IF EXISTS mydb;
CREATE DATABASE IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

/* User for API server connecting to database when collocated; probably only used for local dev */
GRANT ALL ON `mydb`.* to 'mydbdev'@'%' IDENTIFIED BY '=7QM^!4ynHebT7s7';
GRANT ALL ON `mydb`.* to 'mydbdev'@'localhost' IDENTIFIED BY '=7QM^!4ynHebT7s7';
GRANT ALL ON `mydb`.* to 'mydbdev'@'127.0.0.1' IDENTIFIED BY '=7QM^!4ynHebT7s7';

FLUSH PRIVILEGES;

/*****************************************************************************
 * Testing database setup
 *****************************************************************************/
DROP DATABASE IF EXISTS mydb_test;
CREATE DATABASE IF NOT EXISTS `mydb_test` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

/* User for API server connecting to database when collocated; probably only used for local dev */
GRANT ALL ON `mydb_test`.* to 'mydbdev'@'%' IDENTIFIED BY '=7QM^!4ynHebT7s7';
GRANT ALL ON `mydb_test`.* to 'mydbdev'@'localhost' IDENTIFIED BY '=7QM^!4ynHebT7s7';
GRANT ALL ON `mydb_test`.* to 'mydbdev'@'127.0.0.1' IDENTIFIED BY '=7QM^!4ynHebT7s7';

FLUSH PRIVILEGES;