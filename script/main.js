<script>
    // Seleciona todos os cards de vídeo
    const videoCards = document.querySelectorAll('.video-card');

    videoCards.forEach(card => {
        const video = card.querySelector('video');
        
        card.addEventListener('click', () => {
            if (video.paused) {
                // Pausa todos os outros vídeos antes de tocar este
                document.querySelectorAll('video').forEach(v => {
                    if(v !== video) {
                        v.pause();
                        v.parentElement.classList.remove('playing');
                    }
                });

                video.play();
                card.classList.add('playing');
            } else {
                video.pause();
                card.classList.remove('playing');
            }
        });
    });
</script>