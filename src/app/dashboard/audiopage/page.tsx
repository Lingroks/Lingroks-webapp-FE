'use client';

import React, { useState, useEffect } from 'react';
import Breadcrumb from '../../../components/breadcrumb/breadcrumb';
import DashboardHeader from '../../../components/header/dashboard/DasboardHeader';
import style from '@/assets/scss/pages/translate.module.scss';
import input from '@/components/translateInput/tsInput.module.scss';
import Audioplayer from '@/components/audioplayer/index';
// import track1 from '../../../assets/tracks/clarinet-multiphonic-6e-97517-65496.mp3'
import Modal from '../../../components/modal';
import { ToastContainer, toast } from 'react-toastify';
import ModalContent from './ai_modal_content/index';

import { useSearchParams, useRouter } from 'next/navigation';

const AudioPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const searchParams = useSearchParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();
  const track = searchParams?.get('track');
  const textInput = searchParams?.get('textInput');

  useEffect(() => {
    // Check if 'track' and 'textInput' are available
    if (!track || !textInput) {
      toast.error('track cannot be found');
      router.push('/dashboard');
    } else {
      setIsLoaded(true);
    }
  }, [track, textInput, router]);

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
            value={textInput || ''} // Set textarea value to the 'textInput'
            readOnly
          ></textarea>

          {/* <Audioplayer track={track} openModal={openModal} /> */}
          <Audioplayer track={track ?? undefined} openModal={openModal} />


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
            {/* <button className={`${input.chat__button} ${input.submit__button}`}>
              Copy
            </button> */}
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalContent onClose={closeModal} />
      </Modal>

      <ToastContainer />
    </>
  );
};

export default AudioPage;
