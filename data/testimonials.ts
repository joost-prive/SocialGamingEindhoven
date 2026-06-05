export interface Testimonial {
  quote: string;
  name: string;
  context: string;
}

// Echte reviews afkomstig van ClashRooms (Google reviews, 4.9/5 sterren, 400+ recensies).
// ClashRooms is de social gaming locatie waar deze website naar verwijst.
export const testimonials: Testimonial[] = [
  {
    quote:
      'Super leuke middag gehad met een diversiteit aan verschillende spelvormen.',
    name: 'Maikel van Dijk',
    context: 'Google review',
  },
  {
    quote:
      'Enthousiast team! Hele laagdrempelige spellen, onwijs vermaakt!',
    name: 'Nancy Leo',
    context: 'Google review',
  },
  {
    quote:
      'Superleuke bedrijfsactiviteit, voor ieder wat wils!',
    name: 'Marlene Drouen',
    context: 'Google review',
  },
  {
    quote:
      'We hebben ons leuk vermaakt. Leuke spelletjes en top begeleiding.',
    name: 'Twan Boetzkes',
    context: 'Google review',
  },
  {
    quote:
      'Super leuk teamuitje gehad! Leuke spellen, duidelijke uitleg en een hele leuke gamemaster!',
    name: 'Vera Holtackers',
    context: 'Google review',
  },
  {
    quote:
      'Hele leuke avond gehad!',
    name: 'Fleur',
    context: 'Google review',
  },
];

export default testimonials;
