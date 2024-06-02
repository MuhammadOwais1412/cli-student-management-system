#! /usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
// Define the Student class
var Student = /** @class */ (function () {
    function Student(name) {
        this.id = Student.counter++;
        this.name = name;
        this.courses = [];
        this.balance = 8000;
    }
    ;
    // Method to enrolled a student in a course
    Student.prototype.enroll_course = function (course) {
        this.courses.push(course);
    };
    ;
    // Method to view a student balance
    Student.prototype.view_balance = function () {
        console.log("Balnce of '".concat(chalk_1.default.bold.rgb(167, 94, 253)(this.name), "': 'Rs.").concat(chalk_1.default.bold.rgb(255, 131, 51)(this.balance), "'"));
    };
    ;
    // Method to pay student fees
    Student.prototype.pay_fees = function (amount) {
        if (amount > this.balance) {
            console.log("-".repeat(70));
            console.log(chalk_1.default.red("Amount you entered exceeds your current balance. Please review your balance and try again with a smaller amount."));
            console.log("-".repeat(70));
        }
        else {
            this.balance -= amount;
            console.log("-".repeat(70));
            console.log("'Rs.".concat(chalk_1.default.bold.rgb(255, 131, 51)(amount), "' paid successfully for '").concat(chalk_1.default.bold.rgb(167, 94, 253)(this.name), "'"));
            console.log("Remaining Balance: 'Rs.".concat(chalk_1.default.bold.rgb(255, 131, 51)(this.balance), "'"));
            console.log("-".repeat(70));
        }
        ;
    };
    ;
    // Method to Display student status
    Student.prototype.show_status = function () {
        console.log("-".repeat(70));
        console.log("Name: ".concat(chalk_1.default.bold.rgb(167, 94, 253)(this.name)));
        console.log("ID: ".concat(chalk_1.default.bold.rgb(118, 254, 78)(this.id)));
        console.log("Courses: ".concat(chalk_1.default.bold.rgb(255, 131, 51)(this.courses)));
        console.log("balance: ".concat(chalk_1.default.bold.rgb(255, 131, 51)(this.balance)));
        console.log("-".repeat(70));
    };
    ;
    Student.counter = 10000;
    return Student;
}());
;
// Defining a student_manager class to manage students
var Student_manager = /** @class */ (function () {
    function Student_manager() {
        this.students = [];
    }
    ;
    // Method to add a new student
    Student_manager.prototype.add_student = function (name) {
        var student = new Student(name);
        this.students.push(student);
        console.log("-".repeat(70));
        console.log("'".concat(chalk_1.default.bold.rgb(167, 94, 253)(name), "' added Successfully, Student ID: ").concat(chalk_1.default.bold.rgb(118, 254, 78)(student.id)));
        console.log("-".repeat(70));
    };
    ;
    // Method to find a student by student id
    Student_manager.prototype.find_student = function (student_id) {
        return this.students.find(function (std) { return std.id === student_id; });
    };
    // Method to enroll a  particular student in a course
    Student_manager.prototype.enroll_student = function (student_id, course) {
        var student = this.find_student(student_id);
        if (student) {
            student.enroll_course(course);
            console.log("-".repeat(70));
            console.log("'".concat(chalk_1.default.bold.rgb(167, 94, 253)(student.name), "' enrolled in '").concat(chalk_1.default.bold.rgb(255, 131, 51)(course), "' Successfully!"));
            console.log("-".repeat(70));
        }
        else {
            console.log("-".repeat(70));
            console.log(chalk_1.default.red("Student not found, Please enter a valid Student ID."));
            console.log("-".repeat(70));
        }
    };
    ;
    // Method to view a particular student balance
    Student_manager.prototype.view_student_balance = function (student_id) {
        var student = this.find_student(student_id);
        if (student) {
            console.log("-".repeat(70));
            student.view_balance();
            console.log("-".repeat(70));
        }
        else {
            console.log("-".repeat(70));
            console.log(chalk_1.default.red("Student not found, Please enter a valid Student ID."));
            console.log("-".repeat(70));
        }
    };
    ;
    // Method to pay a particular student fees
    Student_manager.prototype.pay_student_fees = function (student_id, amount) {
        var student = this.find_student(student_id);
        if (student) {
            student.pay_fees(amount);
        }
        else {
            console.log("-".repeat(70));
            console.log(chalk_1.default.red("Student not found, Please enter a valid Student ID."));
            console.log("-".repeat(70));
        }
    };
    ;
    // Method to display a particular student status
    Student_manager.prototype.show_student_status = function (student_id) {
        var student = this.find_student(student_id);
        if (student) {
            student.show_status();
        }
        else {
            console.log("-".repeat(70));
            console.log(chalk_1.default.red("Student not found, Please enter a valid Student ID."));
            console.log("-".repeat(70));
        }
    };
    ;
    return Student_manager;
}());
;
// Method to run the Project
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var student_manager, choices, _a, name_input, course_input, balance_input, fees_input, status_input;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log(chalk_1.default.bold.rgb(167, 94, 253)("\n\tWelcome to 'Code With Owais' - Student Mangement System"));
                    console.log("-".repeat(70));
                    student_manager = new Student_manager();
                    _b.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 15];
                    return [4 /*yield*/, inquirer_1.default.prompt([
                            {
                                name: "choice",
                                type: "list",
                                message: chalk_1.default.rgb(239, 217, 58)("Select an option"),
                                choices: [
                                    "Add Student",
                                    "Enroll Student",
                                    "View Student Balance",
                                    "Pay Fees",
                                    "Show Student Status",
                                    "Exit"
                                ]
                            }
                        ])];
                case 2:
                    choices = _b.sent();
                    _a = choices.choice;
                    switch (_a) {
                        case "Add Student": return [3 /*break*/, 3];
                        case "Enroll Student": return [3 /*break*/, 5];
                        case "View Student Balance": return [3 /*break*/, 7];
                        case "Pay Fees": return [3 /*break*/, 9];
                        case "Show Student Status": return [3 /*break*/, 11];
                        case "Exit": return [3 /*break*/, 13];
                    }
                    return [3 /*break*/, 14];
                case 3: return [4 /*yield*/, inquirer_1.default.prompt([
                        {
                            name: "name",
                            type: "input",
                            message: "Enter a Student Name:"
                        }
                    ])];
                case 4:
                    name_input = _b.sent();
                    student_manager.add_student(name_input.name);
                    return [3 /*break*/, 14];
                case 5: return [4 /*yield*/, inquirer_1.default.prompt([
                        {
                            name: "student_id",
                            type: "number",
                            message: "Enter a Student ID:"
                        },
                        {
                            name: "course",
                            type: "input",
                            message: "Enter a Course Name:"
                        }
                    ])];
                case 6:
                    course_input = _b.sent();
                    student_manager.enroll_student(course_input.student_id, course_input.course);
                    return [3 /*break*/, 14];
                case 7: return [4 /*yield*/, inquirer_1.default.prompt([
                        {
                            name: "student_id",
                            type: "number",
                            message: "Enter a Student ID:"
                        }
                    ])];
                case 8:
                    balance_input = _b.sent();
                    student_manager.view_student_balance(balance_input.student_id);
                    return [3 /*break*/, 14];
                case 9: return [4 /*yield*/, inquirer_1.default.prompt([
                        {
                            name: "student_id",
                            type: "number",
                            message: "Enter a Student ID:"
                        },
                        {
                            name: "amount",
                            type: "number",
                            message: "Enter the Amount to Pay:"
                        }
                    ])];
                case 10:
                    fees_input = _b.sent();
                    student_manager.pay_student_fees(fees_input.student_id, fees_input.amount);
                    return [3 /*break*/, 14];
                case 11: return [4 /*yield*/, inquirer_1.default.prompt([
                        {
                            name: "student_id",
                            type: "number",
                            message: "Enter a Student ID:"
                        }
                    ])];
                case 12:
                    status_input = _b.sent();
                    student_manager.show_student_status(status_input.student_id);
                    return [3 /*break*/, 14];
                case 13:
                    console.log(chalk_1.default.bold.red("Exiting..."));
                    process.exit();
                    _b.label = 14;
                case 14: return [3 /*break*/, 1];
                case 15:
                    ;
                    return [2 /*return*/];
            }
        });
    });
}
;
// Calling a main function
main();
