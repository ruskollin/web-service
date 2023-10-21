import React from 'react';
import Article from '../../components/article/Article';
// import personIcon from '../../assets/person-icon.jpg';

import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Tiimimme</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupB">
        <Article namePerson="Glenda Dangis" rolePerson="Toimitusjohtaja, TtM, Sairaanhoitaja" />
        <Article namePerson="Allan Jay Laongan" rolePerson="Toimitusjohtajan sijainen, Sairaanhoitaja" />
        <Article namePerson="Arra Matilainen" rolePerson="Hallituksen jäsen, Sairaanhoitaja" />
        <Article namePerson="Kempee Labi" rolePerson="Hallituksen puheenjohtaja, TtM, Sairaanhoitaja" />
      </div>
    </div>
  </div>
);

export default Blog;
