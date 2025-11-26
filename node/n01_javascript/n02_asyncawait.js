function findAndSaveUser(Users){
    Users.findOne({})
    .then((user)=>{
        user.name = 'krille'
        return user.save()
    })
    .then((user)=>{
        return Users.findOne({gender:'m'})
    })
    .catch(err=>{
        console.log(err)
    })
}

async function findAndSave(Users){
    try{
        let user = await Users.findOne({})
        user.name = 'yena'
        user = await user.save()
        user = await Users.findOne({gender: 'f'})
    }
    catch(error){
        console.log(error)
    }
}