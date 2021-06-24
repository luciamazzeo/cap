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

  const clearForm = (name, surname, mail, message) => {
    name.val("");
    surname.val("");
    mail.val("");
    message.val("");
  };

  $(".btnSend").click(function (e) {
    e.preventDefault();
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
      clearForm(name, surname, mail, message);
      toastr.success("Mensaje enviado exitosamente!", "Mensaje Enviado");
      // $.ajax({
      //   type: "POST",
      //   url: "email.php",
      //   dataType: "json",
      //   data: data,
      //   success: function () {
      //     toastr.success("Mensaje enviado exitosamente!", "Mensaje Enviado");
      //   },
      // });
    }
  });
});
