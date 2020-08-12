//api key: rjLuY0OC
class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this)
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this)
    this.createGrade = this.createGrade.bind(this)
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this)
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this)
    this.deleteGrade = this.deleteGrade.bind(this)
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this)
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this)
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
  }

  handleGetGradesSuccess(grades){
    this.gradeTable.updateGrades(grades)
    var gradesSum = 0;
    for (var i = 0; i < grades.length; i++){
      gradesSum += grades[i].grade;
    }
    var average = gradesSum / grades.length;
    //call updateAverage() on pageHeader
    this.pageHeader.updateAverage(average);
  }
  handleGetGradesError(error){
    console.error(error);
  }
  getGrades(){
    $.ajax({
      method: "GET",
      url: "https://sgt.lfzprototypes.com/api/grades",
      headers: { "X-Access-Token": "rjLuY0OC" },
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
    })
  }
  start(){
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade)
  }

  //Add new grades
  createGrade(name, course, grade){
    //console.log(name, course, grade);
    $.ajax({
      method: "POST",
      url: "https://sgt.lfzprototypes.com/api/grades",
      headers: { "X-Access-Token": "rjLuY0OC" },
      data: {name, course, grade},
      success: this.handleCreateGradeSuccess,
      error: this.handleCreateGradeError
    })
  }
  handleCreateGradeError(error){
    console.error(error)
  }
  handleCreateGradeSuccess(){
    this.getGrades()
  }

  //Delete grades
  deleteGrade(id){
    console.log(id)
  }
  handleDeleteGradeError(error){
    console.error(error)
  }
  handleDeleteGradeSuccess(){
    this.getGrades()
  }
}
