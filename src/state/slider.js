import { atom, selector } from 'recoil';

const sliderAtom = atom({
  key: 'sliderAtom',
  default: {
    isOpen: false,
    activeImg: '',
    photos:
        [
          {
            src: "https://images.squarespace-cdn.com/content/v1/642ec98e04b4a869e47cf1f3/da656238-91f4-4e2f-bda2-c95fae52e42d/unknown_296696544_557342942799968_582986074733795012_n.jpg",
            width: 600,
            height: 800
          },
          {
            src: "https://images.squarespace-cdn.com/content/v1/642ec98e04b4a869e47cf1f3/c5c192aa-93bc-4cf7-9816-c9114ac6e988/09_07_23_WEMBLEY_TOMPALLANT-DSC01393.jpg",
            width: 700,
            height: 460
          },
          {
            src: "https://images.squarespace-cdn.com/content/v1/642ec98e04b4a869e47cf1f3/52e952c3-ffdc-4fed-a5ea-608a1e2f4661/unknown_334122636_718543903282931_4963073437366886815_n.jpg",
            width: 720,
            height: 850
          },
          {
            src: "https://images.squarespace-cdn.com/content/v1/642ec98e04b4a869e47cf1f3/924ed344-1fc6-49ff-a00d-d718fe49ffeb/FONTAINESAPOLLO-04716.jpg",
            width: 700,
            height: 850
          },
          {
            src: "https://images.squarespace-cdn.com/content/v1/642ec98e04b4a869e47cf1f3/bdc1ab1c-1be0-4516-b7c7-290315ebc698/WHENWEDIEFILM-DOMYACHTY_FOREST.jpg",
            width: 690,
            height: 690
          },
          {
            src: "https://images.squarespace-cdn.com/content/v1/642ec98e04b4a869e47cf1f3/085b6800-8d81-4530-98ca-0220281a3496/unknown_309056016_818949779462622_4081565718149293580_n.jpg",
            width: 690,
            height: 460
          },
            {
                src: "https://images.squarespace-cdn.com/content/v1/642ec98e04b4a869e47cf1f3/085b6800-8d81-4530-98ca-0220281a3496/unknown_309056016_818949779462622_4081565718149293580_n.jpg",
                width: 690,
                height: 460
            },
            {
                src: "https://images.squarespace-cdn.com/content/v1/642ec98e04b4a869e47cf1f3/085b6800-8d81-4530-98ca-0220281a3496/unknown_309056016_818949779462622_4081565718149293580_n.jpg",
                width: 690,
                height: 460
            },
            {
                src: "https://images.squarespace-cdn.com/content/v1/642ec98e04b4a869e47cf1f3/085b6800-8d81-4530-98ca-0220281a3496/unknown_309056016_818949779462622_4081565718149293580_n.jpg",
                width: 690,
                height: 460
            },
        ]
  },
});

const slider = selector({
  key: 'slider',
  get: ({ get }) => {
    return get(sliderAtom);
  },
});

export { sliderAtom, slider };
