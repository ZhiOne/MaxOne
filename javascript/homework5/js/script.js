
function createNewUser() {
    const firstName = prompt('Enter your name', 'Max');
    const lastName = prompt('Enter your surname', 'Yevtushenko');
    const birthday =  prompt('Enter your date of birth','23.02.1994');
    const password = prompt('Enter your password','abcd1234');
    const dateToday = (new Date()).getFullYear();
    const birthdayYear = birthday.split('.');
    const user = {
        firstName,
        lastName,
        getAge (){
            return `${dateToday - Number(birthdayYear[2])}`;
        },
        getPassword (){
            return `${this.firstName[0].toUpperCase() + lastName.toLowerCase() + Number(birthdayYear[2])}`;

        }
    };
    user.getLogin = function() {
        return (this.firstName[0] + this.lastName).toLowerCase();
    };
    return user;

}


const user = createNewUser();
console.log(user.getAge());
console.log(user.getPassword());



