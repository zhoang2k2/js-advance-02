function checkEmail(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            email === 'nvhoang2012002@gmail.com'
                ? reject('This Email is Exists!!')
                : resolve(email)
        }, 1000)
    })
}

function checkUsername(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            username === 'hoang'
                ? reject('This Username is Exists!!')
                : resolve(username)
        }, 1000)
    })
}

function createEmail() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Create Account success!!')
        }, 1000)
    })
}

// checkEmail('nvhoang2012002@gmail.com')
//     .then(() => checkUsername('hoang1'))
//     .then(() => createEmail())
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

checkEmail(email)
    .then(() => checkUsername(username))
    .then(() => createEmail())
    .then(res => console.log(res))
    .catch(err => console.log(err))