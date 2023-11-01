const customDot = document.querySelector("[data-custom-dot]");
const customOutlined = document.querySelectorAll("[data-custom-outlined]")[0];
const customOutlined2 = document.querySelectorAll("[data-custom-outlined]")[1];
const mainButton = document.querySelector("[data-main-button]");
const mainContainer = document.getElementById("main-container");

document.addEventListener("mousemove", (event) => {
  const posX = event.clientX;
  const posY = event.clientY;

  //   customDot.style.top = `${posY}px`;
  //   customDot.style.left = `${posX}px`;

  customDot.animate(
    {
      top: `${posY}px`,
      left: `${posX}px`,
    },
    { duration: 300, fill: "forwards" }
  );

  customOutlined.animate(
    {
      top: `${posY}px`,
      left: `${posX}px`,
    },
    { duration: 700, fill: "forwards" }
  );

  customOutlined2.animate(
    {
      top: `${posY}px`,
      left: `${posX}px`,
    },
    { duration: 1500, fill: "forwards" }
  );
});

mainButton.addEventListener("click", () => {
  let containerClientX = mainContainer.clientWidth;
  let containerClientY = mainContainer.clientHeight;

  let randomPosY = Math.floor(Math.random() * (containerClientY - 100));
  let randomPosX = Math.floor(Math.random() * (containerClientX - 100));

  mainButton.style.top = `${randomPosY}px`;
  mainButton.style.left = `${randomPosX}px`;
});
