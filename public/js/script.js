(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        } else {
          document.querySelector(".loader").style.display = "inline";
          document.querySelector(".pageblur").style.opacity = "0.5"
          event.submitter.disabled = true;
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()