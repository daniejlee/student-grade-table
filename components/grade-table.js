class GradeTable {
  constructor(tableElement){
    this.tableElement = tableElement;
  }
  updateGrades(grades){
    var tbody = this.tableElement.querySelector('tbody');
    var existingRows = tbody.querySelectorAll('tr')
    for (var i = 0; i < existingRows.length; i++){
      existingRows[i].remove();
    }
    for(var j = 0; j < grades.length; j++){
      var newRow = document.createElement('tr');
      var name = document.createElement('td');
      var course = document.createElement('td');
      var grade = document.createElement('td');

      name.textContent = grades[j].name;
      course.textContent = grades[j].course;
      grade.textContent = grades[j].grade;
      newRow.append(name, course, grade)
      tbody.appendChild(newRow);
    }
  }
}
