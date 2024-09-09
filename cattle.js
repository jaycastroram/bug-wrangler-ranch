const { database } = require("./database.js")

const roundup = (herdSize) => {
    const cattle = []
    const types = database.cattleTypes

    for (let counter = 0; counter < herdSize; counter++) {// changed size to herdSize since we are using that parameter in our function.
        const randomType = Math.floor(Math.random() * types.length)
        const animal = types[randomType]
        cattle.push(animal)
    }

    return cattle
}

module.exports = { database, roundup}