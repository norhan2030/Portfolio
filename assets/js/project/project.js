let projectDom = document.querySelector(".portfolio-container");
let Projects = prjectsDB;


let myprojects = Projects;
  
  
let projectItme = myprojects.map((itme) => {
  return `
  <div class="col-lg-4 col-md-6 portfolio-item 
  ${
    itme.filter=='angular'?'filter-angular'
    :itme.filter=='vue'?'filter-vue'
    :itme.filter=='laravel'?'filter-laravel'
    :'filter-others'
  }
      ">
      <div class="portfolio-wrap">
        <img src="assets/img/projects/${itme.img}" class="img-fluid" alt="">
        <div class="portfolio-info">
          <h4>${itme.name}</h4>
          <p>${itme.filter}</p>


          <div class="portfolio-links">

            <a href="assets/img/projects/${itme.img}" data-gallery="portfolioGallery"
              class="portfolio-lightbox" title="${itme.name}"><i class="bx bx-plus">
              </i>
            </a>

            <a href="portfolio-details.html" 
              onclick="saveProject_id(${itme.id})"
              title="Portfolio Details">

              <i class="bx bx-link">      </i>
            </a>
          </div>
        </div>
      </div>
    </div>
`;
});
projectDom.innerHTML = projectItme.join("");

let saveProject_id = (id) => {
  localStorage.setItem('Progect_id',id) ? 'done' : '000000';
  
  
}





