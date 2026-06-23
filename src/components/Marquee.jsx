const words = [
  'Flutter',
  'Dart',
  'Firebase',
  'REST APIs',
  'GetX',
  'Bloc',
  'Provider',
  'Riverpod',
  'Payment Gateways',
  'Push Notifications',
  'Google Maps',
  'iOS',
  'Android',
  'Clean Architecture',
];

/**
 * Swiss-style infinite ticker. The track holds the word list twice so the
 * CSS translateX(-50%) loop is perfectly seamless.
 */
const Marquee = () => {
  const track = [...words, ...words];

  return (
    <section
      aria-hidden="true"
      className="relative my-8 overflow-hidden border-y border-ink/15 py-5"
    >
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {track.map((word, i) => (
          <span key={i} className="flex items-center">
            <span className="display px-6 text-3xl text-ink md:text-4xl">{word}</span>
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
