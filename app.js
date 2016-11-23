console.log("loaded")

function myFunction() {
  // console.log("linked")
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += "responsive";
    } else {
        x.className = "topnav";
    }
}

// window.onload = $(document).ready(function() {
//   $("#head").click(function() {
//     $("div").animate({
//       opacity: '0.5',
//       fontsize: '2em'
//     })
//   })
// })


// window.onload = $(document).ready(function() {
//   $("#head").click(function() {
//     $("div").animate({
//       opacity: '0.5',
//       fontsize: '2em'
//     })
//   })
// })
