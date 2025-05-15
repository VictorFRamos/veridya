function PromoBanner({ title, subtitle }) {
  return (
    <section className="promo-banner">
      <div className="banner-content">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}

export default PromoBanner;