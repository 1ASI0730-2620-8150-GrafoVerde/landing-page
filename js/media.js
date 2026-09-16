document.querySelectorAll("[data-media-card]").forEach((card) => {
  const video = card.querySelector("video");
  const play = card.querySelector("[data-media-play]");
  if (!video || !play) return;

  play.addEventListener("click", () => {
    card.classList.add("is-playing");
    video.setAttribute("controls", "");
    video.play();
  });

  video.addEventListener("pause", () => {
    if (video.ended) return;
    card.classList.remove("is-playing");
  });

  video.addEventListener("ended", () => {
    card.classList.remove("is-playing");
  });
});
