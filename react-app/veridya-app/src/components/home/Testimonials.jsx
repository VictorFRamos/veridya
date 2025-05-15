function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Carlos Silva",
      role: "Empresário",
      text: "O certificado da Veridya simplificou todos os processos da minha empresa.",
      rating: 5
    },
    // ... mais depoimentos
  ];

  return (
    <section className="testimonials-section">
      <h2>O que nossos clientes dizem</h2>
      <div className="testimonials-grid">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimonial-rating">
              {'★'.repeat(testimonial.rating)}
            </div>
            <p className="testimonial-text">"{testimonial.text}"</p>
            <div className="testimonial-author">
              <strong>{testimonial.name}</strong>
              <span>{testimonial.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;