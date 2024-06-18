db.createCollection('nonfiction',{
    validator:{
        $jsonSchema:{
            required:['name','price'],
            properties:{
                name:{
                    description:'must be a string req',
                    bsonType:'string'

                },
                price:{
                    description:'must be a number req',
                    bsonType:'number'
                }
            }
        }
    },
    validationAction:'warn'
})