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

function printme(s) {
  console.log('printed ',s);
}
let applyAsync = (acc,val) => acc.then(val);
let composeAsync = (...funcs) => x => funcs.reduce(applyAsync, Promise.resolve(x));
composeAsync(printme(1), printme(2), printme(3));

new Promise(function(resolve) {
  console.log('first');
  resolve();
  console.log('second');
  console.log('third');
  reject();
  console.log('after third');
}).then(function(value) {
  throw new Error('something failed');
  console.log('fourth');
}).then(function(){
  console.log('fifth');
})
.catch(function(value){
  console.log('sixth');
})
.then(()=> console.log('seventh'));