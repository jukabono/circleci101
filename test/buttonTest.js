const { Builder, By } = require("selenium-webdriver");
const clickTest = require("../server.js");
const expect = require("expect.js");

let driver;
describe("SeleniumChromeTest", () => {
	before(() => {
		driver = new Builder()
			.forBrowser("firefox")
			.usingServer('http://localhost:4444/wd/hub')
			.build();

		process.on("unhandledRejection", console.dir);
	});

	after(() => {
		return driver.quit();
	});

	it("button clicking", async () => {

		await driver.get("http://127.0.0.1:1234");
		await driver.findElement(By.id("b1")).click();
		const innerText1 = await driver.findElement(By.id("area1")).getText();

		it('test 0', (done) => {
			expect(innerText1).to.equal("after onclick");
			clickTest.close();
			done();
		});
	});
});
