import React from 'react';
import Tag from './Tag';
export default function LargeCardComponent({
  avatarImage,
  backgroundI,
  skillName,
  skillTime,
  tags,
}) {

  console.log(tags)
  return (
    <div className='largeCardComponent'>
      <div
        className=''
        style={{ background: `url(${backgroundI}) no-repeat center`}}
      >
        <img className='largeCardComponent__coverImage' src={backgroundI}/>
      </div>
      <div className='largeCardComponent__content'>
        <div className='largeCardComponent__imageContainer'>
          <div className='largeCardComponent__imageAvatar'>
            {/* <img className='largeCardComponent__image'src={ {avatarImage} }></img> */}
            <img
              className='largeCardComponent__image'
              alt={skillName}
              src={avatarImage}
            ></img>
          </div>
        </div>
        <div className='largeCardComponent__text'>
          <h3 className='largeCardComponent__skillName'>{skillName}</h3>
          <p className='largeCardComponent__skillTime'> {skillTime}</p>
        </div>
        <div className='largeCardComponent__divider'></div>
        <div className='largeCardComponent__tagContainer'>
          {tags.map((tagtext) => (
            <Tag key={tagtext} tag={tagtext} />
          ))}
        </div>
      </div>
    </div>
  );
}
