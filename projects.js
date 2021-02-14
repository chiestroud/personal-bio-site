const projects = [
  {
    title: "Product Cards", 
    screenshot: "/images/productcard.png", 
    description: "My very first project in NSS. Static website only using HTML and CSS. Used flexbox to display cards", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS",
    available: true,
    url: "https://cs-product-cards.netlify.app/", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/chiestroud/product-cards",
  },
  {
    title: "Pet Adoption", 
    screenshot: "/images/petadoption.png", 
    description: "My second project in NSS. Dynamically created list of available pet cards using JavaScript.",
    technologiesUsed: "HTML, CSS, Vanilla JavaScript",
    available: true,
    url: "https://cs-pet-adoption.netlify.app", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/chiestroud/pet-adoption",
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
