import {Staff} from "./Staff";
import {iStaff} from "./Staff";

enum Gender{
    Nam = 'Nam',
    Nu = 'Nu',
    other = 'other'
}
let staffs: Staff[] = [];
for (let i = 0; i < 4; i++) {
    let staff: iStaff = new Staff(`Thanh ${i + 1}`, `22/10/20`, 'kzxlmdtn888@gmail.com', '0918273645');
    staffs.push(staff);
}
function addStaff(name,birth,email,phone){
    let staff : iStaff = new Staff(name,birth,email,phone);
    staffs.push(staff);
}
function removeStaff(number){
    staffs.splice(number,1);
}
addStaff('Ha','10/3/2003','123@123','01223144');
removeStaff(1);
console.log(staffs);