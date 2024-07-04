document.getElementById('addCattleForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const newCattle = {
      cattleId: document.getElementById('cattleId').value,
      parentId: document.getElementById('parentId').value,
      gender: document.getElementById('gender').value,
      age: document.getElementById('age').value,
      dateOfVisit: document.getElementById('dateOfVisit').value,
      vaccinationDate: document.getElementById('vaccinationDate').value,
      weight: document.getElementById('weight').value,
      status: document.getElementById('status').value,
      symptoms: document.getElementById('symptoms').value
    };
  
    let cattleList = JSON.parse(localStorage.getItem('cattleList')) || [];
    cattleList.push(newCattle);
    localStorage.setItem('cattleList', JSON.stringify(cattleList));
  
    window.location.href = 'index.html';
  });
  