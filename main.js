var studentTable = document.querySelector('#student-table')
var headerElement = document.querySelector('header')
let gradeTable = new GradeTable(studentTable);
let pageHeader = new PageHeader(headerElement);
let app = new App(gradeTable, pageHeader);
app.start();
