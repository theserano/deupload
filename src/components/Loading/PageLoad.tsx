import { DotLoader } from "react-spinners";
import "./loader.scss"


const PageLoad = () => {
  return (
    <div className="page_load">
        <DotLoader
            color="#651FFF"
            size={170}
        />
    </div>
  )
}

export default PageLoad;