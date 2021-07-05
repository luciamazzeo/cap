$(document).ready(function () {
  AOS.init({
    duration: 2000,
    offset: 200,
    delay: 150,
    easing: "ease",
    mirror: "false",
    once: "true",
  });

  toastr.options = {
    closeButton: false,
    debug: false,
    newestOnTop: false,
    progressBar: true,
    positionClass: "toast-bottom-right",
    preventDuplicates: true,
    onclick: null,
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "3000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
  };

  var form = $("#basic-form");
  form.validate({
    rules: {
      name: {
        required: true,
      },
      surname: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      message: {
        required: true,
      },
    },
    messages: {
      name: "Ingrese un nombre válido.",
      surname: "Ingrese un apellido válido.",
      email: "Ingrese un mail válido.",
      message: "Ingrese un mensaje válido.",
    },
  });

  $(".nav-link").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  const clearForm = (name, surname, mail, message) => {
    name.val("");
    surname.val("");
    mail.val("");
    message.val("");
  };

  $(".btnSend").click(function (e) {
    e.preventDefault();
    $(".btnSend").prop("disabled", true);
    let name = $(".txtName");
    let surname = $(".txtSurname");
    let mail = $(".txtMail");
    let message = $(".txtMessage");
    if (form.valid()) {
      var data = {
        name: name.val(),
        surname: surname.val(),
        mail: mail.val(),
        message: message.val(),
      };
      $.ajax({
        type: "POST",
        url: "email.php",
        data: data,
        dataType: "json",
        success: function (response) {
          if (response.status == 1) {
            clearForm(name, surname, mail, message);
            toastr.success(response.message, "Mensaje Enviado");
            $(".btnSend").prop("disabled", false);
          } else {
            toastr.error(response.message, "Error");
          }
        },
      });
    }
  });
});
