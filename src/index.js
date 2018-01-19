const monk = require('monk')

const url = 'mongodb://Aly:123456@ds153577.mlab.com:53577/animals'

const db = monk(url)

const collection = db.get('Pets')



const run = async () => {
    const myPets = [
        { type: "turtle", breed: "fresh water", name: "Rocky", age: 15 },
        { type: "turtle", breed: "fresh water", name: "Balboa", age: 15 }
    ]
    await collection.insert(myPets)

    const results = await collection.find()

    console.log(results)

    run()

}
