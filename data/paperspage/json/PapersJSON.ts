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
    },
    {
      file: 'VerusPhaseI.pdf',
      title: 'Verus Phase I',
      heading: 'zk-SNARK Privacy and a Holistic Approach to ASICs',
      writtenBy: 'Michael J. Toutonghi',
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
    },
  ],
}
