describe('Loginaqa homework', function () {

// 1. Напиши проверку на позитивный кейс авторизации
   it('Positive auth', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('german@dolnikov.ru'); // Input valid email
        cy.get('#loginButton').should(`be.disabled`); // button enter disabled
        cy.get('#pass').type(`iLoveqastudio1`) // Input valid pass
        cy.get('#loginButton').should(`be.enabled`); // button enter disabled
        cy.get('#loginButton').click(); // push enter

        cy.get('#messageHeader').should(`be.visible`); // visible message
        cy.get('#messageHeader').contains(`Авторизация прошла успешно`); // check message
        cy.get('#exitMessageButton > .exitIcon').should(`be.visible`);
    })

// 2. Напиши автотест на проверку логики восстановления пароля
   it('Restore pass', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#forgotEmailButton').click();
        cy.get('#exitRestoreButton > .exitIcon').should(`be.visible`); 
        cy.get('#forgotForm > .header').contains(`Восстановите пароль`).should(`be.visible`); // check message
        cy.get('#mailForgot').type(`xxx@xxx.com`); // input random mail
        cy.get('#restoreEmailButton').click() // push restore button
        cy.get('#exitMessageButton > .exitIcon').should(`be.visible`);
        cy.get('#messageHeader').contains(`Успешно отправили пароль на e-mail`).should(`be.visible`); // Input valid email
    })

// 3. Напиши проверку на негативный кейс авторизации (неверный пароль)
   it('Negative pass auth', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('german@dolnikov.ru'); // Input valid email
        cy.get('#loginButton').should(`be.disabled`); // button enter disabled
        cy.get('#pass').type(`iLoveBOGDAREN`) // Input invalid pass
        cy.get('#loginButton').should(`be.enabled`); // button enter disabled
        cy.get('#loginButton').click(); // push enter

        cy.get('#messageHeader').should(`be.visible`); // visible message
        cy.get('#messageHeader').contains(`Такого логина или пароля нет`); // check message
        cy.get('#exitMessageButton > .exitIcon').should(`be.visible`);
    })

// 4. Напиши проверку на негативный кейс авторизации (неверный логин)
      it('Negative e-mail auth', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('BOGDAREN@BOGDAREN.ru'); // Input invalid email
        cy.get('#loginButton').should(`be.disabled`); // button enter disabled
        cy.get('#pass').type(`iLoveqastudio1`) // Input valid pass
        cy.get('#loginButton').should(`be.enabled`); // button enter disabled
        cy.get('#loginButton').click(); // push enter

        cy.get('#messageHeader').should(`be.visible`); // visible message
        cy.get('#messageHeader').contains(`Такого логина или пароля нет`); // check message
        cy.get('#exitMessageButton > .exitIcon').should(`be.visible`);
    })

// 5. Напиши проверку на негативный кейс валидации
      it('Negative e-mail auth(invalid)', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('BOGDARENOGDAREN.com'); // Input invalid email
        cy.get('#loginButton').should(`be.disabled`); // button enter disabled
        cy.get('#pass').type(`iLoveqastudio1`) // Input valid pass
        cy.get('#loginButton').should(`be.enabled`); // button enter disabled
        cy.get('#loginButton').click(); // push enter

        cy.get('#messageHeader').should(`be.visible`); // visible message
        cy.get('#messageHeader').contains(`Нужно исправить проблему валидации`); // check message
        cy.get('#exitMessageButton > .exitIcon').should(`be.visible`);        
    })    

// 6. Напиши проверку на приведение к строчным буквам в логине
        it('Caps check login', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Input valid email
        cy.get('#loginButton').should(`be.disabled`); // button enter disabled
        cy.get('#pass').type(`iLoveqastudio1`) // Input valid pass
        cy.get('#loginButton').should(`be.enabled`); // button enter disabled
        cy.get('#loginButton').click(); // push enter

        cy.get('#messageHeader').should(`be.visible`); // visible message
        cy.get('#messageHeader').contains(`Авторизация прошла успешно`); // check message
        cy.get('#exitMessageButton > .exitIcon').should(`be.visible`);        
    })

  })
