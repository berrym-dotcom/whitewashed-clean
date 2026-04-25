// ONLY showing the changed part — everything else stays EXACTLY the same

const triggerEnd = () => {
  setFade(true);

  // show menu immediately
  setPhase('end');

  const audio = audioRef.current;

  const HOLD_TIME = 4000;   // 👈 time to explore menu
  const FADE_DURATION = 4000; // 👈 slow cinematic fade

  if (audio) {
    setTimeout(() => {
      const startVolume = audio.volume;
      const startTime = performance.now();

      const fade = (time: number) => {
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / FADE_DURATION, 1);

        audio.volume = startVolume * (1 - progress);

        if (progress < 1) {
          requestAnimationFrame(fade);
        } else {
          audio.volume = 0;
          audio.pause();
        }
      };

      requestAnimationFrame(fade);
    }, HOLD_TIME);
  }
};
