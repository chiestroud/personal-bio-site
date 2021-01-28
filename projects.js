console.log('hello');


const projects = [
  {
    title: "First Project", 
    screenshot: "https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1533744211358-AZS6ELB5CDPENIMPW59Q/ke17ZwdGBToddI8pDm48kA5R7UCsCDh8b0xCO4C-FUd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UUlZcYBkQbTTawFOt73S-3ihoUcSGvcdZrOAtnvQ9cVB_W3y_yy4MVWH39a9Q36QsA/Beats%2BElectronics_Solo3%2BHeadphones.jpg", 
    description: "This is the first project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, JavaScript",
    available: true,
    url: "https://cs-product-cards.netlify.app/", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/chiestroud/product-cards",
  },
  {
    title: "Cool Project", 
    screenshot: "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: false,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",
  },
  {
    title: "Cool Project", 
    screenshot: "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",
  }

]

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
}

const createProjectCards = (taco) => {
  let domString = '';
  taco.forEach((item, i) => {
    if (item.available === true) {
      domString += `<div class="row">
                      <div class="col-lg-12 d-flex justify-content-center">
                        <div class="card m-5" style="width: 36rem;" id=${i}>
                          <img src="${item.screenshot}" class="card-img-top" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">${item.title}</h5>
                            <p class="card-text">${item.description}</p>
                            <p class="card-text">${item.technologiesUsed}</p>
                          </div>
                          <div class="card-body">
                            <a href="${item.url}" class="card-link">URL</a>
                            <a href="${item.githubUrl}" class="card-link">GitHubURL</a>
                          </div>
                        </div>
                      </div>
                    </div>`;
    }
  })
  printToDom('#projectsPage', domString);
}

const init = () => {
  createProjectCards(projects);
}

init();
