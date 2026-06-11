const laceMap = {
  home:        { lace: 'pink_pinggiran.png', bg: 'bg-green' },
  organisasi:  { lace: 'hijau_pinggir.png',  bg: 'bg-pink'  },
  kepanitiaan: { lace: 'pink_pinggiran.png', bg: 'bg-green' },
  sertifikat:  { lace: 'hijau_pinggir.png',  bg: 'bg-pink'  },
  kontak:      { lace: 'pink_pinggiran.png', bg: 'bg-green' },
};

const activeColors = {
  home:        '#c27980',
  organisasi:  '#769656',
  kepanitiaan: '#c27980',
  sertifikat:  '#769656',
  kontak:      '#c27980',
};

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.dataset.section;

    document.querySelectorAll('nav a').forEach(l => {
      l.classList.remove('active');
      l.style.backgroundColor = '';
    });
    link.classList.add('active');
    link.style.backgroundColor = activeColors[target] || '#769656';

    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(target).classList.add('active');

    const map = laceMap[target] || laceMap.home;
    document.getElementById('lace-img').src = map.lace;
    document.body.className = map.bg;

    window.scrollTo(0, 0);
  });
});