$(document).ready(function(){
  // select the ul insde the div with class menu and hide it inital. After that remove inactive class.
  $(".menu ul").hide("clip", 1).removeClass("inactive");
  // select all gallerys and hide them inital. After that remove inactive class.
  $(".gallery").hide("clip", 1).removeClass("inactive");

  // register click handler on div with class menu
	$(".menu").click(function() {
    // checking if the div with class menu has the class "active"
    // if true: the ul inside the menu div slides up and hides
    // if false: the ul sinde the menu div slides down and shows
    if ($(".menu").hasClass("active")) {
      $(".menu ul").slideUp("slow");
    }
    else {
      $(".menu ul").slideDown("slow", "easeOutBounce");
    }
    // toggle the "active" class on the menu div for controllig if menu is visabile or not.
    $(".menu").toggleClass("active");
  });

  // register click handler on divs with class project
  $(".project").click(function() {
    // get the id of the gallery div
    var galleryID = "#" + $(this).attr("toggle");
    // check if gallery is active or not
    if ( $(galleryID).attr("active") === "false" ) {
      // if gallery is not active, show gallery
      // use show method with blind effect and 700ms duration to show the gallery
      $(galleryID).show("blind", 700);
      // set active attribute of the gallery to true
      $(galleryID).attr("active", "true");
    }
    else {
      // if gallery is active, hide gallery
      // use hide method with blind effect and 700ms duration to hide the gallery
      $(galleryID).hide("blind", 700);
      // set active attribute of the gallery to false
      $(galleryID).attr("active", "false");
    }
  });
});
