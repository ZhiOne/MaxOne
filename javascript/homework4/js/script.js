// Реализовать функцию для создания объекта "пользователь".
//
//     Технические требования:
//
//     Написать функцию createNewUser(), которая будет создавать и возвращать объект newUser.
//     При вызове функция должна спросить у вызывающего имя и фамилию.
//     Используя данные, введенные пользователем, создать объект newUser со свойствами firstName и lastName.
//     Добавить в объект newUser метод getLogin(), который будет возвращать первую букву имени пользователя, соединенную с фамилией пользователя, все в нижнем регистре (например, Ivan Kravchenko → ikravchenko).
// Создать пользователя с помощью функции createNewUser(). Вызвать у пользователя функцию getLogin(). Вывести в консоль результат выполнения функции.
//
//
//     Не обязательное задание продвинутой сложности:
//
//     Сделать так, чтобы свойства firstName и lastName нельзя было изменять напрямую. Создать функции-сеттеры setFirstName() и setLastName(), которые позволят изменить данные свойства.




function createNewUser() {
    const firstName = prompt('Enter your name', 'Max');
    const lastName = prompt('Enter your surname', 'Yevtushenko');
    const user = {
        firstName,
        lastName
    };
    user.getLogin = function() {
        return (this.firstName[0] + this.lastName).toLowerCase();
    };
    return user;
}

const user = createNewUser();

// ==============================WITH SETTERS AND GETTERS SOLITION================================== //

// function createNewUser() {
//     const firstName = prompt('Enter your name', 'Max');
//     const lastName = prompt('Enter your surname', 'Yevtushenko');
//     const user = {};
//     Object.defineProperty(user, 'firstName', {
//         enumerable: true,
//         configurable: true,
//         value: firstName,
//         get: function() {
//             return this.firstName;
//         },
//         set: function(newValue) { value = newValue; },
//     });
//     Object.defineProperty(user, 'lastName', {
//         enumerable: true,
//         configurable: true,
//         writable: false,
//         value: lastName,
//     });
//     user.getLogin = function() {
//         return (this.firstName[0] + this.lastName).toLowerCase();
//     };
//     return user;
// }
//
// const user = createNewUser();