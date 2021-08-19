$(document).ready(function () {
  $(".accordion-header").click(function () {
    let accordion = $(this).attr("id");
    let id, clave;
    switch (accordion) {
      case "flush-headingOne":
        id = "#flush-collapseOne";
        clave = "autor";
        break;
      case "flush-headingTwo":
        id = "#flush-collapseTwo";
        clave = "leyendo";
        break;
      case "flush-headingThree":
        id = "#flush-collapseThree";
        clave = "encuentros";
        break;
      default:
        break;
    }
    $.ajax({
      type: "GET",
      url: "libros.json",
      dataType: "json",
      success: function (data) {
        createDiv(data, id, clave);
      },
      error: function (e) {
        console.log(e.error);
      },
    });
  });

  const createDiv = (data, id, clave) => {
    let div = $(id);
    div.html("");
    data[clave].forEach((element) => {
      div.append(`
            <div class="accordion-body d-flex justify-content-between align-items-center">
                <div>${element}</div>
                <div>
                    <a class="btn btn-primary btn-sm" href="/resources/${element}.pdf" target="_blank" data-bs-toggle="tooltip" title="Descargar">
                        <i class="fas fa-download"></i>
                    </a>
                </div>
            </div>`);
    });
  };

  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
});
