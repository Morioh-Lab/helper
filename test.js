// import { encrypt } from './src/index';

const { encrypt, decrypt, queryString } = require('./dist');


// var s = encrypt("hello","huyhuy");
// console.log(s, decrypt(s, 'huyhuy'));


console.log(queryString('https://www.youtube.com/watch?v=KYQNUZrvnew&ab_channel=HieuNguyen',['abc','123'],['de','hhhh'],['ab_channel','kkk']));