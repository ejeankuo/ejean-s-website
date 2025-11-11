import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './carousel.css';

export default function ReusableCoursel({ slides }) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {slides.map((slide, idx) => (
                <Carousel.Item key={idx}>
                    <img 
                        src={slide.src} 
                        alt={slide.alt} 
                        className="d-block w-100 faq-photo" 
                    />
                    {(slide.title || slide.text) && (
                        <Carousel.Caption>
                            {slide.title && <h3>{slide.title}</h3>}
                            {slide.text && <p>{slide.text}</p>}
                        </Carousel.Caption>
                    )}
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

// function ControlledCarousel() {
//     const [index, setIndex] = useState(0);

//     const handleSelect = (selectedIndex) => {
//         setIndex(selectedIndex);
//     };

//     return (
//         <Carousel activeIndex={index} onSelect={handleSelect}>
//             <Carousel.Item>
//                 <img 
//                     src="/disc_catering.png" 
//                     alt="Ejean with DISC exec" 
//                     className="d-block w-100 faq-photo" 
//                 />
//             </Carousel.Item>
//             <Carousel.Item>
//                 <img
//                     src="/CAE_presentation.png" 
//                     alt="CAE presentation" 
//                     className="d-block w-100 faq-photo" 
//                 />
//             </Carousel.Item>
//         </Carousel>
//     );
// }

// export default ControlledCarousel;

