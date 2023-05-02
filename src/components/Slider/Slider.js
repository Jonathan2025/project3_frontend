import {useState} from "react";
import "./Slider.scss"
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"
import { sliderData } from "./Slider-data";



const Slider = () => {

    // create a use state
    const [currentSlide, setCurrentSlide] = useState(0)


    return( 
        <div className="slider"> 
            <AiOutlineArrowLeft className="arrow prev"/>
            <AiOutlineArrowRight className="arrow next"/>


        </div>
    )
}

export default Slider