const applicantForm = document.getElementById('form')
applicantForm.addEventListener('submit', handleFormSubmit)
function serializeForm(formNode) {
  return new FormData(formNode)
}
async function handleFormSubmit(event) {
  event.preventDefault()

  const data = serializeForm(event.target)
  const response = await sendData(data)
  if (status === 200) {
    onSuccess(event.target)
  } else {
    onError(error)
  }
}



async function sendData(data) {
  return await fetch('send.php', {
    method: 'POST',
    body: data,
  })
}