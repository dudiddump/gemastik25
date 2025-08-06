import Swal from "sweetalert2"

export function success(title: string) {
  return Swal.fire({
    title,
    icon: 'success',
    confirmButtonText: 'OK',
    iconColor: '#55daa9',
    confirmButtonColor: '#55daa9',
  })
}

export function info(title: string) {
  return Swal.fire({
    title,
    icon: 'info',
    confirmButtonText: 'OK',
    iconColor: 'primary',
    confirmButtonColor: '#55daa9',
  })
}

export function failed(title: string) {
  return Swal.fire({
    title,
    icon: 'error',
    confirmButtonText: 'OK',
    iconColor: 'danger',
    confirmButtonColor: '#55daa9',
  })
}

