import aboutTeam from "@/assets/about-team.jpg";
import defectTerrace from "@/assets/defect-terrace.jpg";
import galleryDrawings from "@/assets/gallery-drawings.jpg";
import galleryInprogress from "@/assets/gallery-inprogress.jpg";
import galleryMoisture from "@/assets/gallery-moisture.jpg";
import galleryResidential from "@/assets/gallery-residential.jpg";
import heroInspection from "@/assets/hero-inspection.jpg";
import serviceSnagging from "@/assets/service-snagging.jpg";
import serviceStructural from "@/assets/service-structural.jpg";
import serviceWaterproofing from "@/assets/service-waterproofing.jpg";
import type { GalleryItem } from "@/components/Gallery";

export const galleryItems: GalleryItem[] = [
  {
    src: serviceStructural,
    title: "Wall crack inspection",
    alt: "Crack measuring scale held against a cracked concrete column during inspection",
    category: "Cracks",
  },
  {
    src: galleryMoisture,
    title: "Wall dampness detection",
    alt: "Torch beam revealing dampness and salt deposits on an interior plastered wall",
    category: "Moisture",
  },
  {
    src: serviceWaterproofing,
    title: "Ceiling seepage inspection",
    alt: "Inspector pointing at seepage stains and peeling paint on a ceiling near a bathroom",
    category: "Moisture",
  },
  {
    src: serviceSnagging,
    title: "Floor tile inspection",
    alt: "Inspector checking floor tile levelling and joints with a spirit level",
    category: "Finishing",
  },
  {
    src: galleryDrawings,
    title: "Structural drawings review",
    alt: "Structural engineering drawings of a residential building with scale ruler and pencil",
    category: "Drawings",
  },
  {
    src: aboutTeam,
    title: "Design documentation",
    alt: "Engineers reviewing structural drawings at a project site office",
    category: "Drawings",
  },
  {
    src: galleryInprogress,
    title: "Building inspection in progress",
    alt: "Engineer in hard hat recording observations on a tablet at an under-construction building",
    category: "On Site",
  },
  {
    src: heroInspection,
    title: "Facade assessment",
    alt: "Engineer inspecting the exterior facade of a modern residential apartment building",
    category: "On Site",
  },
  {
    src: galleryResidential,
    title: "Modern residential property",
    alt: "Modern Indian residential apartment complex with landscaped entrance",
    category: "Residences",
  },
  {
    src: defectTerrace,
    title: "Terrace crack documentation",
    alt: "Cracked and weathered rooftop terrace with water pooling before waterproofing review",
    category: "Cracks",
  },
];
