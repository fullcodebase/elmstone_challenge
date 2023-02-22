//const app = require('../../build/app')
//const request = require( 'supertest')

const readData = require('../build/helpers/readData')
const { getSortedBirdsData } = readData;

describe("birds_test", function () {

    test("xyz", function () {
        expect(2+2).toBe(4)
    })

    test("Birds data sorted", async ()=>{
        const data = await getSortedBirdsData();
        expect(data.length).toBeGreaterThan(0)

    })

    //test("Route response", async () => {
    //    const response = await request(app).get('/birds')
        //expect(response.status).toBe(200)
        //expect(response.body)
    //})
})