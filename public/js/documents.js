function handleFileChange() {
  const labelIdentificator = document.getElementById('label-identificator')
  const labelAddress = document.getElementById('label-address')
  const labelStatus = document.getElementById('label-status')
  const submitBtn = document.getElementById('submit-btn')

  const identificatorInput = document.getElementById(
    'image-upload-identificator'
  )
  const addressInput = document.getElementById('image-upload-address')
  const statusInput = document.getElementById('image-upload-status')

  if (
    !labelIdentificator ||
    !labelAddress ||
    !labelStatus ||
    !submitBtn ||
    !identificatorInput ||
    !addressInput ||
    !statusInput
  ) {
    return
  }

  // Check if all three inputs have files selected/loaded
  // @ts-ignore
  if (
    // @ts-ignore
    identificatorInput.files &&
    // @ts-ignore
    addressInput.files &&
    // @ts-ignore
    statusInput.files &&
    // @ts-ignore
    identificatorInput.files.length > 0 &&
    // @ts-ignore
    addressInput.files.length > 0 &&
    // @ts-ignore
    statusInput.files.length > 0
  ) {
    // @ts-ignore
    submitBtn.disabled = false
  } else {
    // @ts-ignore
    submitBtn.disabled = true
  }

  // TODO Delete
  // Change color to opaque gray for labels when there is a file loaded in each input
  // @ts-ignore
  if (identificatorInput.files.length > 0) {
    labelIdentificator.style.backgroundColor = 'rgba(128, 128, 128, 0.5)'
    // @ts-ignore
    Swal.fire({
      toast: true,
      showConfirmButton: true,
      title: `File added`,
      icon: 'success'
    })
  } else {
    labelIdentificator.style.backgroundColor = '#01657ed1'
  }

  // @ts-ignore
  if (addressInput.files.length > 0) {
    labelAddress.style.backgroundColor = 'rgba(128, 128, 128, 0.5)'
    // @ts-ignore
    Swal.fire({
      toast: true,
      showConfirmButton: true,
      title: `File added`,
      icon: 'success'
    })
  } else {
    labelAddress.style.backgroundColor = '#01657ed1'
  }

  // @ts-ignore
  if (statusInput.files.length > 0) {
    labelStatus.style.backgroundColor = 'rgba(128, 128, 128, 0.5)'
    // @ts-ignore
    Swal.fire({
      toast: true,
      showConfirmButton: true,
      title: `File added`,
      icon: 'success'
    })
  } else {
    labelStatus.style.backgroundColor = '#01657ed1'
  }
}

const formDocs = document.getElementById('formDocs')

if (formDocs instanceof HTMLFormElement) {
  formDocs.addEventListener('submit', handleSubmit)
}

async function handleSubmit(event) {
  event.preventDefault()

  const form = event.target
  const formData = new FormData(form)

  // Obtener los inputs de cada archivo
  const identificatorInput = document.getElementById(
    'image-upload-identificator'
  )
  const addressInput = document.getElementById('image-upload-address')
  const statusInput = document.getElementById('image-upload-status')

  if (
    identificatorInput instanceof HTMLInputElement &&
    addressInput instanceof HTMLInputElement &&
    statusInput instanceof HTMLInputElement
  ) {
    // @ts-ignore
    if (identificatorInput.files.length > 0) {
      // @ts-ignore
      formData.set('identificator', identificatorInput.files[0])
    }

    // @ts-ignore
    if (addressInput.files.length > 0) {
      // @ts-ignore
      formData.set('address', addressInput.files[0])
    }

    // @ts-ignore
    if (statusInput.files.length > 0) {
      // @ts-ignore
      formData.set('status', statusInput.files[0])
    }
  }

  const uid = formDocs?.className
  console.log(formData)
  try {
    const { status } = await fetch(`/api/users/documents/${uid}`, {
      method: 'POST',
      body: formData,
    })

    if (status === 201) {
      // @ts-ignore
      Swal.fire({
        toast: true,
        showConfirmButton: true,
        title: `Files added success`,
        icon: 'success'
      })
    } else {
      // @ts-ignore
      Swal.fire({
        toast: true,
        showConfirmButton: true,
        title: `Some File Failed`,
        icon: 'error'
      })
    }
  } catch (error) {
    console.error('Error al subir la imagen:', error)
  }
}
