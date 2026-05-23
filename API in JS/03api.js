const data = {
    result:[
        {
            gender: "male",
            name: {
                title: 'Mr',
                first: 'prince',
                last: 'sharma'
            },
            email: 'princedev09@gmail.com',
            picture: {
                large: 'photo',
                medium: 'photos'
            }
        }
    ]
}

console.log(data.result[0].picture.large);
