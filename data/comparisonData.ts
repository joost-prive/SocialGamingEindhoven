export interface ComparisonRow {
  criterion: string;
  socialGaming: boolean;
  escapeRoom: boolean;
  bowling: boolean;
  lasergamen: boolean;
}

export const comparisonRows: ComparisonRow[] = [
  {
    criterion: 'Geschikt voor grote groepen (10+)',
    socialGaming: true,
    escapeRoom: false,
    bowling: true,
    lasergamen: true,
  },
  {
    criterion: 'Iedereen kan meedoen',
    socialGaming: true,
    escapeRoom: false,
    bowling: false,
    lasergamen: false,
  },
  {
    criterion: 'Echt samen spelen (niet naast elkaar)',
    socialGaming: true,
    escapeRoom: true,
    bowling: false,
    lasergamen: false,
  },
  {
    criterion: 'Eindelijk weer wat nieuws',
    socialGaming: true,
    escapeRoom: false,
    bowling: false,
    lasergamen: false,
  },
  {
    criterion: 'Goede prijs-kwaliteit',
    socialGaming: true,
    escapeRoom: false,
    bowling: true,
    lasergamen: true,
  },
];

export default comparisonRows;
