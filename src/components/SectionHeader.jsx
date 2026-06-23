/**
 * Editorial section header: a hairline-ruled meta row (index + label)
 * above an oversized serif title and optional intro.
 */
const SectionHeader = ({ index, label, title, intro, align = 'left' }) => {
  return (
    <header className={align === 'center' ? 'text-center' : ''}>
      <div
        className={`flex items-baseline gap-5 border-b border-ink/15 pb-4 ${
          align === 'center' ? 'justify-center' : ''
        }`}
      >
        <span className="label text-accent">{index}</span>
        <span className="label">{label}</span>
      </div>
      <h2 className="display mt-7 text-[clamp(2rem,5vw,3.75rem)] text-ink">{title}</h2>
      {intro && (
        <p
          className={`mt-4 max-w-xl text-lg leading-relaxed text-ink-soft ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {intro}
        </p>
      )}
    </header>
  );
};

export default SectionHeader;
