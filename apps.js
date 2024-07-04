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

// function redirectToPage() {
//   let url = document.getElementById("select-page").value;
//   window.location.href = url;
// }

document.addEventListener('DOMContentLoaded', function() {
  const sideMenu = document.querySelector('.side-menu');
  const contentDiv = document.getElementById('content');

  sideMenu.addEventListener('click', function(e) {
    // Prevent default link behavior
    e.preventDefault();

    // Check if the clicked element is a nav-link
    if (e.target.closest('.nav-link')) {
      // Get the data-content attribute of the clicked item
      const content = e.target.closest('li').getAttribute('data-content');

      // Update the contentDiv based on the clicked item
      
  switch(content) {
      case 'Beneficiary':
          contentDiv.innerHTML = `<main>
        <div class="head-title">
          <div class="left">
            <h1>Beneficiary Analytics</h1>
            <ul class="breadcrumb">
              <li>
                <a href="#">Dashboard</a>
              </li>
              <i class="fas fa-chevron-right"></i>
              <li>
                <a href="#" class="active">Beneficiary</a>
              </li>
            </ul>
          </div>

        </div>


        <div class="table-data">
          <div class="order">
            <div class="head">
              <h3>Beneficiaries</h3>
              <i class="fas fa-search"></i>
              <i class="fas fa-filter"></i>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Beneficiary Name</th>
                  <th>Block</th>
                  <th>Hamlet(Taluka)</th>
                  <th>Cattle count</th>
                  <th>Date of Distribution</th>
                  <th>Policy Number</th>
                  <th>Policy Effetiver Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Meena Kumari</td>
                  <td>Sahakpur</td>
                  <td>taluka</td>
                  <td>5</td>
                  <td>21-3-20</td>
                  <td>131490/47/2022/1077</td>
                  <td>16-06-24</td>
                </tr>
                <tr>
                  <td>Meena Kumari</td>
                  <td>Sahakpur</td>
                  <td>taluka</td>
                  <td>5</td>
                  <td>21-3-20</td>
                  <td>131490/47/2022/1077</td>
                  <td>16-06-24</td>
                </tr>
                <tr>
                  <td>Meena Kumari</td>
                  <td>Sahakpur</td>
                  <td>taluka</td>
                  <td>5</td>
                  <td>21-3-20</td>
                  <td>131490/47/2022/1077</td>
                  <td>16-06-24</td>
                </tr>
                <tr>
                  <td>Meena Kumari</td>
                  <td>Sahakpur</td>
                  <td>taluka</td>
                  <td>5</td>
                  <td>21-3-20</td>
                  <td>131490/47/2022/1077</td>
                  <td>16-06-24</td>
                </tr>
                <tr>
                  <td>Meena Kumari</td>
                  <td>Sahakpur</td>
                  <td>taluka</td>
                  <td>5</td>
                  <td>21-3-20</td>
                  <td>131490/47/2022/1077</td>
                  <td>16-06-24</td>
                </tr>
                
              </tbody>
            </table>
          </div>

      </main>`;
          break;

      case 'Cattle': 
      contentDiv.innerHTML= `<main>
        <div class="head-title">
          <div class="left">
            <h1>Cattle Analytics</h1>
            <ul class="breadcrumb">
              <li>
                <a href="#">Dashboard</a>
              </li>
              <i class="fas fa-chevron-right"></i>
              <li>
                <a href="#" class="active">Cattle</a>
              </li>
            </ul>
          </div>

        </div>

          <div class="table-data">
            <div class="order">
              <div class="head">
                <h3>Cattle</h3>
                <i class="fas fa-search"></i>
                <i class="fas fa-filter"></i>
              </div>
  
              <table>
                <thead>
                  <tr>
                    <th>Cattle Tag No</th>
                    <th>Beneficiary Name</th>
                    <th>Breed</th>
                    <th>Gender</th>
                    <th>Pregnancy Status</th>
                    <th>Weight</th>
                    <th>Health Status</th>
                    <th>Date of Birth</th>
                    <th>Date of Mortality</th>
                    <th>Claim</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>98765</td>
                    <td>Meena Kumari</td>
                    <td>breed name</td>
                    <td>male</td>
                    <td style="text-align: center;">-</td>
                    <td>150 kg</td>
                    <td><span class="status unhealthy">poor</span></td>
                    <td style="text-align: center;">-</td>
                    <td style="text-align: center;">-</td>
                    <td><span class="status claimed">Yes</span></td>

                  </tr>
                  <tr>
                    <td>98765</td>
                    <td>Meena Kumari</td>
                    <td>breed name</td>
                    <td>female</td>
                    <td><span class="status pregnant">positive</span></td>
                    <td>150 kg</td>
                    <td><span class="status healthy">good</span></td>
                    <td>15-7-2020</td>
                    <td style="text-align: center;">-</td>
                    <td><span class="status notClaimed">No</span></td>

                  </tr>
                  <tr>
                    <td>98765</td>
                    <td>Meena Kumari</td>
                    <td>breed name</td>
                    <td>male</td>
                    <td style="text-align: center;">-</td>
                    <td>150 kg</td>
                    <td><span class="status healthy">good</span></td>
                    <td style="text-align: center;">-</td>
                    <td style="text-align: center;">-</td>
                    <td><span class="status claimed">Yes</span></td>

                  </tr>
                  <tr>
                    <td>98765</td>
                    <td>Meena Kumari</td>
                    <td>breed name</td>
                    <td>female</td>
                    <td><span class="status notPregnant">negative</span></td>
                    <td>150 kg</td>
                    <td><span class="status healthy">good</span></td>
                    <td style="text-align: center;">-</td>
                    <td style="text-align: center;">-</td>
                    <td><span class="status claimed">Yes</span></td>

                  </tr>
                  <tr>
                    <td>98765</td>
                    <td>Meena Kumari</td>
                    <td>breed name</td>
                    <td>female</td>
                    <td><span class="status pregnant">positive</span></td>
                    <td>150 kg</td>
                    <td><span class="status unhealthy">poor</span></td>
                    <td style="text-align: center;">-</td>
                    <td><span class="status notClaimed">No</span></td>

                  </tr>

                  
                </tbody>
              </table>
            </div>

        </div>
      </main>`;
          break;

      case 'Visitor Tracking':
          contentDiv.innerHTML = `<main>
        <div class="head-title">
          <div class="left">
            <h1>Visitor Tracking</h1>
            <ul class="breadcrumb">
              <li>
                <a href="#">Dashboard</a>
              </li>
              <i class="fas fa-chevron-right"></i>
              <li>
                <a href="#" class="active">Visitor Tracking</a>
              </li>
            </ul>
          </div>

        </div>


        <div class="table-data">
            <div class="order">
              <div class="head">
                <h3>Visitors Tracking</h3>
              </div>
                  <table>
                    <thead>
                      <tr>
                        <th>Visitor ID</th>
                        <th>Name</th>
                        <th>Current Location</th>
                        <th>Monthly Report</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Harshal Thakare</td>
                        <td>Khalapur</td>
                        <td>
                            <a href="./table1_villager.html"><button class="btn">View</button></a>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Ketan Bade</td>
                        <td>Karjat</td>
                        <td>
                            <a href="./table1_villager.html"><button class="btn">View</button></a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
            </div>
            </div>

          
      </main>`;
          break;
      case 'Analytics':
          contentDiv.innerHTML = `<main>
        <div class="head-title">
          <div class="left">
            <h1>Cattle Mortality Distribution Over Seasons</h1>
          </div>
        </div>

        <div class="table-data">
          <div class="order">
            <div class="head">

              <div>
                <p>
                    <img src="Figure_2.jpeg" alt="Pie Chart" style="width: 50%; height: auto;">
                </p>
            </div>
            
          </div>
          </div>
        </div>

        <br>

        <div class="head-title">
          <div class="left">
            <h1>Cattle Mortality Distribution Over Seasons</h1>
          </div>
        </div>

        <div class="table-data">
          <div class="order">
            <div class="head">

            <div>
              <p>
                  
                  <img src="Figure_1.jpeg" alt="Pie Chart" style="width: 50%; height: auto;">
              </p>
          </div>
          
        </div>
      </main>`;
          break;
      default:
          content = '<p>Welcome! Click an item from the dashboard to see the content.</p>';
  }


}
});
});