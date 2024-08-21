describe("Trello Suite", async () => {
    beforeEach(async () => {
        await browser.url("https://trello.com/home");
    });

    it("Logging in with an invalid email", async () => {
        const logInButton = await $('//div[contains(@class, "jnMZCI")]/a[text()="Log in"]');
        await logInButton.waitForClickable();
        await logInButton.click();

        const signUpButton = await $('//a[text()="Create an account"]');
        await signUpButton.waitForClickable();
        await signUpButton.click();

        await browser.pause(1000);

        const emailInputField = await $('//input[@id="email"]');
        await emailInputField.click();
        await emailInputField.setValue('testnodejs55555@gmail');

        const signUpSubmitButton = await $('//button[@id="signup-submit"]');
        await signUpSubmitButton.waitForClickable();
        await signUpSubmitButton.click();

        const errorMessage = await $('//div[@id="email-uid6-error"]');
        expect (await errorMessage.getText()).toEqual("Please enter a valid email address");

        await browser.pause(5000);

        // const loginFrame = await $('iframe#dialog_frame');
        // await loginFrame.waitForExist();
        // await browser.switchToFrame(loginFrame);

        

        // const passwordInputField = await $('input#login_password');
        // await passwordInputField.click();
        // await passwordInputField.setValue('55555');

        // const logInButton = await $('input#btn_login');
        // await logInButton.click();
        // await browser.pause(1000);
        
        // const errorMessage = await $('div#ajax-error');
        // expect (await errorMessage.getText()).toEqual("E-mail address not found, or password incorrect.\nTo reset your password, please use the 'Forgotten password?' link.");
    });

    /*it("Logging in with a valid email but incorrect password", async () => {
        await $('//span[text()="Log In/Register"]').click();
        await browser.pause(1000);

        const loginFrame = await $('iframe#dialog_frame');
        await loginFrame.waitForExist();
        await browser.switchToFrame(loginFrame);

        const emailInputField = await $('input#login_email');
        await emailInputField.click();
        await emailInputField.setValue('testnodejs55555@gmail.com');

        const passwordInputField = await $('input#login_password');
        await passwordInputField.click();
        await passwordInputField.setValue('555555555555555');

        const logInButton = await $('input#btn_login');
        await logInButton.click();
        await browser.pause(1000);
        
        const errorMessage = await $('div#ajax-error');
        expect (await errorMessage.getText()).toEqual("E-mail address not found, or password incorrect.\nTo reset your password, please use the 'Forgotten password?' link.");
    });

    it("Logging in with an invalid email", async () => {
        await $('//span[text()="Log In/Register"]').click();
        await browser.pause(1000);

        const loginFrame = await $('iframe#dialog_frame');
        await loginFrame.waitForExist();
        await browser.switchToFrame(loginFrame);

        const emailInputField = await $('input#login_email');
        await emailInputField.click();
        await emailInputField.setValue('testnodejs55555@gmail');

        const passwordInputField = await $('input#login_password');
        await passwordInputField.click();
        await passwordInputField.setValue('55555');

        const logInButton = await $('input#btn_login');
        await logInButton.click();
        await browser.pause(1000);
        
        const errorMessage = await $('div#ajax-error');
        expect (await errorMessage.getText()).toEqual("E-mail address not found, or password incorrect.\nTo reset your password, please use the 'Forgotten password?' link.");
    });

    it("Registering with an empty email field", async () => {
        await $('//span[text()="Log In/Register"]').click();
        await browser.pause(1000);

        const loginFrame = await $('iframe#dialog_frame');
        await loginFrame.waitForExist();
        await browser.switchToFrame(loginFrame);

        const registerButton = await $('input#btn_register');
        await registerButton.click();
        await browser.pause(1000);

        const passwordInputField = await $('input[name="password"]');
        await passwordInputField.click();
        await passwordInputField.setValue('55555');
        
        const repeatPasswordInputField = await $('input[name="password_again"]');
        await repeatPasswordInputField.click();
        await repeatPasswordInputField.setValue('55555');

        const nickNameInputField = await $('input#register_nickname');
        await nickNameInputField.click();
        await nickNameInputField.setValue('Test');

        await registerButton.click();
        await browser.pause(1000);

        const errorMessage = await $('div#ajax-error');
        expect (await errorMessage.getText()).toEqual("Please enter a valid\ne-mail address.");
    });*/

   /*it("Verify the cart functionality for a guest user", async () => {
        const searchField = await $('input#query-main');
        await searchField.click();
        await searchField.setValue('The Beatles Vinyl');
        await browser.pause(5000)
        const searchButton = await $('button#search-submit');
        await searchButton.waitForClickable();
        await searchButton.click();
        await browser.pause(5000);

        const addToCartButton = await $('//div[@class = "product-list"]/div[1]//button[@class="btn btn-success"]');
        await addToCartButton.waitForClickable();
        await addToCartButton.click();

        const viewCart = await $('//div[@id="cart-slider-content"]//a[@href="/cart/"]');
        await viewCart.waitForClickable();
        await viewCart.click();

        const updateQuantity = await $('//div[contains(text(), "Qty")]/following-sibling::input');
        await updateQuantity.waitForClickable();
        await updateQuantity.click();
        await updateQuantity.setValue(2);

        const RecalculateButton = await $('//input[@name="recalculate"]');
        await RecalculateButton.waitForClickable();
        await RecalculateButton.click();

        await browser.pause(10000)

        const unitPrice = await $('//div[@class="col-8 col-md-4 col-lg-3 col-lg-2p5"]//div[contains(text(), "£")][1]');
        const unitPriceNumber = Number((await unitPrice.getText()).slice(1));

        const Subtotal = await $('//div[@class="col-8 col-md-4 col-lg-3 col-lg-2p5"]//div[contains(text(), "£")][2]');
        const SubtotalNumber = Number((await Subtotal.getText()).slice(1));

        expect(await unitPriceNumber * 2).toEqual(SubtotalNumber);

        await updateQuantity.click();
        await updateQuantity.setValue(0);
        await RecalculateButton.click();

        const emptyCartMessage = await $('//div[@class="cart_empty"]');
        expect (await emptyCartMessage.getText()).toEqual("Your cart is empty");

        await browser.pause(5000)
    });*/
});