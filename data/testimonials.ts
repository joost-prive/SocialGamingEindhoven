export interface Testimonial {
  quote: string;
  name: string;
  context: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Wat een geweldige ervaring! Mijn vriendengroep had nog nooit zo veel lol met elkaar. De games zijn verslavend en iedereen kon volop meedoen.',
    name: 'Martijn',
    context: 'Vrienden groep, 8 personen',
  },
  {
    quote:
      'Voor een bedrijfsuitje was dit veel beter dan wat we normaal doen. Iedereen was energiek en we hebben echt als team samengewerkt. Ik ga dit zeker aanbevelen!',
    name: 'Lisa',
    context: 'HR Manager bij techbedrijf',
  },
  {
    quote:
      'Ik ben geen gamer, maar dit was superleuk! Je hoeft echt geen ervaring te hebben. Alles is heel toegankelijk en je bent meteen in het ritme.',
    name: 'Sarah',
    context: 'Vrijgezellenfeest organisator',
  },
  {
    quote:
      'Geweldig voor onze afdeling. We voelden ons echt samen tegen elkaar aan het spelen - niet zomaar naast elkaar. Dit is veel beter dan een gewone bedrijfsuitje.',
    name: 'Jeroen',
    context: 'Team Lead, marketing afdeling',
  },
  {
    quote:
      'De kids vonden het helemaal top! Ze waren uren bezig en willen alleen maar teruggaan. Perfect voor een verjaardagsfeest.',
    name: 'Emma',
    context: 'Moeder van twee kinderen',
  },
  {
    quote:
      'Qua prijs-kwaliteit is dit echt not te verslaan. Veel plezier, makkelijk te boeken, en alles liep heel professioneel af.',
    name: 'Patrick',
    context: 'Groepsleider scouting Eindhoven',
  },
];

export default testimonials;
