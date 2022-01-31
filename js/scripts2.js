const projects = [
  {
    id: 1,
    title: "Hand-coded HTML page",
    subtitle: "Tribute page",
    category: ["HTML", "CSS", "Flexbox"],
    img: "https://medeavarga.com/wp-content/themes/Medi/images/HieronymusBosch.jpg",
    tasks: "Build a Tribute Page as part of the Responsive Web Design curriculum by FreeCodeCamp. Deploy to Github.",
    list: ['web page design', 'practised flexbox', 'practised coding from scratch', 'deployed to Github'],
    href: "https://meeemeee.github.io/tribute-page/",
  },
  {
    id: 2,
    title: "Hand-coded Bootstrap page",
    subtitle: "Personal portfolio",
    category: ["HTML", "CSS", "Bootstrap4", "Javascript", "WordPress", "PHP", "Illustrator"],
    img: "https://medeavarga.com/wp-content/themes/Medi/images/Medea_Varga.jpg",
    tasks: "Build a portfolio page with Bootstrap4. Deploy to existing WordPress-based hosting a/c. Create a basic WordPress theme for the Bootstrap site.",
    list: ['web page design', 'practised bootstrap4', 'practised coding from scratch', 'logo design', 'created basic WordPress theme', 'practised php'],
    href: "https://github.com/meeemeee/medi/tree/main",
  },
  {
    id: 3,
    title: "Hand-coded HTML Email",
    subtitle: "HTML tables",
    category: ["HTML", "CSS"],
    img: "https://medeavarga.com/wp-content/uploads/2022/01/html_email.jpg",
    tasks: "Design a responsive email in HTML.",
    list: ['email design'],
    href: "https://github.com/meeemeee/html_email",
  },
  {
    id: 4,
    title: "Suggest A Domain App",
    subtitle: "domain name suggestion app",
    category: ["UI/UX", "AdobeXD", "Illustrator", "Javascript", "Node.js", "API"],
    img: "https://medeavarga.com/wp-content/uploads/2021/01/domain-name-suggestion.jpg",
    tasks: "Design business logic, wireframe & prototype UI/UX, integrate APIs, develop app",
    list: ['..under development..'],
    href: "https://medeavarga.com/domain-name-suggestion",
  },
  {
    id: 5,
    title: "Case Associates",
    subtitle: "Economics consultancy",
    category: ["WordPress", "Photoshop", "Illustrator", "PremierePro"],
    img: "https://medeavarga.com/wp-content/uploads/2021/01/CaseAssociates.jpg",
    tasks: "Create a mobile-friendly website using colours from existing logo for this well-established business. Remove bug from server. Set up SEO functionality.",
    list: ['website redesign', 'partial logo redesign', 'branding', 'blog', 'contact form integration', 'Google My Business setup', 'SEO'],
    icons: ["./wordpress.png", "./photoshop.png", "./illustrator.png", "./premiere.png"],
    href: "http://www.casecon.com",
  },
  {
    id: 6,
    title: "Mobile Bike Shop",
    subtitle: "Scooter repair",
    category: ["WordPress", "Photoshop", "Illustrator"],
    img: "https://medeavarga.com/wp-content/uploads/2021/01/MobileBikeShop.jpg",
    tasks: "Complete website redesign for this well-established, local scooter repair business in 1 week. Integrate Trustpilot reviews, and e-commerce facility.",
    list: ['website redesign', 'branding', 'Truspilot integration', 'Google Maps API', 'SEO', 'e-commerce integration / Woocommerce'],
    href: "https://mobilebikeshop.co.uk",
  }
];

const projectClass = document.querySelector(".project-class");
const buttonContainer = document.querySelector(".button-class");

window.addEventListener('DOMContentLoaded', function() {
  displayProjectsItems(projects);
  displayProjectsButtons();
});

var theCategoryItems;
var listItems;
var newCategory;

function displayProjectsItems(projectsItems) {
  let displayProjects = projectsItems.map(function (project) {

    theCategoryItems = project.category.map(function (theCategoryItems) {
      return theCategoryItems;
    }).join(', ');

    for (var f in project.category) {
      newCategory = project.category[f];
    }

    listItems = project.list.map(function (listItems) {
      return '<li>' + listItems + '</li>';
    }).join('');

    return `<div class="projectsContainer no-gutters" style="margin-top: 3rem;">
              <div class="card card-style">
                <img class="img-class-top card-img-size" src="${project.img}" alt="${project.subtitle}">
                <div class="card-body">
                  <div class="card-title pb-0.0625">
                    <h5 class="h5-class">${project.title}</h5>
                    <p class="p-italic-class">${project.subtitle}</p>
                    <p class="p-italic-class">-click or scroll this box-</p>
                  </div>
                  <div class="card-text pb-0.9375">
                    <h4>Tasks:</h4>
                    <p class="tasks">${project.tasks}</p>
                    <h4>Achieved:</h4>
                    <ol>
                      <h6 class="p-new-class">${listItems}</h6>
                    </ol>
                  <div>
                    <h4>Technologies used:</h4>
                    <p class="technologies-used">${theCategoryItems}</p>
                  </div>
                  </div>
                  <a href="${project.href}" class="stretched-link" target="_blank"></a>
                </div>
              </div>
            </div>`;
  });
  displayProjects = displayProjects.join("");
  projectClass.innerHTML = displayProjects;
}

function displayProjectsButtons() {
  var categoryItemsTogether = [];
  let mainLoop = projects.map(function(mainLoopItem) {
    var mainLoopsHolder = [];
    let mainLoops = mainLoopItem.category.map(function (mainLoops) {
      mainLoopsHolder.push(mainLoops);
    })

    categoryItemsTogether.push(mainLoopsHolder);
    for (var categories=0; categories<mainLoopItem.length; categories++) {
      categoryItemsTogether.push(mainLoopItem.categories);
    }

    var categoryLoop = [];
    categoryLoop.push(mainLoops);
  });

  var concatenatedCategoryItems = [];
    for (var loopingInCategoryArray=0; loopingInCategoryArray<categoryItemsTogether.length; loopingInCategoryArray++) {
      for (var loopInLoop=0; loopInLoop<categoryItemsTogether[loopingInCategoryArray].length; loopInLoop++) {
        concatenatedCategoryItems.push(categoryItemsTogether[loopingInCategoryArray][loopInLoop]);
      }
    };

  var uniqueCategories = [...new Set(concatenatedCategoryItems)];
  uniqueCategories.unshift('ALL');

  function displayUniqueCategories(data) {
    return [...new Set(data)];
  };

  const categoryButtons = displayUniqueCategories(uniqueCategories).map(function (category) {
      return `<button type="button" class="myButton uniqueButtons" data-category=${category}>
          ${category}
        </button>`;
  });

  buttonContainer.innerHTML = categoryButtons;
  const myButton = buttonContainer.querySelectorAll(".myButton");

  myButton.forEach(function (button) {
    button.addEventListener("click", function(e) {
      var newProjectItem = uniqueCategories.map(function (innerItem) {
        return innerItem;
      });
      const uniqueCategory = e.currentTarget.getAttribute('data-category');
      const projectsCategory = projects.filter(function (projectsItem) {
        for (let d = 0; d < projectsItem.category.length; d++) {
          if (projectsItem.category[d] === uniqueCategory) {
            return projectsItem;
          }
        }
      }
    );

    if (uniqueCategory === "ALL") {
      displayProjectsItems(projects);
    } else {
      displayProjectsItems(projectsCategory);
    }
  });
});
}
