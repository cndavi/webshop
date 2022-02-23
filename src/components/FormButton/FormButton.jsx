const FormButton = ({ btnTitle, handleAction }) => {
  return (
    <>
      <button type='submit' onClick={handleAction}>
        {btnTitle}
      </button>
    </>
  )
}

export default FormButton
