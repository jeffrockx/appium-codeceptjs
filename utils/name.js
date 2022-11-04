const { faker } = require('@faker-js/faker/locale/pt_BR')

const getName = () => {

    const randomName = faker.name.fullName()

    return randomName
}

exports.getName = getName