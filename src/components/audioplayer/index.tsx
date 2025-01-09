'use client';

import React, { useEffect, useRef, useState } from 'react';

import WaveSurfer from 'wavesurfer.js';
import { FaBackward, FaPlay, FaPause, FaForward, FaUser } from 'react-icons/fa';

import './audio.scss';

interface AudioPlayerProps {
  track: string; // Path to the audio file
  openModal: () => void;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ track , openModal}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const waveSurferRef = useRef<WaveSurfer | null>(null);
  const waveformContainerRef = useRef(null);

  useEffect(() => {
    if (waveformContainerRef.current) {
      waveSurferRef.current = WaveSurfer.create({
        container: waveformContainerRef.current, // Safe because it's checked
        waveColor: '#D3D3D3',
        progressColor: '#6A5ACD',
        height: 70,
        cursorWidth: 1,
        cursorColor: 'lightgray',
        barWidth: 2,
        normalize: true,
        fillParent: true,
      });

      waveSurferRef.current.load(track);
    }

    return () => {
      waveSurferRef.current?.destroy();
    };
  }, [track]);

  const togglePlay = () => {
    if (waveSurferRef.current) {
      waveSurferRef.current.playPause();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="audio-player-container">
      {/* <p className="track-title">{title}</p> */}
      <div ref={waveformContainerRef} className="waveform"></div>
      <div className="controls">
        <FaUser className="icon" />
        <FaBackward className="icon" />
        <button className="play-button" onClick={togglePlay}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <FaForward className="icon" />
        <FaUser className="icon" onClick={openModal} />
      </div>
    </div>
  );
};

export default AudioPlayer;
