import React, { useState } from 'react';
import ReactModal from 'react-modal';
import Tag from './Tag';
import { Link } from 'react-router-dom';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ProjectPreview({ title, date, previewImage, tags, description, imageCollection, githubLink }) {
  ReactModal.setAppElement('#root');
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

  function focusImage(e){
    if (window.innerWidth > 767.98){
      if (e.target.classList.contains('projectModal__exampleImages--focus')){
        e.target.classList.remove('projectModal__exampleImages--focus');
        Array.from(e.target.parentNode.children).forEach((image) => {
          image.style.opacity = 1;
        })
      } else if(!e.target.classList.contains('projectModal__exampleImages--focus')){
        Array.from(e.target.parentNode.children).forEach((image) => {
          image.classList.remove('projectModal__exampleImages--focus');
          image.style.opacity = 0.5;
        })
        e.target.classList.add('projectModal__exampleImages--focus');
        e.target.style.opacity = 1;
      }
    }
  }

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className='projectPreview__cardContainer'>
    <div className='projectPreview__card' onClick={openModal} onBlur={closeModal}>
      <img className='projectPreview__image' src={previewImage} />
      <p className='projectPreview__date'>{date}</p>
      <h3 className='projectPreview__title'>{title}</h3>
      <div className='projectPreview__tagsContainer'>
      {tags.map((tagtext) => (
        <Tag key={tagtext} tag={tagtext}/>
        ))}
      </div>
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
                  {githubLink ? (
                  <Link className='projectModal__link' target='_blank' to={githubLink}>
                    <FontAwesomeIcon className='projectModal__icon' icon={faGithub} alt='Github Link'/>
                  </Link>) : <p></p>}

                </div>
              </div>
              <div className='projectModal__secondContainer'>
                {imageCollection.map((image) => (
                    <img className='projectModal__exampleImages' onClick={focusImage} key={image.alt} src={image.image} />
                  ))}
              </div>
            </div>


          </div>
        </ReactModal>
    </div>

  );
}
