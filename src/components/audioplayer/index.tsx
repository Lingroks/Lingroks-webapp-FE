'use client';

import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { FaBackward, FaPlay, FaPause, FaForward } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import Image from 'next/image';
import FileSaver from 'file-saver';
import 'react-toastify/dist/ReactToastify.css';

import './audio.scss';

interface AudioPlayerProps {
  track?: string;
  openModal: () => void;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ track, openModal }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadFailed, setLoadFailed] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [currentTime, setCurrentTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const waveSurferRef = useRef<WaveSurfer | null>(null);
  const waveformContainerRef = useRef(null);

  useEffect(() => {
    if (!track) return;

    const controller = new AbortController();
    const signal = controller.signal;
    console.log(audioUrl)

    const fetchAudio = async () => {
      try {
        const response = await fetch(track, { signal });
        if (!response.ok)
          throw new Error(`Failed to fetch audio file ${track}`);

        const blob = await response.blob();
        const audioUrl = URL.createObjectURL(blob);
        setAudioUrl(audioUrl);

        // Initialize WaveSurfer with the fetched audio
        if (waveformContainerRef.current) {
          setIsLoaded(false); // Set loading state initially
          setLoadFailed(false); // Reset error state
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
            toast.error(`Error: ${error.message}`, {});
          });

          waveSurferRef.current.load(audioUrl);

          waveSurferRef.current.on('ready', () => {
            setIsLoaded(true);
            setLoadFailed(false);
            const duration = waveSurferRef.current!.getDuration();
            console.log('Total Duration:', duration); // Debug log
            setTotalDuration(duration);
          });

          waveSurferRef.current.on('audioprocess', () => {
            const time = waveSurferRef.current!.getCurrentTime();
            console.log('Current Time:', time); // Debug log
            setCurrentTime(time);
            // setCurrentTime(waveSurferRef.current!.getCurrentTime());
          });

          // waveSurferRef.current.on('seek', (progress) => {
          //   setCurrentTime(waveSurferRef.current!.getDuration() * progress);
          // });
        }
      } catch (error: unknown) {
        if (signal.aborted) {
          console.log('Fetch aborted');
        } else {
          // Type assertion to assume that error is an instance of Error
          if (error instanceof Error) {
            console.error('Fetch error:', error.message);
            setLoadFailed(true);
            setErrorMessage(error.message || 'Failed to fetch audio file.');
            toast.error(`Error: ${error.message}`);
          } else {
            // Handle non-Error cases if necessary
            console.error('Unknown error:', error);
            setLoadFailed(true);
            setErrorMessage('Failed to fetch audio file.');
            toast.error('Unknown error occurred');
          }
        }
      }
    };

    fetchAudio();

    return () => {
      controller.abort(); // Abort fetch request
      waveSurferRef.current?.destroy(); // Clean up WaveSurfer
    };
  }, [audioUrl, track]);

  const togglePlay = () => {
    if (waveSurferRef.current && isLoaded) {
      waveSurferRef.current.playPause();
      setIsPlaying(!isPlaying);
    }
  };

  const forward5Seconds = () => {
    if (waveSurferRef.current) {
      const currentTime = waveSurferRef.current.getCurrentTime();
      const duration = waveSurferRef.current.getDuration();
      waveSurferRef.current.seekTo(Math.min((currentTime + 5) / duration, 1));
    }
  };

  const backward5Seconds = () => {
    if (waveSurferRef.current) {
      const currentTime = waveSurferRef.current.getCurrentTime();
      const duration = waveSurferRef.current.getDuration();
      waveSurferRef.current.seekTo(Math.max((currentTime - 5) / duration, 0));
    }
  };
  const downloadTrack = async (trackUrl: string) => {
    try {
      const response = await fetch(trackUrl);
      if (!response.ok)
        throw new Error(`Failed to fetch track: ${response.statusText}`);

      const blob = await response.blob();
      const fileExtension = trackUrl.split('.').pop() || 'mp3'; // Default to .mp3 if no extension is found
      const fileName = `downloaded_track.${fileExtension}`;

      FileSaver.saveAs(blob, fileName);
      console.log('Download completed successfully');
    } catch {
      toast.error('Error downloading track');
    }
  };
  const formatTime = (time: number) =>
    new Date(time * 1000).toISOString().slice(14, 19);

  return (
    <div className="audio-player-container">
      <ToastContainer />
      {!isLoaded && !loadFailed && <p>Loading audio...</p>}
      {loadFailed && (
        <p className="error-message">
          {errorMessage || 'An unknown error occurred while loading the audio.'}
        </p>
      )}
      {/* <div ref={waveformContainerRef} className="waveform"></div> */}
      <div className="waveform-wrapper">
        <span className="time current-time">
          <span className="time current-time">{formatTime(currentTime)}</span>
        </span>
        <div ref={waveformContainerRef} className="waveform"></div>
        <span className="time total-time">
          <span className="time duration">{formatTime(totalDuration)}</span>
        </span>
      </div>
      <div className="controls">
        {isLoaded && !loadFailed && (
          <>
            <div
              className="play--icon--wrapper"
              onClick={() => {
                if (track) {
                  downloadTrack(track);
                } else {
                  toast.error('No track available to download');
                }
              }}
            >
              <Image
                src="/arrow-down.svg"
                alt="Logo"
                width={20}
                height={20}
                className=""
              />
            </div>
            <FaBackward className="icon" onClick={backward5Seconds} />
            <button className="play-button" onClick={togglePlay}>
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <FaForward className="icon" onClick={forward5Seconds} />

            <div className="play--icon--wrapper" onClick={openModal}>
              <Image
                src="/user-voice-fill.svg"
                alt="Logo"
                width={20}
                height={20}
                className=""
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AudioPlayer;
