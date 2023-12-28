import { scroll } from './loco.js'

// scrolling shortcuts
function scrollTo(id) {
    const n = document.getElementById(id);
    scroll.scrollTo(n);
    scroll.update();
}

var sections_dict = {
    "goto-start"    : "start",
    "goto-education": "education",
    "goto-projects" : "projects-title",
    "goto-skills"   : "skills-title",
    "goto-identity" : "identity-title"
}
for (let key in sections_dict) {
    for (var elem of document.getElementsByClassName(key)) {
        elem.addEventListener("click", evt => {
            scrollTo(sections_dict[key]);
        })
    }
}
