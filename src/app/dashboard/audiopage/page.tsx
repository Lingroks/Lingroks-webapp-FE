'use client';

import React, { useState } from 'react';
import Breadcrumb from '../../../components/breadcrumb/breadcrumb';
import DashboardHeader from '../../../components/header/dashboard/DasboardHeader';
import style from '@/assets/scss/pages/translate.module.scss';
import input from '@/components/translateInput/tsInput.module.scss';
import Audioplayer from '@/components/audioplayer/index';
import track1 from '../../../assets/tracks/clarinet-multiphonic-6e-97517-65496.mp3'
import Modal from '../../../components/modal'
import ModalContent from './ai_modal_content/index'

const AudioPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <DashboardHeader />
      <div className={style.translate__main__content}>
        <Breadcrumb
          title="Home | Loom"
          date="29 October 2024"
          author="Einstein Namah"
        />

        <div className={input.chat__input__container}>
          {/* Textarea */}
          <textarea
            className={input.translated}
            placeholder="Enter your text or link here"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            voluptate facilis commodi, quis hic maxime unde esse velit atque,
            necessitatibus fugit, eos harum consequuntur itaque natus accusamus
            reiciendis ducimus amet tempora obcaecati nam ipsum neque eligendi.
            Officia doloremque repudiandae odit, cum dignissimos ad perspiciatis
            architecto? Dolor minima ipsa nisi quasi alias, adipisci maiores
            maxime animi similique commodi neque deleniti suscipit odio
            praesentium accusamus, laborum amet deserunt cum quam in aperiam. Ab
            fugiat dolor, culpa incidunt iste sint dicta consequuntur quidem
            architecto esse nobis facilis fuga sunt adipisci recusandae natus
            officiis sed molestiae porro? Omnis, culpa cumque. Vitae minima
            rerum eaque!
          </textarea>

          <Audioplayer track={track1}  openModal={openModal}/>

          {/* Buttons */}
          <div className={input.chat__buttons}>
            <div className={input.left__buttons}>
              {/* Dropdown Button 1 */}
              <div className={input.dropdown}>
                <button
                  className={`${input.chat__button__first} ${input.dropdown__button}`}
                >
                  Original
                </button>
              </div>

              {/* Dropdown Button 2 */}
              <div className={input.dropdown}>
                <button
                  className={`${input.chat__button} ${input.dropdown__button}`}
                >
                  Translated
                </button>
              </div>
            </div>
            <button className={`${input.chat__button} ${input.submit__button}`}>
              Share
            </button>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalContent onClose={closeModal} />
      </Modal>
    </>
  );
};

export default AudioPage;
