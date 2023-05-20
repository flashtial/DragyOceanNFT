 const DragyOcean = artifacts.require("DragyOcean");
 const truffleAssert = require("truffle-assertions");
 contract("DragyOcean",(accounts) => {
    it("Should creat NFT to a specific account" , async() => {
        const DragyOceanInstance = await DragyOcean.deployed();
        let txResult =  await DragyOceanInstance.safeMint(accounts[1], "1.json");
        truffleAssert.eventEmitted(txResult, "Transfer", {from:'0x0000000000000000000000000000000000000000', to:accounts[1], tokenId:web3.utils.toBN("0")})
        console.log(txResult);
        assert.equal( await DragyOceanInstance.ownerOf(0), accounts[1],"not correct account");
    })
 })