import { ContentEdit } from '../blog/ContentEdit';
import { BlogDetails } from "../blog/BlogDetails";
import { useRef } from "react";
import { BlogResume } from "../blog/BlogResume";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const settings = {
    dots: true,
    infinite: false,
    arrow: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 200,
    draggable: false
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
