const monk = require('monk')

const url = 'mongodb://Aly:123456@ds153577.mlab.com:53577/animals'

const db = monk(url)

const pets = db.get('Pets')



const run = async () => {
    const rocky = await pets.findOne({ name: 'Rocky'})

    if(!rocky)
    await pets.insert(
        {type: 'Turtle', breed: 'Fresh Water', name: 'Rocky', age: '15'}
    )

    const balboa = await pets.findOne({ name: 'Balboa'})
    if(!balboa)
    await pets.insert(
        {type: 'Turtle', breed: 'Fresh Water', name: 'Balboa', age: '15'}
    )

    const results = await pets.find()

    console.log(results)
}

run()