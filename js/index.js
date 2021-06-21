$(document).ready(function () {
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
  
    $(".btnSend").click(function (e) {
      e.preventDefault();
      if (form.valid()) {
        var data = {
          name: $(".txtName").val(),
          surname: $(".txtSurname").val(),
          mail: $(".txtMail").val(),
          message: $(".txtMessage").val(),
        };
        $.ajax({
          type: "POST",
          url: "email.php",
          dataType: "json",
          data: data,
          success: function () {
            alert("Enviado");
          },
        });
      }
    });
  });