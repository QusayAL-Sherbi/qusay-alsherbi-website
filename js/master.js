// Select Skills Selectors
let ourSkills = document.querySelector(".skills-section");

window.onscroll = function () {
  // Skills Offset Top
  let skillsOffsetTop = ourSkills.offsetTop,
    // Skills Outer Height
    skillsOuterHeight = ourSkills.offsetHeight,
    // Window Height
    windowHeight = this.outerHeight;

  // Window Scroll Top
  let windowScrollTop = this.pageYOffset + 100;

  if (windowScrollTop >= skillsOffsetTop) {
    let allSkills = document.querySelectorAll(
      ".skill-box .skill-progress span"
    );

    allSkills.forEach((skill) => (skill.style.width = skill.dataset.progress));
  }
};
