function setupPlayer(videoId, buttonId, progressId) {
    const video = document.getElementById(videoId);
    const playButton = document.getElementById(buttonId);
    const progress = document.getElementById(progressId);

    playButton.addEventListener('click', () => {
        if (video.paused) {
            // Pause any other playing video
            document.querySelectorAll('video').forEach(v => {
                if (v !== video) v.pause();
            });

            // Reset other play buttons
            document.querySelectorAll('.play-button').forEach(b => {
                if (b !== playButton) b.textContent = 'Start';
            });

            video.play();
            playButton.textContent = 'Pause';
        } else {
            video.pause();
            playButton.textContent = 'Start';
        }
    });

    video.addEventListener('timeupdate', () => {
        const progressPercentage = (video.currentTime / video.duration) * 100;
        progress.style.width = progressPercentage + '%';
    });

    video.addEventListener('ended', () => {
        playButton.textContent = 'Start';
        progress.style.width = '0%';
    });
}

setupPlayer('video1', 'playButton1', 'progress1');
setupPlayer('video2', 'playButton2', 'progress2');
setupPlayer('video3', 'playButton3', 'progress3');