async function checkEmail(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            email === 'nvhoang2012002@gmail.com'
                ? reject('This Email is Exists!!')
                : resolve(email)
        }, 1000)
    })
}

async function checkUsername(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            username === 'hoang'
                ? reject('This Username is Exists!!')
                : resolve(username)
        }, 1000)
    })
}

async function createEmail(email, username) {
    try {
        await checkEmail(email);
        await checkUsername(username);
        console.log('Create Account success!!');
    }
    catch (error) {
        console.log(error);
    }
}

createEmail('nvhoang2012002@gmail.com', 'hoang')