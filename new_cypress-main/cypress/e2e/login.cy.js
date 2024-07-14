describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
       cy.visit('https://login.qa.studio/'); // Зашли на сайт
       cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
       cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
       cy.get('#loginButton').click(); // Нажали войти
       cy.get('#messageHeader') .contains('Авторизация прошла успешно'); // Проверю что после авторизации вижу текст
       cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю

       })

       it('Восстановить пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').click(); // Нажала на кнопку забыли пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввели почту для восстановления пароля
        cy.get('#restoreEmailButton').click(); // Нажала на кнопку отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // после отправки вижу текст Авторизация успешна
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
 
        })

        it('Верный логин и неверный пароль', function () {
            cy.visit('https://login.qa.studio/'); // Зашли на сайт
            cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
            cy.get('#pass').type('iLoveqastudio1апавп'); // Ввели неверный пароль
            cy.get('#loginButton').click(); // Нажали войти
            cy.get('#messageHeader') .contains('Такого логина или пароля нет'); // Проверю что после авторизации вижу текст
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
     
            }) 

            it('Неверный логин и верный пароль', function () {
                cy.visit('https://login.qa.studio/'); // Зашли на сайт
                cy.get('#mail').type('germann@dolnikov.ru'); // Ввели неверный логин
                cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
                cy.get('#loginButton').click(); // Нажали войти
                cy.get('#messageHeader') .contains('Такого логина или пароля нет'); // Проверю что после авторизации вижу текст
                cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
         
                })

                it('Неверный логин без @ и верный пароль', function () {
                    cy.visit('https://login.qa.studio/'); // Зашли на сайт
                    cy.get('#mail').type('germandolnikov.ru'); // Ввели неверный логин
                    cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
                    cy.get('#loginButton').click(); // Нажали войти
                    cy.get('#messageHeader') .contains('Нужно исправить проблему валидации'); // Проверю что после авторизации вижу текст
                    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
             
                    })

                    it('Верный логин c заглавными буквами и верный пароль', function () {
                        cy.visit('https://login.qa.studio/'); // Зашли на сайт
                        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели верный логин
                        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
                        cy.get('#loginButton').click(); // Нажали войти
                        cy.get('#messageHeader') .contains('Такого логина или пароля нет'); // Проверю что после авторизации вижу текст
                        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
                 
                        })        

})
 


