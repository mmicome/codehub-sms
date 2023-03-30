import {mysql} from '@config/index'

mysql.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))

export default mysql;