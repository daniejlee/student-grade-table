class GradeTable {
  constructor(tableElement, noGradesElement){
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }
  updateGrades(grades){
    var tbody = this.tableElement.querySelector('tbody');
    var existingRows = tbody.querySelectorAll('tr')
    var noGrades = document.querySelector('.no-grades-message')

    //show empty table text
    if(grades.length === 0){
      noGrades.classList.remove('d-none')
    }
    else if(grades.length >= 1){
      //test if adding multiple
      noGrades.classList.add('d-none')
    }

    //first delete existing rows
    for (var i = 0; i < existingRows.length; i++){
      existingRows[i].remove();
    }
    //add new rows
    for(var j = 0; j < grades.length; j++){
      var renderedRow = this.renderGradeRow(grades[j], this.deleteGrade)
      tbody.appendChild(renderedRow);
    }
  }
  onDeleteClick(deleteGrade){
    this.deleteGrade = deleteGrade;
  }
  renderGradeRow(data, deleteGrade){
    var newRow = document.createElement('tr');
    var name = document.createElement('td');
    var course = document.createElement('td');
    var grade = document.createElement('td');
    var buttonCol = document.createElement('td');
    var button = document.createElement('button');

    name.textContent = data.name;
    course.textContent = data.course;
    grade.textContent = data.grade;
    button.textContent = "DELETE";
    buttonCol.classList.add('button-column')
    button.classList.add('btn', 'btn-danger', 'btn-outline-dark', 'btn-sm')
    button.addEventListener('click', function(){
      //might need this.?
      deleteGrade(data.id);
    })
    buttonCol.appendChild(button);
    newRow.append(name, course, grade, buttonCol)

    return newRow;
  }

}
