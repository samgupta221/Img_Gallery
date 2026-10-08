document.addEventListener('DOMContentLoaded', function() {
  const filters = document.querySelectorAll('.filters button');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.querySelector('.lightbox-content');
  const closeBtn = document.querySelector('.close');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');

  let currentIndex = 0;
  let currentGalleryItems = [];

  function updateGalleryItems() {
    currentGalleryItems = Array.from(galleryItems)
      .filter(item => item.style.display !== 'none');
  }

  filters.forEach(btn => {
    btn.addEventListener('click', function() {
      filters.forEach(button => button.classList.remove('active'));
      this.classList.add('active');

      const filter = this.getAttribute('data-filter');
      galleryItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  galleryItems.forEach((item, index) => {
    item.addEventListener('click', function() {
      updateGalleryItems();
      currentIndex = currentGalleryItems.indexOf(item);
      openLightbox(item.querySelector('img').src, item.querySelector('img').alt);
    });
  });

  function openLightbox(src, alt) {
    lightbox.style.display = 'flex';
    lightboxImg.src = src;
    lightboxImg.alt = alt;
  }

  closeBtn.addEventListener('click', function() {
    lightbox.style.display = 'none';
  });


  nextBtn.addEventListener('click', function() {
    updateGalleryItems();
    currentIndex = (currentIndex + 1) % currentGalleryItems.length;
    const nextImg = currentGalleryItems[currentIndex].querySelector('img');
    lightboxImg.src = nextImg.src;
    lightboxImg.alt = nextImg.alt;
  });


  prevBtn.addEventListener('click', function() {
    updateGalleryItems();
    currentIndex = (currentIndex - 1 + currentGalleryItems.length) % currentGalleryItems.length;
    const prevImg = currentGalleryItems[currentIndex].querySelector('img');
    lightboxImg.src = prevImg.src;
    lightboxImg.alt = prevImg.alt;
  });

  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {


  const toggleBtn = document.getElementById('mode-toggle');
  const body = document.body;

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark');
    toggleBtn.textContent = '☀️ Light Mode';
  }

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');

    toggleBtn.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
});
