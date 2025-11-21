'use client';

import { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';

interface AudioPlayerProps {
  chapterTitle: string;
  duration: number;
  audioSrc?: string;
  onTimeUpdate: (currentTime: number) => void;
}

export function AudioPlayer({ chapterTitle, duration, audioSrc, onTimeUpdate }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [volume, setVolume] = useState(0.8);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // 初始化音频元素
  useEffect(() => {
    if (audioSrc && !audioRef.current) {
      audioRef.current = new Audio(audioSrc);
      audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
      audioRef.current.addEventListener('ended', handleEnded);
      audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
        audioRef.current.removeEventListener('ended', handleEnded);
        audioRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
      }
    };
  }, [audioSrc]);

  // 处理音频时间更新
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const time = audioRef.current.currentTime;
      setCurrentTime(time);
      onTimeUpdate(time);
    }
  };

  // 处理音频播放结束
  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
    onTimeUpdate(0);
  };

  // 处理音频元数据加载
  const handleLoadedMetadata = () => {
    // 可以在这里获取真实的音频时长
  };

  // 更新播放速率
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  // 更新音量
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // 模拟播放（当没有真实音频时）
  useEffect(() => {
    if (!audioSrc) {
      let interval: NodeJS.Timeout | null = null;

      if (isPlaying) {
        interval = setInterval(() => {
          setCurrentTime((prev) => {
            const next = prev + (1 * playbackRate);
            if (next >= duration) {
              setIsPlaying(false);
              return duration;
            }
            onTimeUpdate(next);
            return next;
          });
        }, 1000);
      }

      return () => {
        if (interval) clearInterval(interval);
      };
    }
  }, [isPlaying, playbackRate, duration, onTimeUpdate, audioSrc]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    onTimeUpdate(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
      <div>
        <h3 className="font-semibold text-neutral-dark">{chapterTitle}</h3>
        <p className="text-sm text-neutral-text mt-1">章节音频讲解</p>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={togglePlay}
          className="w-12 h-12 rounded-full bg-brand-primary hover:bg-brand-deep text-white flex items-center justify-center transition-colors"
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
        </button>

        <div className="flex-1">
          <input
            type="range"
            min="0"
            max={duration}
            step="0.1"
            value={currentTime}
            onChange={handleSeek}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-primary"
          />
          <div className="flex justify-between text-xs text-neutral-text mt-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Volume2 className="w-4 h-4 text-neutral-text" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-20 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-primary"
          />
        </div>

        <select
          value={playbackRate}
          onChange={(e) => setPlaybackRate(parseFloat(e.target.value))}
          className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
        >
          <option value="0.5">0.5x</option>
          <option value="0.75">0.75x</option>
          <option value="1">1.0x</option>
          <option value="1.25">1.25x</option>
          <option value="1.5">1.5x</option>
          <option value="2">2.0x</option>
        </select>
      </div>
    </div>
  );
}
