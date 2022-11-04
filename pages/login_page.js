const { I } = inject()

module.exports = {

  fields: {
    email: '~email',
    password: '~senha'
  },

  buttons: {
    enter: '~entrar'
  },

  messages: {
    el: '~lognFail',
    elText: 'Erro no login!'
  },

  login(email, password) {
    I.waitForElement(this.fields.email, 10)
    I.fillField(this.fields.email, email)
    I.fillField(this.fields.password, password)
    I.tap(this.buttons.enter)
  },

  checkLoginError() {
    I.waitForElement(this.messages.el, 5)
    I.see(this.messages.elText)
  }

}
