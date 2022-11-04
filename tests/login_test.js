Feature('login')

const { I, login_page, home_page } = inject()

BeforeSuite(() => {
    console.log('BeforeSuite')
})

before(() => {
    console.log('Before')
})

Scenario('Login com sucesso', () => {

    login_page.login('teste@teste.com', '123456')

    home_page.checkLoginSuccess()
})

Scenario('Login sem sucesso', () => {

    login_page.login('teste@teste.com', '1234567')

    login_page.checkLoginError()
})
