import React from 'react';
import './article.css';

const Article = ({ imgUrl, namePerson, rolePerson }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <h3>{namePerson}</h3>
        <p>{rolePerson}</p>
      </div>
    </div>
  </div>
);

export default Article;
