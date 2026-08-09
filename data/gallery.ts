export type GalleryCategory = "Riad" | "Rooms" | "Courtyard" | "Rooftop" | "Details";
export interface GalleryItem { id:string; title:string; category:GalleryCategory; imageUrl:string; aspectRatio:"portrait"|"landscape"|"square"; caption:string }
export const galleryData: GalleryItem[] = [
 {id:"g-1",title:"The blue courtyard",category:"Courtyard",imageUrl:"/images/property/1566665797739-1674de7a421a.jpg",aspectRatio:"portrait",caption:"A tranquil courtyard framed by arches, greenery and hand-cut tile."},
 {id:"g-2",title:"Atlas Suite terrace",category:"Rooms",imageUrl:"/images/property/1590490360182-c33d57733427.jpg",aspectRatio:"landscape",caption:"Woven textures and open air above the medina."},
 {id:"g-3",title:"Rooftop at dusk",category:"Rooftop",imageUrl:"/images/property/1507652313519-d4e9174996dd.jpg",aspectRatio:"landscape",caption:"Amber evening light across the imagined rooftop."},
 {id:"g-4",title:"The Zellige Room",category:"Rooms",imageUrl:"/images/property/1540555700478-4be289fbecef.jpg",aspectRatio:"portrait",caption:"Tadelakt, pattern and a soft, restful palette."},
 {id:"g-5",title:"Artisan detail",category:"Details",imageUrl:"/images/property/1578683010236-d716f9a3f461.jpg",aspectRatio:"square",caption:"Handmade textures give every corner a sense of place."},
 {id:"g-6",title:"Morning in the riad",category:"Riad",imageUrl:"/images/property/1582719478250-c89cae4dc85b.jpg",aspectRatio:"landscape",caption:"Filtered light moves through the shared salon."},
 {id:"g-7",title:"A Moroccan breakfast",category:"Details",imageUrl:"/images/property/1533089860892-a7c6f0a88666.jpg",aspectRatio:"portrait",caption:"Mint tea, fresh bread and seasonal fruit, imagined for slow mornings."},
 {id:"g-8",title:"The Medina Room",category:"Rooms",imageUrl:"/images/property/1591088398332-8a7791972843.jpg",aspectRatio:"square",caption:"Warm light and woven cloth in an intimate retreat."},
 {id:"g-9",title:"Beyond the medina",category:"Riad",imageUrl:"/images/property/1509316975850-ff9c5deb0cd9.jpg",aspectRatio:"landscape",caption:"A sense of the ochre landscape beyond Marrakech."},
];
