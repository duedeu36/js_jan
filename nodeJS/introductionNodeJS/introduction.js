// or:
// function introduction(userInfo) {
//    ...
// }

module.exports.introduction = function('userInfo') {
    userInfo = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        birthYear: birthYear
    }

    console.log('Hi, my name is ' + this.firstName + ' ' + this.lastName + ' and my email is ' + this.email + 'I was born in ' + this.birthYear);
}