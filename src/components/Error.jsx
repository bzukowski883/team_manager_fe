import "../styles/tokens.css"
import "../styles/components.css"

function SomethingWentWrong({errorTitle = "Something Has Gone Wrong!", errorCode = null, errorMessage = "There has been an error and we dont know what it was... :/"}) {
  return (
    <div>
      <h1>{errorTitle}</h1>
      <p>
        {errorCode != null && (
          <div>
            {errorCode}  
            <br />
          </div>
        )}
        {errorMessage}
      </p>
    </div>
  )
}

export default SomethingWentWrong;