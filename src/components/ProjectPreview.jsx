import React from 'react';
import Tag from './Tag';

export default function ProjectPreview({ title, date, previewImage, tags, description }) {
  return (
    <div className='projectPreview__card'>
      <img className='projectPreview__image' src={previewImage} />
      {tags.map((tagtext) => (
              <Tag key={tagtext} tag={tagtext}/>
          ))}
      <div className='projectPreview__projectOverviewContainer'>

        <p className='projectPreview__date'>{date}</p>
      </div>
      <h3 className='projectPreview__title'>{title}</h3>
      <p className='projectPreview__description'>{description}</p>   
    </div>
  );
}
