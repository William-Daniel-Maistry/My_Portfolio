import { credentials } from "../data/credentials.js";
import { education } from "../data/education.js";
import { technologies } from "../data/technologies.js";
import { skills } from "../data/skills.js";
import { projects } from "../data/projects.js";
import { positions } from "../data/positions.js";
import { socials } from "../data/socials.js";
import { faqs } from "../data/faqs.js";


export function renderCredentials() {
  const creds = document.getElementById("credentials")
  let output = `<ul>`;

  credentials.forEach(c => {
    output += `
    <li>
      <a
          href="docs/${c.link}"
          target="_blank" rel="noopener noreferrer"
          title="View">
          ${c.title}
      </a>
      <a href="docs/${c.link}"
        download="${c.title}"
        class="download">
          <button class="download">
            Download
            <i class="fas fa-download"></i>
          </button>
      </a>
    </li>
    `;
  })

  output += `</ul>`;

  creds.innerHTML = output;
}



export function renderEducation() {
  const edu = document.getElementById("education");
  let output = `<ul>`;

  education.forEach(e => {
    output += `
      <li>
        <a href="${e.link}" 
          target="_blank"
          rel="noopener noreferrer" 
          title="Visit Site">
            <img 
              src="images/education/${e.img}"
              alt="${e.title} Logo" 
              width="50"
              height="50">
                <strong>
                  <em>${e.name}:</em>
                </strong>
        </a>
        <a
          href="${e.course.link}"
          target="_blank"
          rel="noopener noreferrer"
          title="Visit Site">
            ${e.course.name}
        </a>
        - ${e.description} (${e.year})
    </li>
    `;
  })

  output += `</ul>`;

  edu.innerHTML = output;
}


export function renderTechnologies() {
  const container = document.getElementById("technologies");
  if(!container) return;

  container.innerHTML = "";

  technologies.categories.forEach(cat => {
    const filteredTech = technologies.technologies.filter(t => t.category === cat);

    if (filteredTech.length === 0) return;

    const categoryDiv = document.createElement("div");
    categoryDiv.dataset.category = cat;
    categoryDiv.classList.add("techCategory")

    categoryDiv.innerHTML = `<h3>${cat}</h3>`;

    const itemsHTML = filteredTech
      .map(t => `
          <div class="technology">
            <div class="technologyContent">
              <img src="images/technologies/${t.img}" width="50">
              <h5 class="center">${t.name}</h5>
              <p>${t.level}</p>
            </div>
          </div>
        `)
      .join("");

      categoryDiv.innerHTML += itemsHTML;
      container.appendChild(categoryDiv);
  })
}


export function renderSkills() {
  const skillsContent = document.getElementById("skills");
  let output = `<ul>`;

  skills.forEach(s => {
    output += `<li>${s}</li>`;
  })

  output += `</ul>`;

  skillsContent.innerHTML = output;
}


export function renderProjects() {
  const projectsContent = document.getElementById("projects__content");
  let output = "";

  projects.forEach(p => {
    output += `
      <a
        href="${p.link}"
        target="_blank" rel=" noopener noreferrer"
        title="View" class="project_box">
        <img src="images/projects/${p.img}"
            alt="${p.title} Image"
            width="300" height="200">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
      </a>
    `;

    projectsContent.innerHTML = output;
  })
}


export function renderPositions() {
  const container = document.getElementById("positions");
  let output = ""

  positions.forEach(p => {
    output += `
      <div class="position">
        <p class="positionDate">${p.date}</p>
        <a class="positionInstitution" href="${p.link}" target="_blank" rel="noopener noreferrer" title="View site.">
          <img src="images/positions/${p.img}" alt="Institution Logo" width="50"> 
          ${p.institution}
        </a>
        <h3 class="positionTitle center">${p.title}</h3>
        <p class="positionDescription">${p.description}</p>
        <button type="button" onclick="window.open('${p.more_info}', '_blank')">Learn More</button>
      </div>
    `
  })

  container.innerHTML = output;
}


export function renderSocials() {
  const socialMedia = document.getElementById("social_media");
  let output = "";

  socials.forEach(s => {
    output += `
      <a href="${s.link}" target="_blank"
        rel="noopener noreferrer"
        title="${s.title}">
        <img src="images/socials/${s.img}" alt="${s.title} Icon"
            width="50"
            height="50">
      </a>
    `;

    socialMedia.innerHTML = output;
  })
}


export function renderFAQs() {
  const faq = document.getElementById("faq");
  let output = "";

  faqs.forEach(f => {
    output += `
      <p class="question">
        ${f.question}
        <i  class="fas fa-circle-chevron-down" title="Show Answer"></i>
        <i  class="fas fa-circle-chevron-up" title="Hide Answer"></i>
      </p>
      <p class="answer" hidden>${f.answer}</p>
    `;
  })

  faq.innerHTML = output;

  document.querySelectorAll(".question > i:first-child").forEach(arrDown => {
    arrDown.addEventListener('click', () => {
      const answer = arrDown.parentElement.nextElementSibling;
      const arrUp = arrDown.nextElementSibling;

      answer.style.display = "block";
      arrDown.style.display = "none";
      arrUp.style.display = "inline-block"
    })
  })

  document.querySelectorAll(".question > i:last-child").forEach(arrUp => {
    arrUp.style.display = "none";

    arrUp.addEventListener('click', () => {
      const answer = arrUp.parentElement.nextElementSibling;
      const arrDown = arrUp.previousElementSibling;

      answer.style.display = "none";
      arrUp.style.display = "none";
      arrDown.style.display = "inline-block"
    })
  })
}
