import React, { useState } from 'react';
import ReactModal from 'react-modal';
import Tag from './Tag';

export default function ProjectPreview({ title, date, previewImage, tags, description, imageCollection }) {

  ReactModal.setAppElement('#root')
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
    <div className='projectPreview__card' onClick={openModal}>
      <img className='projectPreview__image' src={previewImage} />
      <div className='projectPreview__tagsContainer'>
      {tags.map((tagtext) => (
        <Tag key={tagtext} tag={tagtext}/>
        ))}
      </div>
      <p className='projectPreview__date'>{date}</p>
      <h3 className='projectPreview__title'>{title}</h3>
      <p className='projectPreview__description'>{description}</p>   
    </div>
    <ReactModal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel='Example Modal'
          overlayClassName='Overlay'
          className='modal'
        >
          <div className='modalDiv'>
            
          <button className='modalClose' onClick={closeModal}>X</button>
            <div className='projectModal'>
              <div className='projectModal__firstContainer'>
                <img className='projectModal__image' src={previewImage} />
                <div className='projectModal__text'>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  {tags.map((tagtext) => (
                    <Tag key={tagtext} tag={tagtext}/>
                  ))}
                </div>
              </div>
              <div className='projectModal__secondContainer'>
                {imageCollection.map((image) => (
                    <img className='projectModal__exampleImages' key={image.alt} src={image.image} />
                  ))}
              </div>
            </div>


          </div>
        </ReactModal>
    </div>
  );
}
