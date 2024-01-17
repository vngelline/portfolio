const images = ["logo-1", "logo-2", "logo-3", "logo-4", "logo-5"];
const pics = [];
images.forEach(function (image) {
  pics.push(document.getElementById(image));
});

//let delayInMilliSeconds = 500;

const logoParty = function () {
    const interval = setInterval(function() {
          setTimeout(() => {
            pics[0].style.display = "none";
            pics[1].style.display = "block";
          }, 500);
          setTimeout(() => {
            pics[1].style.display = "none";
            pics[2].style.display = "block";
          }, 1000);
          setTimeout(() => {
            pics[2].style.display = "none";
            pics[3].style.display = "block";
          }, 1500);
          setTimeout(() => {
            pics[3].style.display = "none";
            pics[4].style.display = "block";
          }, 2000);
          setTimeout(() => {
            pics[4].style.display = "none";
            pics[0].style.display = "block";
          }, 2500);
      }, 2500);
  //for (let step = 0; step < 100; step++) {
};

let logo1 = document.getElementById("logo-1");

//logo1.addEventListener("load", logoParty);

logo1.onload = logoParty();

