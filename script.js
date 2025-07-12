
    const featureCards = document.querySelector('#features-cards').innerHTML;
    const profileCards = document.querySelector('#profile-cards').innerHTML;

    const featuresWrapper = document.getElementById('features-wrapper');
    const profilesWrapper = document.getElementById('profiles-wrapper');

    for (let i = 0; i < 6; i++) {
      featuresWrapper.innerHTML += featureCards;
      profilesWrapper.innerHTML += profileCards;
    }

    // 🧠 Scroll hide navbar
    let prevScroll = window.scrollY;
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;

      if (currentScroll > prevScroll && currentScroll > 100) {
        navbar.style.transform = 'translateY(-100%)';
      } else {
        navbar.style.transform = 'translateY(0)';
      }

      prevScroll = currentScroll;
    });