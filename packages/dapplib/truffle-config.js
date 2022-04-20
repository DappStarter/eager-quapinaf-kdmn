require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace arctic sun tone strike rival magic artwork hover arctic metal gate'; 
let testAccounts = [
"0xd795ab62b99af4ce2315de58216fbfb24cd638afe6ac1e9a165c86703cf30a9d",
"0xe4dad4fd231e083761260a3b6542d426bf5d68fca5e42f8993c7f11539d0c6a0",
"0x3491441ac0aa703f24357daa6bbcea102dcc70dbfff014ec749d930ca8e33d3f",
"0xebdac6847d0c73b964f8f8d0237d7d9e5b994f6c6df154a58cfc449c806e19e3",
"0xeb4b35f562671480cc73327208fa5c0768eb768897a2e14aba2a01e96c9843f6",
"0xbcdf1f516a1c82c1b3e8bd2c269365299699feb02c5aae420f14b71ea0fca706",
"0x2e000d27770ee5a85a4b84a9ee2281f76e90e58b437da44088a514b80d5f3fa4",
"0xe52e6709804e45cc2a302d5306c0a318ce3d0436020554b370378500eaa5267e",
"0x837d4616a135b803770a076ec0ea5ec849c5f95c923112381c33831d1371b304",
"0x2c263797783b20fc6d978e4255663c82ec1cae8053125bebee4e0ebeb1959fb5"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

