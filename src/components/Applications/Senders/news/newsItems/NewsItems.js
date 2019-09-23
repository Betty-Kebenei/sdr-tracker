import React from 'react';
import './newsItems.scss';

const NewsItems = (props) => {
   const renderNews = () => (
    props.news && props.news.map(item=>(
      <div key={item.id} className="news-container">
        <div className="news-container-image"
          style={{
            backgroundImage: `url(${item.image})`
          }}
        ></div>
        <div className="news-container-content">
          <div className="news-container-content-date">
            {item.date}
          </div>
          <div className="news-container-content-heading">
          {item.event}
          </div>
          <div className="news-container-content-read-more">
            <span>Read more +</span>
          </div>
        </div>
      </div>
    ))
   )
  
  return (
    <React.Fragment>
      {renderNews()}
    </React.Fragment>
  );
};

export default NewsItems;