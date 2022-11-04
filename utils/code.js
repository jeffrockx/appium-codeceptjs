const { faker } = require('@faker-js/faker/locale/pt_BR')

const getCode = () => {

    const randomNumber = faker.datatype.number(9999)

    return randomNumber
}

exports.getCode = getCode