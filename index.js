const subjectFields = document.querySelectorAll('.subjectScore')
fetch('/data.json').then(res => res.json()).then(res => {
  let sumOfScores = 0;
  for(let i = 0; i < res.length; i++) {
    const currentObject = res[i];
    sumOfScores += currentObject['score'];
    subjectFields[i].querySelector('img').src = currentObject['icon'];
    subjectFields[i].querySelector('.scoreObtainedPerSubject').innerHTML = currentObject['score'];
    subjectFields[i].querySelector('.scoreTitle').innerHTML = currentObject['category'];
  }
  document.querySelector('#scoreObtained').innerHTML = Math.floor(sumOfScores/4);
});
