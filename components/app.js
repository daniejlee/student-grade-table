//api key: rjLuY0OC
class App {
  constructor(gradeTable, pageHeader) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this)
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this)
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
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
  }
}
