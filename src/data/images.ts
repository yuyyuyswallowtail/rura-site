import type { ImageAsset } from "./types";

// Central, deterministic image config. Photographer metadata is not known,
// so every credit reads "Photo via Unsplash". Swap an id here to change an image everywhere.
const url = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1800&q=80`;
const CREDIT = "Photo via Unsplash";
const mk = (id: string, alt: string, caption: string): ImageAsset => ({
  src: url(id),
  alt,
  caption,
  credit: CREDIT,
});

export const IMG = {
  plant: mk(
    "photo-1513828583688-c52646db42da",
    "Industrial processing plant under open sky",
    "Industrial processing facility.",
  ),
  factory: mk(
    "photo-1565008447742-97f6f38c985c",
    "Interior of a heavy-industry manufacturing hall",
    "Manufacturing hall, heavy industry.",
  ),
  lab: mk(
    "photo-1581092160562-40aa08e78837",
    "Engineers working with equipment in a laboratory",
    "Engineering laboratory.",
  ),
  lab2: mk(
    "photo-1581094794329-c8112a89af12",
    "Laboratory bench with analytical equipment",
    "Analytical bench work.",
  ),
  lab3: mk(
    "photo-1532094349884-543bc11b234d",
    "Glassware and samples in a laboratory",
    "Sample preparation.",
  ),
  lab4: mk(
    "photo-1581093458791-9f3c3900df4b",
    "Researcher working at an instrument",
    "Instrument calibration.",
  ),
  worker: mk(
    "photo-1504917595217-d4dc5ebe6122",
    "Industrial worker in protective gear",
    "Operations on an industrial line.",
  ),
  construction: mk(
    "photo-1541888946425-d81bb19240f5",
    "Construction site with structural frame",
    "Construction and infrastructure.",
  ),
  site: mk(
    "photo-1504328345606-18bbc8c9d7d1",
    "Building site with materials and machinery",
    "Materials on site.",
  ),
  concrete: mk(
    "photo-1590069261209-f8e9b8642343",
    "Concrete infrastructure structure",
    "Concrete infrastructure.",
  ),
  crane: mk(
    "photo-1621905251189-08b45d6a269e",
    "Cranes at a construction site",
    "Heavy construction.",
  ),
  builder: mk(
    "photo-1587293852726-70cdb56c2866",
    "Construction worker on site",
    "Work on site.",
  ),
  tower: mk(
    "photo-1486406146926-c627a92ad1ab",
    "Modern concrete and glass building",
    "Built environment.",
  ),
  power: mk(
    "photo-1473341304170-971dccb5ac1e",
    "Electricity pylons across a landscape",
    "Power transmission.",
  ),
  solar: mk(
    "photo-1509391366360-2e959784a276",
    "Solar panels in a field",
    "Renewable generation.",
  ),
  wind: mk(
    "photo-1466611653911-95081537e5b7",
    "Wind turbines on a hillside",
    "Wind energy.",
  ),
  portrait1: mk(
    "photo-1494790108377-be9c29b29330",
    "Stock portrait used for a fictional team member",
    "Portrait image, stock photo",
  ),
  portrait2: mk(
    "photo-1500648767791-00dcc994a43e",
    "Stock portrait used for a fictional team member",
    "Portrait image, stock photo",
  ),
  portrait3: mk(
    "photo-1438761681033-6461ffad8d80",
    "Stock portrait used for a fictional team member",
    "Portrait image, stock photo",
  ),
  portrait4: mk(
    "photo-1507003211169-0a1dd7228f2d",
    "Stock portrait used for a fictional team member",
    "Portrait image, stock photo",
  ),
} as const;
