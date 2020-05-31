$(function () {
  var selectedClass = "";
  $(".fil-cat").click(function () {
    selectedClass = $(this).attr("data-rel");
    $("#portfolio").fadeTo(100, 0.1);
    $("#portfolio div").not("." + selectedClass).fadeOut().removeClass('scale-anm');
    setTimeout(function () {
      $("." + selectedClass).fadeIn().addClass('scale-anm');
      $("#portfolio").fadeTo(300, 1);
    }, 300);

  });
});
function post(id) {
  window.location.href = 'http://35.206.125.75/OPENSW_ART/post.html?id=' + id;
}
function data_load1() {

  for (var i = 1; i < 30; i++) {
      var rand = Math.floor(Math.random() * 4) + 1;
      var list = document.getElementById("portfolio");
      var div = document.createElement("div");
      var color = "Black";
      div.className = "tile scale-anm 1 all " + color + " " + rand;
      list.appendChild(div);
      var img = document.createElement("img");
      img.className = "content-image"
      img.setAttribute("src", "data/" + i + ".jpg");//고유값
      img.setAttribute("src", "data/4.jpg");//고유값
      img.setAttribute('onClick', "javascript:post()"); 
      div.appendChild(img);

  }
}
function post() {
  window.location.href = "blog_post.html";
}


function onclick_white() {

  for (var i = 251; i < 295; i++) {
    try {
      var rand = Math.floor(Math.random() * 4) + 1;
      var list = document.getElementById("portfolio");
      var div = document.createElement("div");
      var color = "White";
      div.className = "tile scale-anm 1 all " + color + " " + rand;
      list.appendChild(div);
      var img = document.createElement("img");
      img.className = "content-image"
      img.setAttribute("src", "data/" + i + ".jpg");//고유값
      img.setAttribute("src", "data/303.jpg");//고유값
      img.setAttribute('onClick', "javascript:post()"); 

      div.appendChild(img);
    }
    catch (e) {
      console.log("dfdf")
    }

  }
}

function onclick_purple() {

  for (var i = 198; i < 227; i++) {
    try {
      var rand = Math.floor(Math.random() * 4) + 1;
      var list = document.getElementById("portfolio");
      var div = document.createElement("div");
      var color = "Purple";
      div.className = "tile scale-anm 1 all " + color + " " + rand;
      list.appendChild(div);
      var img = document.createElement("img");
      img.className = "content-image"
      img.setAttribute("src", "data/" + i + ".jpg");//고유값
      img.setAttribute("src", "data/229.jpg");//고유값
      img.setAttribute('onClick', "javascript:post()"); 

      div.appendChild(img);
    }
    catch (e) {
      console.log("dfdf")
    }

  }

}
function onclick_green() {

  for (var i = 251; i < 295; i++) {
    try {
      var rand = Math.floor(Math.random() * 4) + 1;
      var list = document.getElementById("portfolio");
      var div = document.createElement("div");
      var color = "Green";
      div.className = "tile scale-anm 1 all " + color + " " + rand;
      list.appendChild(div);
      var img = document.createElement("img");
      img.className = "content-image"
      img.setAttribute("src", "data/" + i + ".jpg");//고유값
      img.setAttribute("src", "data/197.jpg");//고유값      
      img.setAttribute('onClick', "javascript:post()"); 

      div.appendChild(img);
    }
    catch (error) {
      console.log("dfdf")
    }

  }
}
function onclick_yellow() {

  for (var i = 251; i < 295; i++) {
    try {
      var rand = Math.floor(Math.random() * 4) + 1;
      var list = document.getElementById("portfolio");
      var div = document.createElement("div");
      var color = "Yellow";
      div.className = "tile scale-anm 1 all " + color + " " + rand;
      list.appendChild(div);
      var img = document.createElement("img");
      img.className = "content-image"
      img.setAttribute("src", "data/" + i + ".jpg");//고유값
      img.setAttribute("src", "data/179.jpg");//고유값
      img.setAttribute('onClick', "javascript:post()"); 

      div.appendChild(img);
    }
    catch (error) {
      console.log("dfdf")
    }

  }
}
  function onclick_blue() {

    for (var i = 251; i < 295; i++) {
      try {
        var rand = Math.floor(Math.random() * 4) + 1;
        var list = document.getElementById("portfolio");
        var div = document.createElement("div");
        var color = "Blue";
        div.className = "tile scale-anm 1 all " + color + " " + rand;
        list.appendChild(div);
        var img = document.createElement("img");
        img.className = "content-image"
        img.setAttribute("src", "data/" + i + ".jpg");//고유값
        img.setAttribute("src", "data/239.jpg");//고유값
        img.setAttribute('onClick', "javascript:post()"); 

        div.appendChild(img);
      }
      catch (error) {
        console.log("dfdf")
      }

    }
  }

  function onclick_black() {

    for (var i = 251; i < 295; i++) {
      try {
        var rand = Math.floor(Math.random() * 4) + 1;
        var list = document.getElementById("portfolio");
        var div = document.createElement("div");
        var color = "Black";
        div.className = "tile scale-anm 1 all " + color + " " + rand;
        list.appendChild(div);
        var img = document.createElement("img");
        img.className = "content-image"
        img.setAttribute("src", "data/" + i + ".jpg");//고유값
        img.setAttribute("src", "data/4.jpg");//고유값
        img.setAttribute('onClick', "javascript:post()"); 

        div.appendChild(img);
      }
      catch (error) {
        console.log("dfdf")
      }

    }
    
  }