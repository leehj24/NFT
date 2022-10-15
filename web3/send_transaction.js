const Web3 = require('web3');
let web3 =new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
async function main(){
    const from = '주소';
    const pk = '개인키';
    const to = '0xf2Af0bc77a08Ea45C8ce2f6F902048680489A0973';
    const tx ={
        from,
        to,
        gas:21000,
        gasPrice: '21000000000',
        value:'1000000000000000'
    };
    let account = web3.eth.accounts.privateKeyToAccount(PK); //개인키를 account객체로 복구구
    const signedTx = await account.signTransaction(tx);
    const sentTx = await web3.eth.sendSignedTrascation(
        signedTx.raw || signedTx.rawTranscation
    );
    console.log(sentTx);
};
main();