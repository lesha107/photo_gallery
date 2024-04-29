import React from 'react';
import PhotoAlbum from "react-photo-album";
import useScreenSize from "../../../../hooks/useScreenSize";
import Slider from "../../../../components/Slider/Slider.component";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {sliderAtom} from "../../../../state/slider";


// const unsplashPhotos = [
//     {
//         src: "https://images.squarespace-cdn.com/content/v1/642ec98e04b4a869e47cf1f3/da656238-91f4-4e2f-bda2-c95fae52e42d/unknown_296696544_557342942799968_582986074733795012_n.jpg",
//         width: 600,
//         height: 800
//     },
//     {
//         src: "https://images.squarespace-cdn.com/content/v1/642ec98e04b4a869e47cf1f3/c5c192aa-93bc-4cf7-9816-c9114ac6e988/09_07_23_WEMBLEY_TOMPALLANT-DSC01393.jpg",
//         width: 700,
//         height: 460
//     },
//     {
//         src: "https://images.squarespace-cdn.com/content/v1/642ec98e04b4a869e47cf1f3/52e952c3-ffdc-4fed-a5ea-608a1e2f4661/unknown_334122636_718543903282931_4963073437366886815_n.jpg",
//         width: 720,
//         height: 850
//     },
//     {
//         src: "https://images.squarespace-cdn.com/content/v1/642ec98e04b4a869e47cf1f3/924ed344-1fc6-49ff-a00d-d718fe49ffeb/FONTAINESAPOLLO-04716.jpg",
//         width: 700,
//         height: 850
//     },
//     {
//         src: "https://images.squarespace-cdn.com/content/v1/642ec98e04b4a869e47cf1f3/bdc1ab1c-1be0-4516-b7c7-290315ebc698/WHENWEDIEFILM-DOMYACHTY_FOREST.jpg",
//         width: 690,
//         height: 690
//     },
//     {
//         src: "https://images.squarespace-cdn.com/content/v1/642ec98e04b4a869e47cf1f3/085b6800-8d81-4530-98ca-0220281a3496/unknown_309056016_818949779462622_4081565718149293580_n.jpg",
//         width: 690,
//         height: 460
//     },
// ];


const Gallery = () => {
    const screenSize = useScreenSize();
    const slider = useRecoilValue(sliderAtom);
    const setSlider = useSetRecoilState(sliderAtom);

    console.log('slider',slider);

    const handleSlider = (image) => {
        console.log('zdes');
        setSlider({
            ...slider,
            activeImg: image.photo,
            isOpen: true
        })
    }
    return (
        <>
            <PhotoAlbum
                layout="masonry"
                columns={({containerWidth}) => {
                    if (screenSize.width < 1200) {
                        return 2;
                    }
                    return 3;
                }}
                spacing={12}
                padding={0}
                targetRowHeight={'100%'}
                // sizes={{
                //     size: "992px",
                //     sizes: [
                //         { viewport: "(max-width: 767px)", size: "calc(100vw - 32px)" },
                //         { viewport: "(max-width: 1279px)", size: "calc(100vw - 288px)" },
                //     ],
                // }}
                photos={slider.photos}
                onClick={(index) => {
                    console.log('index',index);
                    handleSlider(index)
                }
                }
                componentsProps={(containerWidth) => ({
                    imageProps: {loading: (containerWidth || 0) > 600 ? "eager" : "lazy"},
                })}
            />
            <Slider>
                {slider.photos.map((image, index) => {
                    return <img key={index} src={image.src} alt="photo"/>;
                })}
            </Slider>
        </>
    );
};

export default Gallery;
