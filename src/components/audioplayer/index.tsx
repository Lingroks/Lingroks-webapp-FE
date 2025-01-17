// 'use client';

// import React, { useEffect, useRef, useState } from 'react';

// import WaveSurfer from 'wavesurfer.js';
// import { FaBackward, FaPlay, FaPause, FaForward, FaUser } from 'react-icons/fa';

// import './audio.scss';

// interface AudioPlayerProps {
//   track: string; // Path to the audio file
//   openModal: () => void;
// }

// const AudioPlayer: React.FC<AudioPlayerProps> = ({ track , openModal}) => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const waveSurferRef = useRef<WaveSurfer | null>(null);
//   const waveformContainerRef = useRef(null);

//   useEffect(() => {
//     if (waveformContainerRef.current) {
//       waveSurferRef.current = WaveSurfer.create({
//         container: waveformContainerRef.current, // Safe because it's checked
//         waveColor: '#D3D3D3',
//         progressColor: '#6A5ACD',
//         height: 70,
//         cursorWidth: 1,
//         cursorColor: 'lightgray',
//         barWidth: 2,
//         normalize: true,
//         fillParent: true,
//       });

//       waveSurferRef.current.load(track);
//     }

//     return () => {
//       waveSurferRef.current?.destroy();
//     };
//   }, [track]);

//   const togglePlay = () => {
//     if (waveSurferRef.current) {
//       waveSurferRef.current.playPause();
//       setIsPlaying(!isPlaying);
//     }
//   };

//   return (
//     <div className="audio-player-container">
//       {/* <p className="track-title">{title}</p> */}
//       <div ref={waveformContainerRef} className="waveform"></div>
//       <div className="controls">
//         <FaUser className="icon" />
//         <FaBackward className="icon" />
//         <button className="play-button" onClick={togglePlay}>
//           {isPlaying ? <FaPause /> : <FaPlay />}
//         </button>
//         <FaForward className="icon" />
//         <FaUser className="icon" onClick={openModal} />
//       </div>
//     </div>
//   );
// };

// export default AudioPlayer;

'use client';

import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { FaBackward, FaPlay, FaPause, FaForward, FaUser } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './audio.scss';

interface AudioPlayerProps {
  track: string; // Path to the audio file
  openModal: () => void;
}

// const AudioPlayer: React.FC<AudioPlayerProps> = ({ track, openModal }) => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [loadFailed, setLoadFailed] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
//   const waveSurferRef = useRef<WaveSurfer | null>(null);
//   const waveformContainerRef = useRef(null);

//   useEffect(() => {
//     if (!track) return;

//     const controller = new AbortController();
//     const signal = controller.signal;

//     const fetchAudio = async () => {
//       try {
//         const response = await fetch(track, { signal });
//         if (!response.ok) throw new Error(`Failed to fetch audio file ${track}`);

//         const blob = await response.blob();
//         const audioUrl = URL.createObjectURL(blob);

//         // Initialize WaveSurfer with the fetched audio
//         if (waveformContainerRef.current) {
//           setIsLoaded(false); // Set loading state initially
//           setLoadFailed(false); // Reset error state
//           setErrorMessage('');
//           waveSurferRef.current = WaveSurfer.create({
//             container: waveformContainerRef.current,
//             waveColor: '#D3D3D3',
//             progressColor: '#6A5ACD',
//             height: 70,
//             cursorWidth: 1,
//             cursorColor: 'lightgray',
//             barWidth: 2,
//             normalize: true,
//             fillParent: true,
//           });

//           waveSurferRef.current.on('error', (error) => {
//             console.error('WaveSurfer error:', error.message);
//             setIsLoaded(false);
//             setLoadFailed(true);
//             setErrorMessage(error.message || 'Failed to load audio file.');
//             toast.error(`Error: ${error.message}`, {});
//           });

//           waveSurferRef.current.load(audioUrl);

//           waveSurferRef.current.on('ready', () => {
//             setIsLoaded(true);
//             setLoadFailed(false);
//           });
//         }
//       } catch (error) {
//         if (signal.aborted) {
//           console.log('Fetch aborted');
//         } else {
//           console.error('Fetch error:', error.message);
//           setLoadFailed(true);
//           setErrorMessage(error.message || 'Failed to fetch audio file.');
//           toast.error(`Error: ${error.message}`);
//         }
//       }
//     };

//     fetchAudio();

//     return () => {
//       controller.abort(); // Abort fetch request
//       waveSurferRef.current?.destroy(); // Clean up WaveSurfer
//     };
//   }, [track]);

//   const togglePlay = () => {
//     if (waveSurferRef.current && isLoaded) {
//       waveSurferRef.current.playPause();
//       setIsPlaying(!isPlaying);
//     }
//   };

//   return (
//     // <div className="audio-player-container">
//     //   <div ref={waveformContainerRef} className="waveform"></div>
//     //   {!isLoaded && <p>Loading audio...</p>}
//     //   <div className="controls">
//     //     <FaUser className="icon" />
//     //     <FaBackward className="icon" />
//     //     <button
//     //       className="play-button"
//     //       onClick={togglePlay}
//     //       disabled={!isLoaded}
//     //     >
//     //       {isPlaying ? <FaPause /> : <FaPlay />}
//     //     </button>
//     //     <FaForward className="icon" />
//     //     <FaUser className="icon" onClick={openModal} />
//     //   </div>
//     // </div>
//     <div className="audio-player-container">
//       <ToastContainer />
//       {!isLoaded && !loadFailed && <p>Loading audio...</p>}
//       {loadFailed && (
//         <p className="error-message">
//           {errorMessage || 'An unknown error occurred while loading the audio.'}
//         </p>
//       )}
//       <div ref={waveformContainerRef} className="waveform"></div>
//       <div className="controls">
//         {isLoaded && !loadFailed && (
//           <>
//             <FaUser className="icon" />
//             <FaBackward className="icon" />
//             <button className="play-button" onClick={togglePlay}>
//               {isPlaying ? <FaPause /> : <FaPlay />}
//             </button>
//             <FaForward className="icon" />
//             <FaUser className="icon" onClick={openModal} />
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AudioPlayer;

const AudioPlayer: React.FC<AudioPlayerProps> = ({ openModal }) => {
  const hardcodedTrack = "https://mithilaartstorage.blob.core.windows.net/audio-files/azure-audio-1736901927053.wav";
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadFailed, setLoadFailed] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const waveSurferRef = useRef<WaveSurfer | null>(null);
  const waveformContainerRef = useRef(null);

  useEffect(() => {
    if (!hardcodedTrack) return;

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchAudio = async () => {
      try {
        const response = await fetch(hardcodedTrack, { signal });
        if (!response.ok) throw new Error(`Failed to fetch audio file ${hardcodedTrack}`);

        const blob = await response.blob();
        const audioUrl = URL.createObjectURL(blob);

        if (waveformContainerRef.current) {
          setIsLoaded(false);
          setLoadFailed(false);
          setErrorMessage('');
          waveSurferRef.current = WaveSurfer.create({
            container: waveformContainerRef.current,
            waveColor: '#D3D3D3',
            progressColor: '#6A5ACD',
            height: 70,
            cursorWidth: 1,
            cursorColor: 'lightgray',
            barWidth: 2,
            normalize: true,
            fillParent: true,
          });

          waveSurferRef.current.on('error', (error) => {
            console.error('WaveSurfer error:', error.message);
            setIsLoaded(false);
            setLoadFailed(true);
            setErrorMessage(error.message || 'Failed to load audio file.');
          });

          waveSurferRef.current.load(audioUrl);

          waveSurferRef.current.on('ready', () => {
            setIsLoaded(true);
            setLoadFailed(false);
          });
        }
      } catch (error) {
        if (signal.aborted) {
          console.log('Fetch aborted');
        } else {
          console.error('Fetch error:', error.message);
          setLoadFailed(true);
          setErrorMessage(error.message || 'Failed to fetch audio file.');
        }
      }
    };

    fetchAudio();

    return () => {
      controller.abort();
      waveSurferRef.current?.destroy();
    };
  }, [hardcodedTrack]);

  const togglePlay = () => {
    if (waveSurferRef.current && isLoaded) {
      waveSurferRef.current.playPause();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="audio-player-container">
      <ToastContainer />
      {!isLoaded && !loadFailed && <p>Loading audio...</p>}
      {loadFailed && (
        <p className="error-message">
          {errorMessage || 'An unknown error occurred while loading the audio.'}
        </p>
      )}
      <div ref={waveformContainerRef} className="waveform"></div>
      <div className="controls">
        {isLoaded && !loadFailed && (
          <>
            <FaUser className="icon" />
            <FaBackward className="icon" />
            <button className="play-button" onClick={togglePlay}>
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <FaForward className="icon" />
            <FaUser className="icon" onClick={openModal} />
          </>
        )}
      </div>
    </div>
  );
};

export default AudioPlayer;

