import heroHundredIslands from '../assets/images/hundred-islands-hero.jpg'

import heroBalungao from '../assets/images/balungao-hero.jpg'

import aboutHundredIslands from '../assets/images/about-hundred-islands.jpg'

import governorsIsland from '../assets/images/governors-island.jpg'
import quezonIsland from '../assets/images/quezon-island.jpg'
import childrensIsland from '../assets/images/childrens-island.jpg'
import marcosIsland from '../assets/images/marcos-island.jpg'
import pilgrimageIsland from '../assets/images/pilgrimage-island.jpg'
import lopezIsland from '../assets/images/lopez-island.jpg'
import hotSpringPools from '../assets/images/hot-spring-pools.jpg'
import coldSpringPools from '../assets/images/cold-spring-pools.jpg'
import mtBalungao from '../assets/images/mt-balungao.jpg'
import naturalLandscape from '../assets/images/natural-landscape.jpg'
import resortArea from '../assets/images/resort-area.jpg'
import hilltopView from '../assets/images/hilltop-view.jpg'




const bolinaoHero =
  'https://commons.wikimedia.org/wiki/Special:FilePath/Cape%20Bolinao%20Lighthouse.jpg'
const bolinaoImg1 = 'https://commons.wikimedia.org/wiki/Special:FilePath/Bolinao%20Lighthouse%20001.JPG'
const bolinaoImg2 = 'https://commons.wikimedia.org/wiki/Special:FilePath/Bolinao%20Lighthouse%20002.JPG'
const bolinaoImg3 = 'https://commons.wikimedia.org/wiki/Special:FilePath/Bolinao%20Lighthouse%20003.JPG'
const bolinaoImg4 = 'https://commons.wikimedia.org/wiki/Special:FilePath/Bolinao%20beacon.JPG'
const bolinaoImg5 =
  'https://commons.wikimedia.org/wiki/Special:FilePath/Cape%20Bolinao%20Lighthouse%2C%20Pangasinan.jpg'
const bolinaoImg6 =
  'https://commons.wikimedia.org/wiki/Special:FilePath/Light%20House%2C%20Cape%20Bolinao%2C%20Philippines%20-%20panoramio.jpg'

export const destinations = [
  {
    id: 'hundred-islands',
    slug: 'hundred-islands',
    route: '#/hundred-islands',
    navLabel: 'Hundred Islands',
    name: 'Hundred Islands National Park',
    heroTitle: 'HUNDRED ISLANDS',
    subtitle: 'Nature scattered across the sea.',
    location: 'Alaminos City, Pangasinan, Philippines',
    heroImage: heroHundredIslands,
    heroAlt: 'Panoramic view of the limestone islets of Hundred Islands National Park at sunset',
    cardImage: aboutHundredIslands,
    cardAlt: 'Limestone islands of Hundred Islands National Park surrounded by turquoise water',
    shortDescription:
      'A breathtaking collection of limestone islands surrounded by the waters of the Lingayen Gulf.',
    famousForHeading: 'Famous For',
    famousFor:
      'Hundred Islands National Park is famous for its numerous limestone islands and islets surrounded by clear waters. It is one of the most recognizable natural attractions in Pangasinan and is known for its distinctive island landscapes and coastal scenery.',
    descriptionHeading: 'About Hundred Islands',
    description:
      "Hundred Islands National Park is a protected natural attraction situated along the Lingayen Gulf. The area features numerous limestone islands and islets scattered across the sea, creating a distinctive landscape that has become one of Pangasinan's most recognizable destinations.",
    galleryHeading: 'Explore the Islands',
    gallery: [
      
      { src: governorsIsland, alt: 'Coastline and water surrounding Governor\u2019s Island', caption: 'Governors Island', size: 'tall' },
      { src: quezonIsland, alt: 'Close view of limestone island formations at Quezon Island', caption: 'Quezon Island', size: 'square' },
      { src: childrensIsland, alt: 'Aerial-style view of the islands scattered across Lingayen Gulf', caption: 'Childrens Island', size: 'square' },
      { src: marcosIsland, alt: 'Boats anchored beside the islands at Marcos Island', caption: 'Marco Island', size: 'tall' },
      { src: pilgrimageIsland, alt: 'Golden hour light over Pilgrimage Island', caption: 'Pilgrimage', size: 'wide' },
    ],
    extraHeading: 'Why Hundred Islands?',
    extraText:
      'Its combination of limestone formations, surrounding waters, and expansive coastal scenery makes Hundred Islands a remarkable destination for visitors who want to experience the natural beauty of Pangasinan.',
    extraImage: lopezIsland,
  },
  {
    id: 'bolinao-lighthouse',
    slug: 'bolinao-lighthouse',
    route: '#/bolinao-lighthouse',
    navLabel: 'Bolinao Lighthouse',
    name: 'Cape Bolinao Lighthouse',
    heroTitle: 'CAPE BOLINAO LIGHTHOUSE',
    subtitle: 'Where history meets the coast.',
    location: 'Patar, Bolinao, Pangasinan, Philippines',
    heroImage: bolinaoHero,
    heroAlt: 'Cape Bolinao Lighthouse standing above the coastline of Bolinao, Pangasinan',
    cardImage: bolinaoImg5,
    cardAlt: 'Cape Bolinao Lighthouse tower viewed from the coastal grounds',
    shortDescription: 'A historic lighthouse standing above the scenic coastline of Bolinao.',
    famousForHeading: 'Famous For',
    famousFor:
      'Cape Bolinao Lighthouse is famous for its historical significance, distinctive lighthouse structure, and scenic location overlooking the coast of Bolinao.',
    descriptionHeading: 'About Cape Bolinao Lighthouse',
    description:
      'Cape Bolinao Lighthouse is a historic lighthouse located on Punta Piedra Point in Bolinao. Built in 1905, it is one of the historic lighthouses in the Philippines. Its elevated location and surrounding coastal landscape make it a recognizable landmark in Pangasinan.',
    galleryHeading: 'Explore the Lighthouse',
    gallery: [
      { src: bolinaoImg5, alt: 'Full exterior view of the Cape Bolinao Lighthouse tower', caption: 'Lighthouse Exterior', size: 'tall' },
      { src: bolinaoImg1, alt: 'Cape Bolinao Lighthouse seen together with the surrounding coastline', caption: 'Coastal Perspective', size: 'wide' },
      { src: bolinaoImg2, alt: 'Close-up view emphasizing the architectural details of the lighthouse tower', caption: 'Lighthouse Tower', size: 'square' },
      { src: bolinaoImg3, alt: 'Wide view of the landscape surrounding Cape Bolinao Lighthouse', caption: 'Landscape View', size: 'square' },
      { src: bolinaoImg4, alt: 'Pathway and grounds leading toward the lighthouse', caption: 'Pathway & Surroundings', size: 'tall' },
      { src: bolinaoImg6, alt: 'Panoramic view of Cape Bolinao Lighthouse and its surroundings', caption: 'Panoramic View', size: 'wide' },
    ],
    extraHeading: 'A Landmark of History',
    extraText:
      "Built in 1905, Cape Bolinao Lighthouse represents an important part of the province's coastal and maritime heritage. Its historic structure continues to stand as one of Bolinao's recognizable landmarks.",
    extraImage: bolinaoImg1,
  },
  {
    id: 'balungao-hot-spring',
    slug: 'balungao-hot-spring',
    route: '#/balungao-hot-spring',
    navLabel: 'Balungao Hot Spring',
    name: 'Balungao Hot Spring',
    heroTitle: 'BALUNGAO HOT SPRING',
    subtitle: 'A warm escape surrounded by nature.',
    location: 'Balungao, Pangasinan, Philippines',
    heroImage: heroBalungao,
    heroAlt: 'Warm thermal pools of Balungao Hot Spring surrounded by hillside greenery',
    cardImage: heroBalungao,
    cardAlt: 'Balungao Hot Spring thermal pool',
    shortDescription:
      'A peaceful natural destination known for its warm thermal waters and surrounding landscape.',
    famousForHeading: 'Famous For',
    famousFor:
      'Balungao Hot Spring is famous for its naturally warm thermal waters and peaceful natural surroundings, making it a distinctive destination in Pangasinan.',
    descriptionHeading: 'About Balungao Hot Spring',
    description:
      'Balungao Hot Spring is a natural attraction in the municipality of Balungao known for its warm thermal waters and surrounding landscape. It offers visitors a peaceful environment where they can appreciate the area\u2019s natural scenery and unique thermal features.',
    galleryHeading: 'Discover Balungao Hot Spring',
    gallery: [
      { src: hotSpringPools, filename: 'hot-spring-pools.jpg', alt: 'Thermal pools at Balungao Hot Spring', caption: 'Hot Spring Pools', size: 'wide' },
      { src: coldSpringPools, filename: 'natural-landscape.jpg', alt: 'Wide view of the natural scenery surrounding Balungao Hot Spring', caption: 'Cold Spring Pools', size: 'tall' },
      { src: mtBalungao, filename: 'thermal-water.jpg', alt: 'Close-up of the warm spring water at Balungao', caption: 'Mt. Balungao', size: 'square' },
      { src: naturalLandscape, filename: 'mountain-view.jpg', alt: 'View of the hills surrounding Balungao Hot Spring', caption: 'Natural Landscape', size: 'square' },
      { src: resortArea, filename: 'resort-area.jpg', alt: 'The developed resort area around Balungao Hot Spring', caption: 'Resort Area', size: 'tall' },
      { src: hilltopView, filename: 'evening-view.jpg', alt: 'Balungao Hot Spring during the late afternoon', caption: 'Hill Top View', size: 'wide' },
    ],
    extraHeading: 'Why Balungao Hot Spring?',
    extraText:
      'Its warm thermal pools and quiet, tree-shaded surroundings make Balungao Hot Spring a peaceful destination for visitors looking to slow down and unwind away from the coast.',
    extraImage: null,
  },
]

export function getDestination(id) {
  return destinations.find((d) => d.id === id)
}
