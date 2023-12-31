async function addProductQuantityToCart(cid, pid, quantity) {
  const cidarr = cid.split('carts/')
  const cidt = cidarr[1]
  const FETCH_URL = `https://coderhouse-proyecto-final-production.up.railway.app/api/carts/${cidt}/product/${pid}?quantity=${quantity}`
  const { status } = await fetch(FETCH_URL, { method: 'POST' })

  if (status === 201) {
    // @ts-ignore
    Swal.fire({
      toast: true,
      position: 'top-end',
      showConfirmButton: true,
      title: `Added product`,
      icon: 'success'
    })
  } else {
    // @ts-ignore
    Swal.fire({
      toast: true,
      position: 'top-end',
      showConfirmButton: true,
      title: `Not Enough Stock`,
      icon: 'info'
    })
  }
}

//profile
const profileIcon = document.querySelector('.profile-btn')
const profileMenu = document.getElementById('profileMenu')

if (profileIcon instanceof HTMLElement && profileMenu instanceof HTMLElement) {
  profileIcon.addEventListener('click', () => {
    profileMenu.style.display =
      profileMenu.style.display === 'block' ? 'none' : 'block'
  })
} else {
  console.log('🌙 ', 'No se encontraron los elementos necesarios.')
}

