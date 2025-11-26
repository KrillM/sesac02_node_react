const condition = true;

const promise = new Promise((resolve, reject) => {
    if(condition) {
        resolve('Success')
    }
    else {
        reject('Fail')
    }
})

promise
.then((message)=>{
    console.log(message)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log('무조건')
})

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