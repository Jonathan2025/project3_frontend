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

    // now we want to set up a autoscroll 
    const autoScroll = true
    let slideInterval 
    let intervalTime = 7000 // 7 seconds

    // add 1 to the currentslide to get the next slide
    const nextSlide = () =>{
        // now IF we are on the last slide, we want to be able to go to the FIRST slide 
        // meaning on the last slide we set it to 0
        setCurrentSlide(currentSlide === slideLength -1 ? 0 : currentSlide + 1)
    }

    const prevSlide = () =>{
        // when we are on the first slide, then set the next slide to be the 3rd slide
        setCurrentSlide(currentSlide === 0 ? slideLength -1: currentSlide -1)
    }


    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime)
    }

    useEffect(() => {
        setCurrentSlide(0);
    }, [])

    // This useeffect will allow the autoscroll to function
    // Now we need to add a "cleanup" function because this will mess with the scroll if we click the arrows
    useEffect(() => {
        if (autoScroll) {
          auto();
        }
        // we clear the slide interval 
        return () => clearInterval(slideInterval)
      }, [currentSlide]); // need to also set a dependency on the current slide

    return( 
        <div className="slider"> 
            <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide}/>
            <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />

            {/* we want to access the slider data and then map it */}
            {sliderData.map((slide, index)=>{
                console.log(index)
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
                                    <a href={slide.link}><button className="blogBtn">Learn More</button></a>
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