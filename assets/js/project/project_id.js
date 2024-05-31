let project_id = localStorage.getItem('Progect_id');

let Project = myprojects.find((i) => i.id == project_id);

let portfolio_title = document.querySelector(".portfolio-title");

portfolio_title.innerHTML = Project.name;

let portfolio_info = document.querySelector(".portfolio-info");

let info =`

  <h3>Project information</h3>
            <ul>
              <li><strong>Category</strong>: ${Project.filter}</li>
              <li><strong>Project URL </strong>:
              ${Project.video ? `<button  class=" " data-bs-toggle="modal" href="#exampleModalToggle" role="button">Live</button>`
                : `<a href=" ${ Project.live }" target="_blank" rel="noopener noreferrer" >  live Demo</a>
              `}
              
              </li>
              <li><strong>Project Code Link </strong>: <a href="${Project.gith}" target="_blank" rel="noopener noreferrer" >  Code</a></li>
            </ul>
            <p> ${Project.desc}" </p>
      `

portfolio_info.innerHTML = info;

document.querySelector(".modal-title").innerHTML=Project.name;
let source =document.querySelector(".modal-body video").innerHTML =`<source src="assets/img/vidoes/${Project.video}.mp4" type="video/mp4">`;


let swiperWrapper = document.querySelector(".swiper-wrapper");
  
let projectItmes = Project.imgs.map((itme) => {
return `
  <div class="swiper-slide  img">
    <img src="assets/img/projects/${itme}" alt="">
  </div>
`;
});
swiperWrapper.innerHTML = projectItmes.join("");




let Tools = document.querySelector(".interests .row");

let tool = Project.tools.map(tool => {
  return  `
                  <div class="col-lg-3 col-md-4">
                    <div class="icon-box">
                      <i class="ri-gradienter-line" style="color: #ffa76e;"></i>
                      <h3>${tool}</h3>
                    </div>
                  </div>
                  `
  
})
Tools.innerHTML=tool.join('')






