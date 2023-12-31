async function deleteUser(uid) {
  const FETCH_URL = `https://coderhouse-proyecto-final-production.up.railway.app/api/users/${uid}`
  const { status } = await fetch(FETCH_URL, { method: 'DELETE' })

  if (status === 200) {
    // @ts-ignore
    Swal.fire({
      toast: true,
      position: 'top-end',
      showConfirmButton: true,
      title: `User Deleted`,
      icon: 'success'
    })
    window.location.href = `/users`
  } else {
    // @ts-ignore
    Swal.fire({
      toast: true,
      position: 'top-end',
      showConfirmButton: true,
      title: `Delete Fail`,
      icon: 'info'
    })
  }
}

async function upgradeUser(uid) {
  const FETCH_URL = `https://coderhouse-proyecto-final-production.up.railway.app//api/users/admin/${uid}`
  const { status } = await fetch(FETCH_URL, { method: 'GET' })

  if (status === 200) {
    // @ts-ignore
    Swal.fire({
      toast: true,
      position: 'top-end',
      showConfirmButton: true,
      title: `User role changed`,
      icon: 'success'
    })
    window.location.href = `/users`
  } else {
    // @ts-ignore
    Swal.fire({
      toast: true,
      position: 'top-end',
      showConfirmButton: true,
      title: `Change Fail`,
      icon: 'info'
    })
  }
}

async function deleteAllUsers() {
  const FETCH_URL = `https://coderhouse-proyecto-final-production.up.railway.app//api/users`
  const { status } = await fetch(FETCH_URL, { method: 'DELETE' })

  if (status === 200) {
    // @ts-ignore
    Swal.fire({
      toast: true,
      position: 'top-end',
      showConfirmButton: true,
      title: `Inactive users cleaned`,
      icon: 'success'
    })
    window.location.href = `/users`
  } else {
    // @ts-ignore
    Swal.fire({
      toast: true,
      position: 'top-end',
      showConfirmButton: true,
      title: `Clean Fail`,
      icon: 'info'
    })
  }
}
