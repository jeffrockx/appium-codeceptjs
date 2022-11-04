Feature('Students')

const { I, login_page, home_page } = inject()
const code = require('../utils/code')
const name = require('../utils/name')

Scenario('Adiciona estudante com sucesso', () => {

    const studentCode = code.getCode()
    const studentName = name.getName()

    login_page.login('teste@teste.com', '123456')
    home_page.registerStudent(studentCode, studentName)
    home_page.searchStudent(studentName, studentCode)
})
