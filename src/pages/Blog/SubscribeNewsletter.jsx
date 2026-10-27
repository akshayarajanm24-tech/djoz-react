
import React from "react";

function SubscribeNewsletter() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thank you for your interest in our newsletter!");
  };

  return (
    <div className="blog__sidebar__item">
      <div className="blog__sidebar__title">
        <h4>Subscribe newsletter</h4>
      </div>

      <p>Ipsum dolor sit amet, adipiscing elit, sed eiusmod</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
        />

        <button type="submit" className="site-btn">
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default SubscribeNewsletter;
