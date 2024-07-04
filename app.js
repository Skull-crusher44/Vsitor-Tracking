/* Created by Tivotal */

let sideMenu = document.querySelectorAll(".nav-link");
sideMenu.forEach((item) => {
  let li = item.parentElement;

  item.addEventListener("click", () => {
    sideMenu.forEach((link) => {
      link.parentElement.classList.remove("active");
    });
    li.classList.add("active");
  });
});

let menuBar = document.querySelector(".menu-btn");
let sideBar = document.querySelector(".sidebar");
menuBar.addEventListener("click", () => {
  sideBar.classList.toggle("hide");
});

let switchMode = document.getElementById("switch-mode");
switchMode.addEventListener("change", (e) => {
  if (e.target.checked) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
});

let searchFrom = document.querySelector(".content nav form");
let searchBtn = document.querySelector(".search-btn");
let searchIcon = document.querySelector(".search-icon");
searchBtn.addEventListener("click", (e) => {
  if (window.innerWidth < 576) {
    e.preventDefault();
    searchFrom.classList.toggle("show");
    if (searchFrom.classList.contains("show")) {
      searchIcon.classList.replace("fa-search", "fa-times");
    } else {
      searchIcon.classList.replace("fa-times", "fa-search");
    }
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 576) {
    searchIcon.classList.replace("fa-times", "fa-search");
    searchFrom.classList.remove("show");
  }
  if (window.innerWidth < 768) {
    sideBar.classList.add("hide");
  }
});

if (window.innerWidth < 768) {
  sideBar.classList.add("hide");
}

document.getElementById('updateExisting').addEventListener('click', function() {
  const button = this;
  const isUpdating = button.innerText === 'Update Existing Cattle Information';

  if (isUpdating) {
    button.innerText = 'Save Changes';
    enableEditing(true);
  } else {
    button.innerText = 'Update Existing Cattle Information';
    enableEditing(false);
    saveChanges();
  }
});

function enableEditing(enable) {
  const rows = document.querySelectorAll('#healthTable tbody tr');
  rows.forEach(row => {
    const cattleId = row.querySelector('td p').innerText;
    const inputs = row.querySelectorAll(`#vaccine-date-${cattleId}, #weight-${cattleId}, #status-${cattleId}`);
    const textarea = row.querySelector(`#symptoms-${cattleId}`);
    const statusSelect = row.querySelector(`#status-${cattleId}`);

    inputs.forEach(input => {
      input.disabled = !enable;
    });

    if (enable) {
      statusSelect.addEventListener('change', function() {
        adjustTextarea(statusSelect, textarea);
      });
    } else {
      statusSelect.removeEventListener('change', function() {
        adjustTextarea(statusSelect, textarea);
      });
    }

    // Initial setting based on current value
    adjustTextarea(statusSelect, textarea);
  });
}

function adjustTextarea(statusSelect, textarea) {
  if (statusSelect.value === 'unhealthy') {
    textarea.disabled = false;
    textarea.placeholder = 'Enter symptoms here...';
  } else if (statusSelect.value === 'vaccine-due') {
    textarea.disabled = true;
    textarea.placeholder = 'SOS';
  } else if (statusSelect.value === 'healthy') {
    textarea.disabled = true;
    textarea.placeholder = 'NA';
  } else if (statusSelect.value === 'died') {
    textarea.disabled = false;
    textarea.placeholder = 'Enter reason of death...';
}

async function saveChanges() {
  const cattleData = [];
  const rows = document.querySelectorAll('#healthTable tbody tr');
  
  rows.forEach(row => {
    const cattleId = row.querySelector('td p').innerText;
    const vaccineDate = row.querySelector(`#vaccine-date-${cattleId}`).value;
    const weight = row.querySelector(`#weight-${cattleId}`).value;
    const statusSelect = row.querySelector(`#status-${cattleId}`);
    const status = statusSelect.value;
    const symptomsTextarea = row.querySelector(`#symptoms-${cattleId}`);

    const symptoms = symptomsTextarea.value;

    cattleData.push({
      cattleId,
      vaccineDate,
      weight,
      status,
      symptoms
    });
  });

  console.log('Saved Data:', cattleData);
  
  // Example AJAX request to save data to the server
  /* try {
    const response = await fetch('/save-cattle-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cattleData)
    });

    if (response.ok) {
      console.log('Data saved successfully!');
    } else {
      console.error('Error saving data:', response.statusText);
    }
  } catch (error) {
    console.error('Error saving data:', error);
  } */
}
}

document.addEventListener('DOMContentLoaded', function() {
  const addNewKidButton = document.getElementById('iconAdd');
  addNewKidButton.addEventListener('click', function() {
    window.location.href = 'addcattle.html';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const addNewKidButton = document.getElementById('iconAdd');
  addNewKidButton.addEventListener('click', function() {
    window.location.href = 'addcattle.html';
  });

  const cattleList = JSON.parse(localStorage.getItem('cattleList')) || [];
  const tableBody = document.querySelector('#healthTable tbody');

  cattleList.forEach(cattle => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>
        <img src="profile.png" alt="" />
        <p>${cattle.cattleId}</p>
      </td>
      <td>${cattle.parentId}</td>
      <td>${cattle.gender}</td>
      <td>${cattle.age}</td>
      <td>${cattle.dateOfVisit}</td>
      <td><input type="text" value="${cattle.vaccinationDate}" disabled /></td>
      <td><input type="text" value="${cattle.weight}" disabled /></td>
      <td>
        <select disabled>
          <option value="healthy" ${cattle.status === 'healthy' ? 'selected' : ''}>Healthy</option>
          <option value="unhealthy" ${cattle.status === 'unhealthy' ? 'selected' : ''}>Unhealthy</option>
          <option value="vaccine-due" ${cattle.status === 'vaccine-due' ? 'selected' : ''}>Vaccine Due</option>
          <option value="died" ${cattle.status === 'died' ? 'selected' : ''}>Died</option>
        </select>
      </td>
      <td>
        <textarea rows="2" cols="20" disabled>${cattle.symptoms}</textarea>
      </td>
    `;

    tableBody.appendChild(row);
  });
});

