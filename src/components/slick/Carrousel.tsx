import { ContentEdit } from '../blog/ContentEdit';
import { BlogDetails } from "../blog/BlogDetails";
import { useRef } from "react";
import { BlogResume } from "../blog/BlogResume";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const settings = {
    draggable: false,
    arrow: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    swipe: false
    // slidesToScroll: 1,
};


export const Carrousel = () => {

    let sliderRef: any = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };


    return (
        <div className="" style={{
            maxWidth: '1000px'
        }}>
            <Slider
                {...settings}
                ref={ slider => { sliderRef = slider } }
            >
                <div className="h-100 py-3">
                    <BlogDetails next={next} />
                </div>
                <div className="h-100 py-3">
                    <ContentEdit previous={previous} next={next} />
                </div>
                <div className="h-100 py-3">
                    <BlogResume previous={previous} />
                </div>
            </Slider>
        </div>
    );
};
