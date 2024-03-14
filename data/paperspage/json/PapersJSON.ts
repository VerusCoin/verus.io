import { IPapers } from '@/types/paperspage'

export const PapersJSON: IPapers = {
  title: 'Published Papers',
  data: [
    {
      file: 'VerusVision.pdf',
      title: 'Verus Vision Paper',
      heading: 'Privacy, Community, Power',
      writtenBy: [
        'Michael J. Toutonghi',
        'Michael F. Toutonghi',
        'Alex R. English',
      ],
      pages: 27,
    },
    {
      file: 'VerusPhaseI.pdf',
      title: 'Verus Phase I',
      heading: 'zk-SNARK Privacy and a Holistic Approach to ASICs',
      writtenBy: ['Michael J. Toutonghi'],
      pages: 7,
    },
    {
      file: 'VerusPoP.pdf',
      title: 'Verus Proof of Power',
      heading: 'A Provable Hybrid Solution to 51% Hash Attacks',
      writtenBy: [
        'Michael J. Toutonghi',
        'Michael F. Toutonghi',
        'John Westbrook',
      ],
      pages: 15,
    },
  ],
}
