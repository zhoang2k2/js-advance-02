function checkEmail(email, callback) {
    setTimeout(() => callback(email), 1000);
}

function checkUsername(username, callback) {
    setTimeout(() => callback(username), 1000);
}

function createAccount() {
    setTimeout(() => {
        console.log('Create Account success!!');
    }, 1000);
}

checkEmail('nvhoang20120021@gmail.com', (email) => {
    if (email === 'nvhoang2012002@gmail.com') {
        throw new Error('This Email is Exists!!');
    } else {
        checkUsername('hoang1', (username) => {
            if (username === 'hoang') {
                throw new Error('This Username is Exists!!');
            } else {
                createAccount()
            }
        })
    }
})