import * as chai from 'chai';
let assert = chai.assert;
let should = chai.should();
let expectChai = chai.expect;

describe("Trello Suite", async () => {
    beforeEach(async () => {
        await browser.url("https://trello.com/home");
    });

    afterEach(async () => {
        await browser.deleteCookies();
    });

    it("create a new board", async () => {
        const logInButton = await $('//div[contains(@class, "jnMZCI")]/a[text()="Log in"]');
        await logInButton.waitForClickable();
        await logInButton.click();

        await browser.pause(1000);

        const emailInputField = await $('//input[@id="username"]');
        await emailInputField.click();
        await emailInputField.setValue('testnodejs55555@gmail.com');
        
        await browser.pause(1000);

        const loginSubmitButton = await $('//button[@id="login-submit"]');
        await loginSubmitButton.waitForClickable();
        await loginSubmitButton.click();

        await browser.pause(1000);

        const passwordInputField = await $('//input[@id="password"]');
        await passwordInputField.click();
        await passwordInputField.setValue(',FEVrV9c=Pm%Q=N');

        await loginSubmitButton.click();

        await browser.pause(3000);

        const createButton = await $('//button[@data-testid="header-create-menu-button"]');
        await createButton.waitForClickable();
        await createButton.click();

        const createBoardOption = await $('//button[@data-testid="header-create-board-button"]');
        await createBoardOption.waitForClickable();
        await createBoardOption.click();

        let name = "test" + Math.round(Math.random() * 1000);
        const boardTitleInputField = await $('//input[@data-testid="create-board-title-input"]');
        await boardTitleInputField.setValue(name);

        const createBoardButton = await $('//button[text()="Create"]');
        await createBoardButton.waitForClickable();
        await createBoardButton.click();

        const pageName = await $(`//h1[contains(text(), '${name}')]`);
        await should.exist(pageName);
    });

    // it("search for an existing board", async () => {
    //     const logInButton = await $('//div[contains(@class, "jnMZCI")]/a[text()="Log in"]');
    //     await logInButton.waitForClickable();
    //     await logInButton.click();

    //     await browser.pause(1000);

    //     const emailInputField = await $('//input[@id="username"]');
    //     await emailInputField.click();
    //     await emailInputField.setValue('testnodejs55555@gmail.com');
        
    //     await browser.pause(1000);

    //     const loginSubmitButton = await $('//button[@id="login-submit"]');
    //     await loginSubmitButton.waitForClickable();
    //     await loginSubmitButton.click();

    //     await browser.pause(1000);

    //     const passwordInputField = await $('//input[@id="password"]');
    //     await passwordInputField.click();
    //     await passwordInputField.setValue(',FEVrV9c=Pm%Q=N');

    //     await loginSubmitButton.click();

    //     await browser.pause(3000);

    //     const searchField = await $('//input[@placeholder="Search"]');
    //     await searchField.waitForClickable();
    //     await searchField.click();
    //     await searchField.setValue("My Board");

    //     const viewAllResults = await $("//span[normalize-space()='View all results']");
    //     await viewAllResults.waitForClickable();
    //     await viewAllResults.click();

    //     const myBoardOption = await $("//span[text()='My Board']");
    //     await myBoardOption.waitForClickable();
    //     await myBoardOption.click();

    //     await browser.pause(3000);

    //     const pageName = await $('//h1[text()="My Board"]');
    //     await should.exist(pageName);
    // });
});