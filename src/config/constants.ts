import { Img1, Img2, Img3 } from "../assets/images";
import {
  ATF,
  DisselEngine,
  EngineOil,
  Gassoline,
  Hydraulic,
  Hydraulic68,
} from "../assets/products";

export const imgAddrss1 =
  "data:image/jpeg;base64,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";
export const imgAddrss2 =
  "data:image/jpeg;base64,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";

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};

export interface HomeTshirtType {
  icon: any;
  title: string;
}

export const heroImage = Img1;

export const phoneNumber =[ 
  "+251 97 431 1111",
  "+251 97 432 2222",
  "+251 97 243 3333",
  "+251 97 234 4444",
]

export const slides = [Img1, Img2, Img3];

// const sliderImages = ["1.jpg", "2.jpg", "3.jpg"];

export interface Product {
  id:number;
  image: any;
  description: string;
  title: string;
  price?: number;
  location?: string;
  benefits: string[];
  extra?: string;
  generalProfile: string;
  meetsExceeds: string;
  usage?: string;
}

export let fbLink = `https://www.facebook.com/profile.php?id=61556431674228&mibextid=ZbWKwL`;
export let tgLink = `https://t.me/hohlubricant`;
export let whatappLink = `https://whatsapp.com/channel/0029VaOAPpJ0bIdpEPB8jG0Y`;



const location = "";
export const products: Product[] = [
  {
    image: ATF,
    id:1,
    title: "HOH 1L DEXRONII 3D",
    description: "this is description",
    generalProfile: `HOH ATF DEXRON II can be used in cars, commercial vehicles, construction machinery and boats. The product has a wide range of applications in automatic gearboxes both with and without torque converter, for power steering, in gears or, depending on manufacturer, in hydraulic systems.
    `,
    location: location,
    benefits: [
      "1-Enhanced friction durability prolongs transmission life and promotes smooth shifting. ",
      "2-Increased resistance to oil oxidation and degradation.",
      "3-Increased clutch band and clutch pack capacity.",
      "4-Improved protection of copper and bronze components",
    ],
    meetsExceeds: `DEXRON II, Ford Mercon, Allison C-4, GM Dex II`,
  },
  {
    id:2,
    image: Hydraulic,
    title: "HOH 20L VG46 20L",
    description: "this is description",
    price: 2300,
    location: location,
    meetsExceeds: "ISO VG, Denisam HF-01/HF-2, HF-0, DIN 51524 and Part 2",
    generalProfile: `HOH ISO VG 46 is designed to give excellent hydraulic pump protection. They are formulated with refined paraffinic base oils.
    They provide excellent anti-wear protection, oxidation and corrosion inhibition, as well as foam and aeration suppression. They have excellent demulsibility characteristics.
    `,
    usage: `HOH Hydraulic Oils are versatile lubricants available in ISO viscosity grades are most commonly used for hydraulics with vane-, piston-, or gear-type pumps, especially where pressures exceed 1000 psi. They can also be used to lubricate lightly loaded reciprocating compressors.`,
    benefits: [
      "1-Excellent Low Temperature Properties.",
      "2-Stable Viscosity Friction.",
      "3-Good Rust and Corrosion.",
      "4-Protection Resists Foaming in Service.",
      "5-Modified for added Lubricity.",
      "6-Excellent Water Separation.",
      "7-Excellent Hydrolytic Stability.",
      "8-Excellent Thermal Stability.",
    ],
  },
  {
    id:3,
    image: Hydraulic68,
    title: "HOH 20L VG68 20L",
    description: "this is description",
    price: 2300,
    location: location,
    meetsExceeds: "ISO VG, Denisam HF-01/HF-2, HF-0, DIN 51524 and Part 2",
    generalProfile: `
    HOH ISO VG 68 is designed to give excellent hydraulic pump protection. They are formulated with refined paraffinic base oils.
They provide excellent anti-wear protection, oxidation and corrosion inhibition, as well as foam and aeration suppression. They have excellent demulsibility characteristics.

    `,
    usage: `HOH Hydraulic Oils are versatile lubricants available in ISO viscosity grades are most commonly used for hydraulics with vane-, piston-, or gear-type pumps, especially where pressures exceed 1000 psi. They can also be used to lubricate lightly loaded reciprocating compressors.`,
    benefits: [
      "1-Excellent Low Temperature Properties.",
      "2-Stable Viscosity Friction.",
      "3-Good Rust and Corrosion.",
      "4-Protection Resists Foaming in Service.",
      "5-Modified for added Lubricity.",
      "6-Excellent Water Separation.",
      "7-Excellent Hydrolytic Stability.",
      "8-Excellent Thermal Stability.",
    ],
  },
  {
    id:4,
    image: DisselEngine,
    title: "SAE 15W-40 25L",
    description: "this is description",
    price: 2300,
    location: location,
    generalProfile: `HOH SAE 15W-40 API CI-4 engine oils designed for diesel powered passenger cars engines of heavy duty vehicles. These are blended using good quality base oils and performance additives to ensure better engine protection. HOH is developed to exceed the performance requirements of API (American Petroleum Institute) CI-4. 
    `,
    benefits: [
      "1-Good thermo-oxidative stability minimises deposits & sludge build-up. API: C",
      "2-Effective rust inhibitors retard formation of rust in critical engine parts.",
      "3-Better anti wear technology minimises engine wear & reduces maintenance costs.",
      "4-Good Stay-in-grade performance ensures reliable",
    ],
    meetsExceeds: `API: CI-4, ACEA A3/B3, E4-08, MB 228.3, CUMMINS
    CES 20074`,
    extra: `lubrication even at higher load & operating temperatures`,
  },
  {
    id:5,
    image: Gassoline,
    title: "HOH 4L 20W-50 SL 3D",
    description: "this is description",
    price: 2300,
    location: location,
    benefits: [
      "1-Good thermo-oxidative stability minimises deposits & sludge build-up. API:",
      "2-Effective rust inhibitors retard formation of rust in critical engine parts.",
      "3-Better anti wear technology minimises engine wear & reduces maintenance costs. ",
      "4-Good Stay-in-grade performance ensures reliable",
    ],
    meetsExceeds: `API: SL, ACEA A3/B3-04, MB 229.1, VW 502 00/505 00`,
    generalProfile: `HOH SAE 20W-50 API SL car motor oils designed for gasoline powered passenger cars engines of light duty vehicles. These are blended using good quality base oils and performance additives to ensure better engine protection. HOH is developed to exceed the performance requirements of API (American Petroleum Institute) SL.
    `,
  },
  {
    id:6,
    image: EngineOil,
    title: "HOH 1L 15W-40 3D",
    description: "this is description",
    price: 2300,
    location: location,
    generalProfile: `HOH SAE 15W-40 API CI-4 engine oils designed for 
    diesel powered passenger cars engines of heavy duty vehicles. 
    These are blended using good quality base oils and 
    performance additives to ensure better engine protection. 
    HOH is developed to exceed the performance requirements of API (American Petroleum Institute) CI-4. `,
    meetsExceeds: "API: CI-4, ACEA E4-08, A3/B3, MB 228.3,CUMMINS CES 20071",
    benefits: [
      "1-Good thermo-oxidative stability minimises deposits & sludge build-up. API: CI-4",
      " 2-Effective rust inhibitors retard formation of rust in critical engine parts.",
      "3-Better anti wear technology minimises engine wear & reduces maintenance costs.",
      "4-Good Stay-in-grade performance ensures reliable",
    ],
    extra: "lubrication even at higher load & operating temperatures",
  },
];
