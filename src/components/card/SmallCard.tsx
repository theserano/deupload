import { IoIosArrowRoundForward } from "react-icons/io"
import "../../styles/variables.scss"
import "./card.scss";

interface SmallCardProps {
    backgroundColor: string,
    circleColor: string,
    image: string,
    header: string,
    headerColor: string
    text: string,
    textColor: string
    link?: string
    linkColor?: string
    height?: string
}


const SmallCard = ({backgroundColor, circleColor, image, header, headerColor, text, textColor, link, linkColor, height}: SmallCardProps) => {
  return (
    <div className="small_card" style={{
        backgroundColor: backgroundColor,
        height: height
    }}>

        <div className="small_card_circle" style={{
            backgroundColor: circleColor
        }}>
            <img src={image} alt="" />
        </div>

        <div className="small_card_header" style={{
            color: headerColor
        }}>{header}</div>

        <p className="small_card_text" style={{
            color: textColor
        }}>{text}</p>

        <p style={{
            color: linkColor
        }} className="small_card_link">{link} <IoIosArrowRoundForward style={{
            fontSize: "1.5rem"
        }} /></p>
        
    </div>
  )
}

export default SmallCard;