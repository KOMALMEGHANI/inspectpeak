import aboutTeam from "@/assets/about-team.jpg";
import afterCrack from "@/assets/after-crack.jpg";
import afterElectrical from "@/assets/after-electrical.jpg";
import afterMoisture from "@/assets/after-moisture.jpg";
import afterSnagging from "@/assets/after-snagging.jpg";
import afterTerrace from "@/assets/after-terrace.jpg";
import afterWaterproofing from "@/assets/after-waterproofing.jpg";
import beforeElectrical from "@/assets/before-electrical.jpg";
import defectTerrace from "@/assets/defect-terrace.jpg";
import galleryDrawings from "@/assets/gallery-drawings.jpg";
import galleryInprogress from "@/assets/gallery-inprogress.jpg";
import galleryMoisture from "@/assets/gallery-moisture.jpg";
import galleryResidential from "@/assets/gallery-residential.jpg";
import serviceSnagging from "@/assets/service-snagging.jpg";
import serviceStructural from "@/assets/service-structural.jpg";
import serviceWaterproofing from "@/assets/service-waterproofing.jpg";
import type { GalleryItem } from "@/components/Gallery";

export const galleryItems: GalleryItem[] = [
  {
    src: serviceStructural,
    afterSrc: afterCrack,
    title: "Wall crack inspection",
    alt: "Crack measuring scale held against a cracked concrete column during inspection",
    afterAlt:
      "Same concrete balcony column repaired, smoothly plastered and freshly painted after rectification",
    category: "Cracks",
    beforeNote: "Before: Visible diagonal crack measured on balcony column",
    afterNote: "After: Substrate verified, crack repaired, plastered & painted",
  },
  {
    src: galleryMoisture,
    afterSrc: afterMoisture,
    title: "Wall dampness detection",
    alt: "Torch beam revealing dampness and salt deposits on an interior plastered wall",
    afterAlt:
      "Same interior wall dried, waterproof-primed and cleanly repainted after source repair",
    category: "Moisture",
    beforeNote: "Before: Active wall dampness, salt deposits & peeling paint",
    afterNote: "After: Moisture source sealed, dried, waterproof-primed & repainted",
  },
  {
    src: serviceWaterproofing,
    afterSrc: afterWaterproofing,
    title: "Ceiling seepage inspection",
    alt: "Inspector pointing at seepage stains and peeling paint on a ceiling near a bathroom",
    afterAlt:
      "Same ceiling near bathroom completely dry, smoothly plastered and freshly painted white",
    category: "Moisture",
    beforeNote: "Before: Overhead ceiling seepage stains & flaking paint",
    afterNote: "After: Upper wet-area leak fixed, slab dried & ceiling restored",
  },
  {
    src: serviceSnagging,
    afterSrc: afterSnagging,
    title: "Floor tile inspection",
    alt: "Inspector checking floor tile levelling and joints with a spirit level",
    afterAlt:
      "Same apartment floor with perfectly levelled flush vitrified tiles and uniform grout",
    category: "Finishing",
    beforeNote: "Before: Uneven floor tile lippage & hollow spots flagged",
    afterNote: "After: Tiles re-laid flush on full-bed adhesive with uniform grout",
  },
  {
    src: defectTerrace,
    afterSrc: afterTerrace,
    title: "Terrace crack documentation",
    alt: "Cracked and weathered rooftop terrace with water pooling before waterproofing review",
    afterAlt:
      "Same rooftop terrace finished with seamless elastomeric waterproofing membrane and dry surface",
    category: "Cracks",
    beforeNote: "Before: Cracked terrace screed & standing water puddles",
    afterNote: "After: Cracks sealed, coving rebuilt & elastomeric waterproofing applied",
  },
  {
    src: galleryDrawings,
    title: "Structural drawings review",
    alt: "Structural engineering drawings of a residential building with scale ruler and pencil",
    category: "Drawings",
  },
  {
    src: aboutTeam,
    title: "Site drawings review",
    alt: "Engineers reviewing structural drawings at a project site office",
    category: "Drawings",
  },
  {
    src: galleryInprogress,
    afterSrc: galleryResidential,
    title: "Building inspection in progress",
    alt: "Engineer in hard hat recording observations on a tablet at an under-construction building",
    afterAlt: "Completed modern Indian residential apartment complex after handover",
    category: "On Site",
    beforeNote: "Before: Stage-wise inspection during construction",
    afterNote: "After: Completed & verified modern residential handover",
  },
  {
    src: beforeElectrical,
    afterSrc: afterElectrical,
    title: "Electrical switchboard inspection",
    alt: "Inspector testing a crooked modular electrical switchboard with broken plaster gaps and a dislodged power socket",
    afterAlt:
      "Same modular electrical switchboard aligned level with flush sockets and smooth painted wall after rectification",
    category: "Electrical",
    beforeNote: "Before: Crooked switchboard, loose socket & broken wall cutout",
    afterNote: "After: Aligned plumb, socket secured, polarity tested & wall restored",
  },
];
