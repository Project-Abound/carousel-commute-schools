// import a function that queries the database
const getPictures = require('../db/dbQueries.js').getPictures
const handlers = {
    handleGet: (req, res) => {
        getPictures(function (fakeHouse, fakeUrls) {
            // change this stuff to send all the fakeUrls 
            let obj = {}
            obj.fakeHouse = fakeHouse
            obj.fakeUrls = fakeUrls
           res.send(obj) 
        })
        
    }
}
module.exports = handlers