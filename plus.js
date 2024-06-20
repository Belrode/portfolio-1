function setupPlayer(audioId, buttonId, progressId) {
    const audio = document.getElementById(audioId);
    const playButton = document.getElementById(buttonId);
    const progress = document.getElementById(progressId);

    playButton.addEventListener('click', () => {
        if (audio.paused) {
            // Pause any other playing audio
            document.querySelectorAll('audio').forEach(a => {
                if (a !== audio) a.pause();
            });

            // Reset other play buttons
            document.querySelectorAll('.play-button').forEach(b => {
                if (b !== playButton) b.textContent = 'Start';
            });

            audio.play();
            playButton.textContent = 'Pause';
        } else {
            audio.pause();
            playButton.textContent = 'Start';
        }
    });

    audio.addEventListener('timeupdate', () => {
        const progressPercentage = (audio.currentTime / audio.duration) * 100;
        progress.style.width = progressPercentage + '%';
    });

    audio.addEventListener('ended', () => {
        playButton.textContent = 'Start';
        progress.style.width = '0%';
    });
}

setupPlayer('audio1', 'playButton1', 'progress1');
setupPlayer('audio2', 'playButton2', 'progress2');
setupPlayer('audio3', 'playButton3', 'progress3');