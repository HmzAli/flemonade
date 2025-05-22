import './Video.scss';

import { useEffect, useRef, useState } from 'react';

const Video = () => {
  const videoRef = useRef<any>(null);
  const scrollTimeout = useRef<any>(null);
  const defaultPlaybackRate = 1;
  const scrollPlaybackRate = 8;
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isScrolling) {
        setIsScrolling(true);
      }

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }

      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
        videoRef.current.playbackRate = defaultPlaybackRate
      }, 100);
    }

    window.addEventListener('scroll', handleScroll);
  }, [])

  useEffect(() => {
    if (isScrolling) {
      videoRef.current.playbackRate = scrollPlaybackRate;
    } else {
      videoRef.current.playbackRate = defaultPlaybackRate;
    }
  }, [isScrolling])

  return (
    <figure className="banner-video">
      <video ref={videoRef} src="./flemonade-banner.mp4" type="video/mp4" autoPlay muted loop></video>
    </figure>
  )
}

export default Video 