import React from 'react';
import Article from '../../components/article/Article';

import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-container">
      <h1 className="heading-container ">Tiimimme</h1>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl="https://api.dicebear.com/7.x/thumbs/svg?seed=Callie" namePerson="Glenda Dangis" rolePerson="Toimitusjohtaja, TtM, Sairaanhoitaja" />
        <Article imgUrl="https://api.dicebear.com/7.x/thumbs/svg?seed=Sheba" namePerson="Allan Jay Laongan" rolePerson="Toimitusjohtajan sijainen, Sairaanhoitaja" />
        <Article imgUrl="https://api.dicebear.com/7.x/thumbs/svg?seed=Bailey" namePerson="Arra Matilainen" rolePerson="Hallituksen jäsen, Sairaanhoitaja" />
        <Article imgUrl="https://api.dicebear.com/7.x/thumbs/svg?seed=Snickers" namePerson="Kempee Labi" rolePerson="Hallituksen puheenjohtaja, TtM, Sairaanhoitaja" />
      </div>
    </div>
  </div>
);

export default Blog;
