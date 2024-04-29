import React, {useState, useEffect} from "react";

import "./Slider.style.scss";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {sliderAtom} from "../../state/slider";

const Slider = ({children}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [slideDone, setSlideDone] = useState(true);
    const [timeID, setTimeID] = useState(null);
    const slider = useRecoilValue(sliderAtom);
    const setSlider = useSetRecoilState(sliderAtom);


    useEffect(() => {
        console.log('slider', slider)
    }, [slider]);
    // useEffect(() => {
    //     if (slideDone) {
    //         setSlideDone(false);
    //         setTimeID(
    //             setTimeout(() => {
    //                 slideNext();
    //                 setSlideDone(true);
    //             }, 5000)
    //         );
    //     }
    // }, [slideDone]);

    const slideNext = () => {
        setActiveIndex((val) => {
            if (val >= children.length - 1) {
                return 0;
            } else {
                return val + 1;
            }
        });
    };

    const slidePrev = () => {
        setActiveIndex((val) => {
            if (val <= 0) {
                return children.length - 1;
            } else {
                return val - 1;
            }
        });
    };

    const AutoPlayStop = () => {
        if (timeID > 0) {
            clearTimeout(timeID);
            setSlideDone(false);
        }
    };

    const AutoPlayStart = () => {
        if (!slideDone) {
            setSlideDone(true);
        }
    };

    const handleSliderOpen = () => {
        setSlider({
            ...slider,
            isOpen: false
        })
    };

    return (
        <>
            {slider.isOpen && (
                <div className='slider_wrapper'>
                    <div className='close_button' onClick={handleSliderOpen}>
                        <div className='cross'></div>
                    </div>

                    <div className={"photo_container"}>
                        <img src={slider?.activeImg?.src} alt=""/>
                    </div>
                    {/*<div*/}
                    {/*    className="container__slider"*/}
                    {/*    // onMouseEnter={AutoPlayStop}*/}
                    {/*    // onMouseLeave={AutoPlayStart}*/}
                    {/*>*/}
                    {/*    {children.map((item, index) => {*/}
                    {/*        return (*/}
                    {/*            <div*/}
                    {/*                className={"slider__item slider__item-active-" + (activeIndex + 1)}*/}
                    {/*                key={index}*/}
                    {/*            >*/}
                    {/*                {item}*/}
                    {/*            </div>*/}
                    {/*        );*/}
                    {/*    })}*/}

                    {/*    <div className="container__slider__links">*/}
                    {/*        {children.map((item, index) => {*/}
                    {/*            return (*/}
                    {/*                <button*/}
                    {/*                    key={index}*/}
                    {/*                    className={*/}
                    {/*                        activeIndex === index*/}
                    {/*                            ? "container__slider__links-small container__slider__links-small-active"*/}
                    {/*                            : "container__slider__links-small"*/}
                    {/*                    }*/}
                    {/*                    onClick={(e) => {*/}
                    {/*                        e.preventDefault();*/}
                    {/*                        setActiveIndex(index);*/}
                    {/*                    }}*/}
                    {/*                ></button>*/}
                    {/*            );*/}
                    {/*        })}*/}
                    {/*    </div>*/}

                    {/*    <button*/}
                    {/*        className="slider__btn-next"*/}
                    {/*        onClick={(e) => {*/}
                    {/*            e.preventDefault();*/}
                    {/*            slideNext();*/}
                    {/*        }}*/}
                    {/*    >*/}
                    {/*        {">"}*/}
                    {/*    </button>*/}
                    {/*    <button*/}
                    {/*        className="slider__btn-prev"*/}
                    {/*        onClick={(e) => {*/}
                    {/*            e.preventDefault();*/}
                    {/*            slidePrev();*/}
                    {/*        }}*/}
                    {/*    >*/}
                    {/*        {"<"}*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                </div>
            )}

        </>
    );
}

export default Slider;
