const startExperience = async () => {
  setStarted(true);

  window.dispatchEvent(new Event('experience-started')); // 👈 ADD THIS

  setTimeout(() => {
    setScrolling(true);
  }, 1200);

  try {
    await audioRef.current?.play();
  } catch {}
};
