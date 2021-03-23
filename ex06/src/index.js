function firstName (firstName) {
    return String.toUpperCase()
}
function lastName (lastName) {
    return String.toLowerCase()
}
console.log(firstName, lastName)
exports.firstName=firstName;
exports.lastName=lastName;
module.exports = {firstName, lastName};