//api key: rjLuY0OC
class App {
  constructor(gradeTable) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this)
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this)
    this.gradeTable = gradeTable;
  }

  handleGetGradesSuccess(grades){
    this.gradeTable.updateGrades(grades)
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
  }
}
