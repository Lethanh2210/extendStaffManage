"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Staff = void 0;
var Gender;
(function (Gender) {
    Gender["Nam"] = "Nam";
    Gender["Nu"] = "Nu";
    Gender["other"] = "other";
})(Gender || (Gender = {}));
var Staff = /** @class */ (function () {
    function Staff(name, birth, email, phone) {
        this.name = name;
        this.birth = birth;
        this.email = email;
        this.phone = phone;
        this.gender = Gender.other;
    }
    return Staff;
}());
exports.Staff = Staff;
