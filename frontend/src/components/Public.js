import { Link } from 'react-router-dom';
import React from 'react';
const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">Event registration!</span>
        </h1>
      </header>
      <main className="public__main">
        <p>Here you can use Event registration page</p>
        <address className="public__addr">
          Helios
          <br />
          Rruga Don Bosko
          <br />
          Tirane
          <br />
          <a href="tel:+355698584997">(+355698584997)</a>
        </address>
        <br />
        <p>Owner: Helios Peti</p>
      </main>
      <footer>
        <Link to="/login">User Login</Link>
      </footer>
    </section>
  );
  return content;
};
export default Public;
