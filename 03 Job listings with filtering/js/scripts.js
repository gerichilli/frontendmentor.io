let filteredTags = [];

const jobsContainer = document.getElementById("jobsList");
const filterBar = document.getElementById("filterBar");
const filteredTagsWrapper = document.getElementById("filteredTags");
const filterClearBtn = document.getElementById("tagClearBtn");
const main = document.getElementById("main");

init();

function init() {
  // Render first loaded page
  createItemsHTML(data);
  createFilteredTagsHTML(filteredTags);
}

function createItemsHTML(data) {
  jobsContainer.innerHTML = data
    .map(job => {
      const jobTags = [...(job.languages || []), ...(job.tools || []), ...([job.role, job.level] || [])];
      const tagsHTML = jobTags.map(tag => `<a href="javascript:;" class="tag tag--skill" data-tag="${tag}">${tag}</a>`).join("");

      return `<li class="job ${job.featured ? "job--featured" : ""} card">
        <div class="job__logo">
          <img src="${job.logo}" alt="">
        </div>
        <div class="job__content">
          <div class="job__line job__line--top">
            <div class="job__company">${job.company}</div>
            ${job.new ? '<span class="badge badge--new">New!</span>' : ""}
            ${job.featured ? '<span class="badge badge--featured">Featured</span>' : ""}
          </div>
          <div class="job__line job__line--center">
            <h2 class="job__position"><a href="#">${job.position}</a></h2>
          </div>
          <div class="job__line">
            <div class="job__info">${job.postedAt}</div>
            <div class="job__info">${job.contract}</div>
            <div class="job__info">${job.location}</div>
          </div>
        </div>
        <div class="job__tags">
          ${tagsHTML}
        </div>
      </li>`;
    })
    .join("");
}

function createFilteredTagsHTML(tags) {
  if (!tags.length) return;
  filteredTagsWrapper.innerHTML = tags
    .map(
      tag => `
      <div class="tag tag--filter">
        ${tag}
        <button class="tag__remove" data-tag="${tag}" aria-label="Remove tag">
          <img src="images/icon-remove.svg" alt="">
        </button>
      </div>
    `
    )
    .join("");

  filterBar.classList.add("filter--active");
  main.classList.add("main--active");
}

function clearFilteredTagHtml() {
  filteredTags = [];
  filteredTagsWrapper.innerHTML = "";
  filterBar.classList.remove("filter--active");
  main.classList.remove("main--active");
  createItemsHTML(data);
}

function displayFilteredJobs() {
  const newData = data.filter(job => {
    let jobsTag = [...(job.languages || []), ...(job.tools || []), ...([job.role, job.level] || [])];
    return filteredTags.every(tag => jobsTag.includes(tag));
  });
  createItemsHTML(newData);
}

// Clear button behavior
filterClearBtn.addEventListener("click", clearFilteredTagHtml);

// Filtered: add and remove tag
jobsContainer.addEventListener("click", function (e) {
  if (!e.target.closest(".tag--skill")) return;
  const tag = e.target.closest(".tag--skill").dataset.tag;
  if (filteredTags.indexOf(tag) < 0) filteredTags.push(tag);

  createFilteredTagsHTML(filteredTags);
  displayFilteredJobs();
});

// Remove filtered tag when choosing X icon X
filteredTagsWrapper.addEventListener("click", function (e) {
  if (!e.target.closest(".tag__remove")) return;
  const tag = e.target.closest(".tag__remove");
  const index = filteredTags.indexOf(tag.dataset.tag);
  if (index >= 0) filteredTags.splice(index, 1);

  createFilteredTagsHTML(filteredTags);
  displayFilteredJobs();
  if (filteredTags.length === 0) clearFilteredTagHtml();
});
