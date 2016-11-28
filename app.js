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

$(document).ready(function() {
  $("#name").slideUp(1).delay("1000").slideDown('slow');
  $("#content").slideUp(1).delay("2000").slideDown('slow');
  })


// $(document).ready(function() {
//   $("#name").slideDown("4000", function() {
//     $("#name").css("visibility", "hidden" );
//   });
// })
