require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hero force spot toy note snow pulp install gloom slot gift'; 
let testAccounts = [
"0x2d920fb246ec5373350da07a949777824d97f9237c117b82ece651f83c1bf960",
"0xeffc0afe7d3915c9c1916413e86bc47a5566d0430376e999f1a9d11de14e1c4f",
"0x539cbd85114809edad32e000e0eecc62524c80c038320beaf44f7112899b8583",
"0xb21ffc4ea03d050704c24b8b1063b3f98ef448dac3e641f640b5c22c7e087609",
"0x838b0bc10443444b89034e10074dfe30af2f9b2b77f76af0e68dc1dfbe8ddd5c",
"0x7e600ede19cf2e2723c649d35b0cf2424ae8d3ae91dcfb87b218bdf379feebbd",
"0x61bd7d9004434562bc12a5ffce11efa48385a3d83c8f03f6e8a159b68a7496ed",
"0x4f1b41176aafdc6c034d9bb8f8b17f0db8b1ffb44d86de9607deed67511559bf",
"0x087f8d60757e1a62f3c7cebb8603897d31cc8bdb924b00b2fc425084e4c7825f",
"0xd9698cc07b0b5fbbc99d08e70a2cc382243d4e615d9b58c2bbb5ef316dd3319c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
