$(document).ready(function () {
  $(".back").hide();

  $(".carousel-item").on("mouseenter", function () {
    $(this).find(".back").stop(true, true).fadeIn(300);
  });

  $(".carousel-item").on("mouseleave", function () {
    $(this).find(".back").stop(true, true).fadeOut(300);
  });
});

$(document).ready(function () {
  const imgList = ["hero.png", "image.png", "1.png"];
  const arr = [];

  $(".project").each(function (index, el) {
    arr.push($(el));
  });

  function changeImage(index) {
    $(".div-image img").remove();
    $(".div-image").append(`<img src='img/${imgList[index]}' />`);
  }

  function changeStyle(index) {
    arr.forEach((el) => {
      el.css("background-color", "");
      el.css("color", "");
    });

    $(arr[index]).css("background-color", "#ff3147");
    $(arr[index]).css("color", "white");
  }

  // Initialize with the first image and style
  changeImage(0);
  changeStyle(0);

  $(".project").click(function () {
    const index = $(this).index(".project");
    changeImage(index);
    changeStyle(index);
  });
});

$("#exampleModal .contact-btn").click(function () {
  $("#exampleModal").modal("hide");
})

$("#ajaxForm").submit(function (e) {
  e.preventDefault();
  var action = $(this).attr("action");
  $.ajax({
    type: "POST",
    url: action,
    crossDomain: true,
    data: new FormData(this),
    dataType: "json",
    processData: false,
    contentType: false,
    headers: {
      Accept: "application/json",
    },
  })
    .done(function () {
      alert("The form was submitted successfully.");
    })
    .fail(function () {
      alert("An error occurred! Please try again later.");
    });
});
