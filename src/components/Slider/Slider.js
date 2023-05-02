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

            {/* we want to access the slider data and then map it */}
            {sliderData.map((slide, index)=>{
                return (
                    // If the index is equal to the current slide, then set the class name as "slide current"
                    // and since we arent really modifying the slides we can just set the key to index
                    <div className={index === currentSlide ? "slide current": "slide"} 
                        key={index}> 
                        {/* if the index is the current slide then set the image and information*/}
                        {index === currentSlide && (
                            <>
                                <img src={slide.image} alt="slide"/>
                                <div className="content">
                                    <h2>{slide.heading}</h2>
                                    <p>{slide.desc}</p>
                                    <hr/>
                                    <button className="--btn--btn-primary">Get Started</button>
                                </div> 
                            </>
                        )}
                    </div>
                )
            })}

        </div>
    )
}

export default Slider