console.log('Bio Project 1')

const projects = [{
        title: "Product Cards",
        screenshot: "https://user-images.githubusercontent.com/76821980/106393246-a7ca0180-63bb-11eb-8c3a-f7c5019a8f6f.png",
        description: "This project description, practice a grid of cards for a company's products.", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://juan-product-cards.netlify.app/", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    }
    // {
    //     title: "Cool Project",
    //     screenshot: "http://gotoflashgames.com/files/file/033.jpg",
    //     description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    //     technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    //     available: true,
    //     url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    //     githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    // }

];

// Print output to DOM = Document Object Model
// divID = targeted ID to print to 
// textToPrint = the text we want to output to the specified ID
const PrintToDom = (divID, textToPrint) => {
    const selectedDiv = document.querySelector(divID);
    selectedDiv.innerHTML = textToPrint;
}

const createProjectCards = (projArray) => {
    let domString = '';

    projArray.forEach((item, i) => {
        // if (!(item.available)) { continue; }
        domString += `<div class="card my-2" style="width: 18rem;" id=${i}>
                        <p class="card-text">${item.title}</p>
                        <div class="img-container" style="background-image: url('${item.screenshot}');"></div>
                        <div class="card-body">                     
                          <p class="card-text">${item.description}</p>
                          <p class="card-text">${item.technologiesUsed}</p>
                          <p class="card-text">The products cards project, ${item.available? 'is available': 'is not available'}</p>
                          <P><a class="card-text" href="${item.url}" target="_blank">link to: ${item.title}</a></p>
                          <p><a class="card-text" href="${item.githubUrl}" target="_blank">GitHub link to: ${item.title}</a></p>
                        </div>
                      </div>`;
    })
    PrintToDom('#projectsPage', domString);
}

const init = () => {
    createProjectCards(projects);
}

init();


// END