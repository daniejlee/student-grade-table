class PageHeader {
  constructor (headerElement){
    this.headerElement = headerElement;
  }
  updateAverage(newAverage) {
    var averageGrade = this.headerElement.querySelector('#average-grade')
    averageGrade.textContent = newAverage;
  }
}
