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
    criterion: 'Geen ervaring nodig',
    socialGaming: true,
    escapeRoom: true,
    bowling: true,
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
    criterion: 'Binnen 1 uur te boeken',
    socialGaming: true,
    escapeRoom: false,
    bowling: true,
    lasergamen: true,
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
