import {mongodb} from '@config/index'

mongodb.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))

export default mongodb;