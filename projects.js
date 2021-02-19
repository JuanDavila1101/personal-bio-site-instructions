console.log("Bio Project 1");

const projects = [
  {
    title: "Product Cards",
    screenshot:
      "https://user-images.githubusercontent.com/76821980/106393246-a7ca0180-63bb-11eb-8c3a-f7c5019a8f6f.png",
    description:
      "This project description, practice a grid of cards for a company's products.", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, no JavaScript, Version Control with Github",
    available: true,
    url: "https://juan-product-cards.netlify.app/", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",
  },
  {
    title: "Sorting Hat",
    screenshot:
      "https://user-images.githubusercontent.com/76821980/108560490-6a71d900-72c2-11eb-9d5b-ea0d27b56a89.png",
    description:
      "This project description, Harry Potter Sorting Hat application inputs a name and allows you to randomly assign a house to the given name. You may also Sort and the names and expel students to be assigned to Voldemort's army", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, JavaScript, Version Control with Github",
    available: true,
    url: "https://juan-sorting-hat.netlify.app/", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/JuanDavila1101/sorting-hatx",
  },
  {
    title: "Pet Adoption",
    screenshot:
      "https://user-images.githubusercontent.com/76821980/108561445-e587bf00-72c3-11eb-9bc0-ea0e717ab171.png",
    description:
      "This project description, displaying cards of animals, able to sort the cards of animals by cats, dogs, dinos", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed:
      "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://juan-pet-adoption.netlify.app/", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/JuanDavila1101/pet-adoption",
  },
];

// Print output to DOM = Document Object Model
// divID = targeted ID to print to
// textToPrint = the text we want to output to the specified ID
const PrintToDom = (divID, textToPrint) => {
  const selectedDiv = document.querySelector(divID);
  selectedDiv.innerHTML = textToPrint;
};

const createProjectCards = (projArray) => {
  let domString = "";

  projArray.forEach((item, i) => {
    domString += `<div class="card my-2  " style="width: 16rem;" id=${i}>
                        <p class="card-text">${item.title}</p>
                        <div class="img-container" style="background-image: url('${
                          item.screenshot
                        }');"></div>
                        <div class="card-body">                     
                          <p class="card-text">${item.description}</p>
                          <p class="card-text">${item.technologiesUsed}</p>
                          <p class="card-text">The products cards project, ${
                            item.available ? "is available" : "is not available"
                          }</p>
                          <P><a class="card-text" href="${
                            item.url
                          }" target="_blank">link to: ${item.title}</a></p>
                          <p><a class="card-text" href="${
                            item.githubUrl
                          }" target="_blank">GitHub link to: ${
      item.title
    }</a></p>
                        </div>
                      </div>`;
  });
  PrintToDom("#projectsPage", domString);
};

const init = () => {
  createProjectCards(projects);
};

init();

// END
