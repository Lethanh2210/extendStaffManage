"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Staff_1 = require("./Staff");
var Gender;
(function (Gender) {
    Gender["Nam"] = "Nam";
    Gender["Nu"] = "Nu";
    Gender["other"] = "other";
})(Gender || (Gender = {}));
var staffs = [];
for (var i = 0; i < 4; i++) {
    var staff = new Staff_1.Staff("Thanh ".concat(i + 1), "22/10/20", 'kzxlmdtn888@gmail.com', '0918273645');
    staffs.push(staff);
}
function addStaff(name, birth, email, phone) {
    var staff = new Staff_1.Staff(name, birth, email, phone);
    staffs.push(staff);
}
function removeStaff(number) {
    staffs.splice(number, 1);
}
addStaff('Ha', '10/3/2003', '123@123', '01223144');
removeStaff(1);
console.log(staffs);
