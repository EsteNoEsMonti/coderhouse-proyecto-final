const formForgot = document.querySelector('#formForgot')

if (formForgot instanceof HTMLFormElement) {
  formForgot.addEventListener('submit', async (e) => {
    e.preventDefault()

    const input_email = document.querySelector('#email')

    if (input_email instanceof HTMLInputElement) {
      const dtoUsuario = {
        email: input_email.value,
      }

      const { status } = await fetch('/api/users/forgot', {
        method: 'POST',
        body: JSON.stringify(dtoUsuario),
        headers: { 'Content-Type': 'application/json' },
      })

      if (status === 201) {
        // @ts-ignore
        await Swal.fire({
          toast: true,
          showConfirmButton: true,
          title: `Recovery e-mail sent`,
          icon: 'success'
        })
        window.location.href = '/login'
      } else {
        // @ts-ignore
        Swal.fire({
          toast: true,
          showConfirmButton: true,
          title: `Authentication Failed`,
          icon: 'error'
        })
      }
    }
  })
}
