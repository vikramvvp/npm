const express = require('express');
const {postgraphql} = require('postgraphql')
const app = express();
const changeCase = require('change-case');

const pgConfig = {
  user: 'postgres',
  host: 'localhost',
  database: 'QBPMS',
  password: 'vvpp0$t',
  port: 5432,
};

app.use(postgraphql('postgres://postgres:vvpp0$t@localhost:5432/QBPMS'));

app.listen(3000, () => {
  console.log('Listening');
});
// const textArr = ['UserStatus','GradeID'];
// textArr.map((item) => {console.log(changeCase.snakeCase(item))})
