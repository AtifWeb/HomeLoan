let TotalWidth = 0;
let TotalPercentage = 0;
let AllBoxes = document.querySelectorAll(".slider-item-wrapper");
let Count = 0;
let Stop = false;
let Steps = 1;
let SliderReel = document.querySelector(".sliding-reel");
let CurrentCardActive = document.querySelector(".slider-item-wrapper.active");
let animationStart = false;

// calculation TotalWidth

AllBoxes.forEach((EachBox) => {
  TotalWidth = TotalWidth + EachBox.offsetWidth;
});

window.addEventListener("resize", () => {
  AllBoxes.forEach((EachBox) => {
    TotalWidth = TotalWidth + EachBox.offsetWidth;
  });
  if (window.innerWidth < 860) {
    AllBoxes.forEach((EachBox) => {
      EachBox.classList.remove("active");
      EachBox.classList.remove("active-second");
    });
    AllBoxes[0].classList.add("active");
    CurrentCardActive = AllBoxes[0];
  } else if (window.innerWidth < 1400) {
    CurrentCardActive.previousElementSibling.classList.add("active");
    CurrentCardActive.previousElementSibling.previousElementSibling.classList.add(
      "active-second"
    );
    CurrentCardActive.previousElementSibling.classList.remove("active-second");
    CurrentCardActive.nextElementSibling.classList.remove("active-second");
    CurrentCardActive.classList.add("active-second");
    CurrentCardActive.classList.remove("active");
  }
});

AllBoxes.forEach((EachBox) => {
  TotalWidth = TotalWidth + EachBox.offsetWidth;
});

window.addEventListener("load", () => {
  AllBoxes.forEach((EachBox) => {
    TotalWidth = TotalWidth + EachBox.offsetWidth;
  });
  if (window.innerWidth < 860) {
    AllBoxes.forEach((EachBox) => {
      EachBox.classList.remove("active");
      EachBox.classList.remove("active-second");
    });
    AllBoxes[0].classList.add("active");
    CurrentCardActive = AllBoxes[0];
  } else if (window.innerWidth < 1400) {
    CurrentCardActive.previousElementSibling.classList.add("active");

    CurrentCardActive.previousElementSibling.previousElementSibling.classList.add(
      "active-second"
    );
    CurrentCardActive.previousElementSibling.classList.remove("active-second");
    CurrentCardActive.nextElementSibling.classList.remove("active-second");
    CurrentCardActive.classList.add("active-second");
    CurrentCardActive.classList.remove("active");
    CurrentCardActive = document.querySelector(".slider-item-wrapper.active");
  }
});

const AnimationSlider = () => {
  if (Steps <= AllBoxes.length - 3) {
    if (window.innerWidth < 860) {
      CurrentCardActive.classList.remove("active");
      CurrentCardActive = CurrentCardActive.nextElementSibling;
      CurrentCardActive.classList.add("active");
      Count = Count + 100;
    } else if (window.innerWidth < 1400) {
      CurrentCardActive.previousElementSibling.classList.remove(
        "active-second"
      );
      CurrentCardActive.nextElementSibling.classList.remove("active-second");
      CurrentCardActive.classList.remove("active");
      CurrentCardActive.classList.add("active-second");
      CurrentCardActive = CurrentCardActive.nextElementSibling;
      CurrentCardActive.classList.add("active");
      CurrentCardActive.nextElementSibling.classList.add("active-second");
      Count = Count + 30;
    } else {
      CurrentCardActive.previousElementSibling.classList.remove(
        "active-second"
      );
      CurrentCardActive.nextElementSibling.classList.remove("active-second");
      CurrentCardActive.classList.remove("active");
      CurrentCardActive.classList.add("active-second");
      CurrentCardActive = CurrentCardActive.nextElementSibling;
      CurrentCardActive.classList.add("active");
      CurrentCardActive.nextElementSibling.classList.add("active-second");
      Count = Count + 19;
    }

    if (Count < TotalWidth) {
      SliderReel.style.transform = `translateX(-${Count}%)`;
      Steps++;
    } else {
      Count = 0;
    }
  }
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 3018 && animationStart == false) {
    setInterval(() => {
      AnimationSlider();
    }, 3000);
    animationStart = true;
  }
});
