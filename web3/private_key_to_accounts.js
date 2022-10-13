const Web3 = require('web3');
let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

let PK = "개인키"; // 가나슈 cli로 생성한 개인키 입력력
// 개인키와 주소 생성
let account = web3.eth.accounts.privateKeyToAccount(PK); 
console.log(account);