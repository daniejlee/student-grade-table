var studentTable = document.querySelector('#student-table')
var headerElement = document.querySelector('header')
var formElement = document.querySelector('form')
var noGrades = document.querySelector('.no-grades-message')
let gradeTable = new GradeTable(studentTable, noGrades);
let pageHeader = new PageHeader(headerElement);
let gradeForm = new GradeForm(formElement)
let app = new App(gradeTable, pageHeader, gradeForm);
app.start();
