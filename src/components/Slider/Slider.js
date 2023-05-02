import {useState, useEffect} from "react";
import "./Slider.scss"
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"
import { sliderData } from "./Slider-data";



const Slider = () => {

    // create a use state
    const [currentSlide, setCurrentSlide] = useState(0)
    // slide length will be 1 2 3 since we have 3 slides
    // currentSlide = 0 1 2 (array indexing)
    const slideLength = sliderData.length

    // add 1 to the currentslide to get the next slide
    const nextSlide = () =>{
        // now IF we are on the last slide, we want to be able to go to the FIRST slide 
        // meaning on the last slide we set it to 0
        setCurrentSlide(currentSlide === slideLength -1 ? 0 : currentSlide + 1)
    }

    useEffect(()=> {
        setCurrentSlide(0)
    }, [])

    return( 
        <div className="slider"> 
            <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide}/>
            // ad the onclick 
            <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />

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