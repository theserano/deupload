import "../../styles/generic.scss";
import "./textHeader.scss"


interface texHeaderProps  {
    header: string,
    text: string
}


const TextHeader = ({text, header}: texHeaderProps) => {
  return (
    <div className="textHeader">
        <h1 className="h1_header">{header}</h1>
        <p>{text}</p>
    </div>
  )
}

export default TextHeader