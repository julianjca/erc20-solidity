const { expect } = require("chai");

describe("My Token", function () {
  it("Should return the correct name and symbol", async function () {
    const tokenName = 'My Token'
    const tokenSymbol = 'MYTKN'
    const MyToken = await hre.ethers.getContractFactory("MyToken");
    const myToken = await MyToken.deploy(tokenName, tokenSymbol);
    await myToken.deployed();

    expect(await myToken.symbol()).to.eq(tokenSymbol);
    expect(await myToken.name()).to.eq(tokenName);
    expect(await myToken.totalSupply()).to.eq(10000);
  });
});
