export interface ProjectChallenge {
  challenge: string;
  solution: string;
}

export interface Project {
  id: string;
  slug: string;
  code: string;
  title: string;
  description: string;
  extendedDescription: string[];
  image: string;
  scope: string;
  materials: string;
  duration: string;
  location: string;
  phase: string;
  specCode: string;
  gallery: string[];
  challenges: ProjectChallenge[];
}

export const projects: Project[] = [
  {
    id: 'PRJ-001',
    slug: 'meridian-overpass',
    code: 'CAP-03 / Civil Infrastructure',
    title: 'Meridian Overpass',
    description: 'A 480-meter elevated interchange connecting the eastbound expressway to the industrial corridor, built without closing the existing three-lane arterial beneath it. The project required staged pours across fourteen pier caps, each sequenced around live traffic windows, and post-tensioned box girders fabricated off-site to cut on-location crane time by nearly a third.',
    extendedDescription: [
      'The Meridian Overpass project represents a benchmark in heavy civil grade separation under live load constraints. Constructing a 480-meter elevated highway interchange directly above an active six-lane municipal corridor required high-precision engineering and staged structural steel and concrete pours. The primary structural strategy relied on fourteen pre-cast, post-tensioned concrete pier caps supported by deep foundation pile structures driven 28 meters into dense subgrade.',
      'To keep transit disruptions at zero, critical structural lifts and box girder installations were sequenced exclusively during scheduled four-hour nightly maintenance windows. Pre-stressing and off-site steel fabrication allowed the engineering team to reduce heavy crane operation time by 35% on location. In addition, high-durability elastomeric bearings were integrated at each pier cap to mitigate seismic acceleration and ensure structural longevity under heavy freight loads.',
      'The final execution was delivered four months ahead of schedule, proving that meticulous logistics modeling and BIM-integrated structural tracking can eliminate the typical delays associated with urban infrastructure developments.'
    ],
    image: '/images/projects/meridian-overpass.png',
    scope: 'Elevated interchange, 6 spans',
    materials: 'Post-tensioned concrete, structural steel bearings',
    duration: '26 months',
    location: 'Eastbound Corridor, District 4',
    phase: 'DELIVERED / -4MO AHEAD OF SCHED',
    specCode: 'SPEC-03-CIVIL',
    gallery: [
      '/images/crane-sunset.jpg',
      '/images/concrete-pour.jpg',
      '/images/road-grading.jpg',
      '/images/rebar-mesh.jpg'
    ],
    challenges: [
      {
        challenge: 'Executing staged concrete pours for high-load pier caps directly above a high-volume transit corridor without closing traffic lanes.',
        solution: 'Engineered a custom overhead shoring gantry system that acted as a physical shield and structural support, allowing traffic to flow safely underneath while concrete cured above.'
      },
      {
        challenge: 'Achieving precise horizontal alignment of pre-stressed concrete box girders across a curved 6-span geometry.',
        solution: 'Utilized real-time laser telemetry and automated hydraulic jacks to adjust girder positions within a 1.5mm tolerance threshold prior to high-strength grout injection.'
      },
      {
        challenge: 'Driving heavy foundation piles in close proximity to sensitive municipal utility mains.',
        solution: 'Implemented continuous seismic vibration monitoring and transitioned from impact driving to hydraulic press-in piling methods when within 5 meters of active utility corridors.'
      }
    ]
  },
  {
    id: 'PRJ-002',
    slug: 'foundry-row-redevelopment',
    code: 'CAP-01 / Commercial & Industrial',
    title: 'Foundry Row Redevelopment',
    description: 'Adaptive reuse of a decommissioned 1960s foundry into a 92,000 sq ft mixed industrial-office complex. The brief was to preserve the original steel truss roofline and brick shell while retrofitting the interior for modern load and seismic standards—meaning most of the engineering happened invisibly, inside walls the client insisted stay untouched. Original crane rail beams were kept and repurposed.',
    extendedDescription: [
      'Foundry Row Redevelopment involved the adaptive reuse and structural rehabilitation of a decommissioned 1960s foundry building, transforming it into a 92,000 square foot modern industrial-office hybrid. The project core requirement was to preserve the historic masonry facade and the iconic overhead steel truss system while bringing the structural capacity and seismic resistance up to modern municipal building codes.',
      'This required structural surgery: installing an independent, interior structural steel skeleton that transfers loads directly to new micropile foundations, completely isolating the historic brick envelope from the primary gravity and lateral loads. Existing overhead crane rail beams were blast-cleaned, structural certified, and integrated into the architectural design as functional seismic bracing elements.',
      'The interior seismic diaphragm was reinforced through the addition of a high-tolerance composite concrete deck, which locks the historic brick walls to the new interior steel frame. The project demonstrated that historic preservation and structural grade retrofitting do not need to be mutually exclusive.'
    ],
    image: '/images/projects/foundry-row.png',
    scope: 'Adaptive reuse, structural retrofit',
    materials: 'Reclaimed steel truss, reinforced masonry, glazed atrium',
    duration: '14 months',
    location: 'Foundry Row, Riverside District',
    phase: 'DELIVERED / COMPLETED',
    specCode: 'SPEC-01-RETROFIT',
    gallery: [
      '/images/steel-frame.jpg',
      '/images/steel-welding.jpg',
      '/images/scaffolding.jpg',
      '/images/structural-beams.jpg'
    ],
    challenges: [
      {
        challenge: 'Supporting the gravity load of the historic steel truss roof while excavating and pouring new interior foundations.',
        solution: 'Designed a temporary load-transfer shoring matrix using heavy hydraulic jacks to temporarily carry the roof load, transferring it to external foundations during core excavation.'
      },
      {
        challenge: 'Strengthening the unreinforced masonry (URM) exterior shell without altering its historic character.',
        solution: 'Applied a shotcrete layer reinforced with carbon-fiber grid sheets to the interior face of the brick walls, tying them directly to the new structural steel frame with chemical anchors.'
      },
      {
        challenge: 'Integrating modern HVAC and heavy electrical infrastructure without compromising the open, double-height industrial volumes.',
        solution: 'Routed main utility trunks through sub-floor concrete utility trenches and integrated secondary distribution lines within the restored overhead crane rail webs.'
      }
    ]
  },
  {
    id: 'PRJ-003',
    slug: 'basin-water-treatment',
    code: 'CAP-03 / Civil Infrastructure',
    title: 'Basin Water Treatment Expansion',
    description: 'Expansion of an active municipal water treatment facility to double filtration capacity, built in three isolated phases so the plant never dropped below operational minimums. Included new sedimentation tanks, a reinforced pump house, and full seismic bracing retrofit on the original 1980s structure. Coordinated around strict environmental containment protocols.',
    extendedDescription: [
      'The Basin Water Treatment Expansion project doubled the processing capacity of an active municipal facility to 80 million gallons per day. Because the facility serves as a critical regional utility, the construction schedule was divided into three isolated, independent phases to ensure the plant never dropped below its operational minimum processing baseline.',
      'The expansion included the construction of two new 120-foot diameter circular concrete clarifier basins, a heavy-duty pump house, and a chemical dosing building. All structures were engineered with chemical-resistant, high-strength concrete mixes and epoxy-coated rebar to prevent corrosion from chlorine and ozone exposure.',
      'Additionally, the existing 1980s filtration building underwent a comprehensive seismic upgrade, involving the installation of external concrete shear walls and steel brace frames. The coordination of mechanical, electrical, and structural systems required strict adherence to environmental containment protocols to prevent any runoff into the adjacent reservoir.'
    ],
    image: '/images/projects/basin-water-treatment.png',
    scope: 'Facility expansion, seismic retrofit',
    materials: 'Reinforced concrete, corrosion-resistant steel piping',
    duration: '19 months',
    location: 'Basin Municipal Water Authority',
    phase: 'DELIVERED / ZERO INCIDENT',
    specCode: 'SPEC-03-HYDRO',
    gallery: [
      '/images/foundation-pour.jpg',
      '/images/excavator-work.jpg',
      '/images/safety-vest.jpg',
      '/images/refinery-night.jpg'
    ],
    challenges: [
      {
        challenge: 'Tie-in of new high-diameter intake manifolds into the active water treatment system without interrupting the main municipal supply.',
        solution: 'Utilized line tapping and bypass pumping procedures under live hydraulic pressure, allowing connections to be welded and verified while water continued to circulate.'
      },
      {
        challenge: 'Pouring high-volume, crack-free waterproof concrete for the circular sedimentation clarifier tanks.',
        solution: 'Specified a low-heat hydration concrete mix with crystalline waterproofing additives, and implemented a continuous 24-hour pour sequence to eliminate cold joints.'
      },
      {
        challenge: 'Preventing concrete dust and chemical runoff from entering the active environmental containment zone next to the municipal reservoir.',
        solution: 'Erected negative-pressure environmental shrouds around all grinding and blasting zones, and routed all site runoff through an on-site mechanical filtration loop.'
      }
    ]
  }
];
