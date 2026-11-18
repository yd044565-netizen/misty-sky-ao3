(() => {
  if (location.hostname !== "archiveofourown.org") return;

  function applyFont() {
    if (document.getElementById("misty-sky-songti")) return;

    const font = document.createElement("link");
    font.rel = "stylesheet";
    font.referrerPolicy = "no-referrer";
    font.href = "https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;700&display=swap";

    const style = document.createElement("style");
    style.id = "misty-sky-songti";
    style.textContent = `
      #outer #main #workskin .title,
      #outer #main #workskin .byline,
      #outer #main #workskin .userstuff,
      #outer #main #workskin .userstuff :is(p, span, a, li, strong, em, blockquote, h1, h2, h3, h4),
      #outer #main dl.work.meta dd,
      #outer #main dl.work.meta a.tag,
      #outer #main .blurb .heading a,
      #outer #main .blurb .userstuff,
      #outer #main .blurb a.tag {
        font-family: Georgia, "Noto Serif SC", "Songti SC", serif !important;
      }
    `;
    document.head.append(font, style);
  }

  if (document.head) applyFont();
  else document.addEventListener("DOMContentLoaded", applyFont, { once: true });
})();
