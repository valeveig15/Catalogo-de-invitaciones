(() => {
  'use strict';

  const MODELS = [
    {
      theme:'champagne', model:'01 · Champagne Sage', name:'Sofía', date:'2027-03-20T21:00:00', dateLabel:'20 · 03 · 2027',
      heroKicker:'MIS XV', quote:'Una noche para celebrar, bailar y guardar para siempre.',
      venue:'Sofitel Montevideo Casino Carrasco & Spa', venueDetail:'21:00 h · Carrasco · Montevideo', map:'Sofitel Montevideo Casino Carrasco & Spa, Montevideo, Uruguay',
      dress:'Elegante · champagne, oliva, negro o neutros', instagram:'@sofia.xv', transport:'Traslado opcional al finalizar la fiesta',
      music:'assets/music/01-champagne-pop.mp3',
      hero:'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1900&q=90',
      eventPhoto:'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=88',
      gallery:[
        'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=88',
        'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=900&q=88',
        'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=88',
        'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=88',
        'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=88',
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=88'
      ]
    },
    {
      theme:'neon', model:'02 · Neon Bloom', name:'Emilia', date:'2027-04-10T22:00:00', dateLabel:'10 · 04 · 2027',
      heroKicker:'XV NIGHT', quote:'Luces, música y una pista que no piensa apagarse.',
      venue:'Hyatt Centric Montevideo', venueDetail:'22:00 h · Pocitos · Montevideo', map:'Hyatt Centric Montevideo, Montevideo, Uruguay',
      dress:'Party glam · negro, plata o violeta', instagram:'@emi.fifteen', transport:'Parking y punto de encuentro señalizado',
      music:'assets/music/02-neon-club.mp3',
      hero:'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1900&q=90',
      eventPhoto:'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=88',
      gallery:[
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=88',
        'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=88',
        'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=88',
        'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=900&q=88',
        'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=900&q=88',
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=82'
      ]
    },
    {
      theme:'lunar', model:'03 · Lunar Chrome', name:'Renata', date:'2027-05-15T21:30:00', dateLabel:'15 · 05 · 2027',
      heroKicker:'RENATA · XV', quote:'Un cielo de luces para una noche que recién empieza.',
      venue:'Radisson Montevideo Victoria Plaza', venueDetail:'21:30 h · Centro · Montevideo', map:'Radisson Montevideo Victoria Plaza Hotel, Montevideo, Uruguay',
      dress:'Elegante · azul, gris, negro o metalizados', instagram:'@renata.15', transport:'Valet parking disponible',
      music:'assets/music/03-lunar-house.mp3',
      hero:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1900&q=90',
      eventPhoto:'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=88',
      gallery:[
        'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=90',
        'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1000&q=90',
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=90',
        'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1000&q=90',
        'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1000&q=88',
        'https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&w=1000&q=88'
      ]
    },
    {
      theme:'cherry', model:'04 · Cherry Pop Club', name:'Isabella', date:'2027-06-05T22:00:00', dateLabel:'05 · 06 · 2027',
      heroKicker:'ISABELLA · 15', quote:'Brillos, color y canciones para bailar hasta el final.',
      venue:'Club de Golf del Uruguay', venueDetail:'22:00 h · Punta Carretas · Montevideo', map:'Club de Golf del Uruguay, Montevideo, Uruguay',
      dress:'Cocktail · rojo, cereza, negro y metalizados', instagram:'@isa.xvparty', transport:'Remises coordinados desde la recepción',
      music:'assets/music/04-cherry-pop.mp3',
      hero:'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1900&q=90',
      eventPhoto:'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1400&q=88',
      gallery:[
        'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=950&q=88',
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=950&q=88',
        'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=950&q=88',
        'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=950&q=88',
        'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=950&q=88',
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1100&q=86'
      ]
    },
    {
      theme:'garden', model:'05 · Secret Garden', name:'Martina', date:'2027-08-21T21:00:00', dateLabel:'21 · 08 · 2027',
      heroKicker:'MARTINA · MIS XV', quote:'Flores, luz y un montón de momentos para compartir.',
      venue:'Hotel Cottage', venueDetail:'21:00 h · Carrasco · Montevideo', map:'Hotel Cottage, Montevideo, Uruguay',
      dress:'Elegante · perla, lavanda, verde salvia y pasteles', instagram:'@martu.xv', transport:'Traslado de regreso con reserva previa',
      music:'assets/music/05-garden-dance.mp3',
      hero:'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1900&q=90',
      eventPhoto:'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1400&q=88',
      gallery:[
        'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=950&q=90',
        'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=950&q=88',
        'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=950&q=88',
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=950&q=88',
        'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=950&q=88',
        'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=950&q=88'
      ]
    },
    {
      theme:'riviera', model:'06 · Cobalt Riviera', name:'Clara', date:'2027-09-11T20:30:00', dateLabel:'11 · 09 · 2027',
      heroKicker:'RIVIERA XV', quote:'Azul intenso, cítricos, verano y una noche que se siente de vacaciones.',
      venue:'La Baguala Hotel & Chacras', venueDetail:'20:30 h · Santiago Vázquez · Montevideo', map:'La Baguala Hotel & Chacras, Montevideo, Uruguay',
      dress:'Mediterráneo chic · blanco, azul, lima o estampados', instagram:'@clara.riviera', transport:'Bus ida y vuelta con punto de encuentro',
      music:'assets/music/06-riviera-house.mp3',
      hero:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1900&q=90',
      eventPhoto:'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=1400&q=88',
      gallery:[
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=950&q=88',
        'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=950&q=88',
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=950&q=88',
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=950&q=88',
        'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=950&q=88',
        'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=950&q=88'
      ]
    },
    {
      theme:'noir', model:'07 · Velvet Noir', name:'Victoria', date:'2027-10-02T21:30:00', dateLabel:'02 · 10 · 2027',
      heroKicker:'VELVET NOIR', quote:'Cine, terciopelo, destellos dorados y una entrada de película.',
      venue:'Teatro Solís · Salón de Eventos', venueDetail:'21:30 h · Ciudad Vieja · Montevideo', map:'Teatro Solís, Montevideo, Uruguay',
      dress:'Black tie creative · negro, dorado o vino', instagram:'@victoria.noir', transport:'Parking sugerido en Ciudad Vieja',
      music:'assets/music/07-noir-gold.mp3',
      hero:'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1900&q=90',
      eventPhoto:'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=88',
      gallery:[
        'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=950&q=88',
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=950&q=88',
        'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=950&q=88',
        'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=950&q=88',
        'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=950&q=88',
        'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=950&q=88'
      ]
    },
    {
      theme:'aqua', model:'08 · Aqua Pop', name:'Malena', date:'2027-11-06T20:00:00', dateLabel:'06 · 11 · 2027',
      heroKicker:'AQUA POP XV', quote:'Color, burbujas, sol de tarde y pop para entrar bailando.',
      venue:'Carrasco Yacht', venueDetail:'20:00 h · Carrasco · Montevideo', map:'Carrasco Yacht, Montevideo, Uruguay',
      dress:'Color pop · aqua, naranja, blanco o estampados', instagram:'@male.aquapop', transport:'Punto de descenso y retiro señalizado',
      music:'assets/music/08-aqua-pop.mp3',
      hero:'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1900&q=90',
      eventPhoto:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=88',
      gallery:[
        'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=950&q=88',
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=950&q=88',
        'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=950&q=88',
        'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=950&q=88',
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=950&q=88',
        'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=950&q=88'
      ]
    },
    {
      theme:'lilac', model:'09 · Disco Lilac', name:'Agustina', date:'2027-11-27T22:00:00', dateLabel:'27 · 11 · 2027',
      heroKicker:'DISCO LILAC', quote:'Lila, plata, flash y una pista que parece una editorial Y2K.',
      venue:'Centro de Eventos del LATU', venueDetail:'22:00 h · Carrasco · Montevideo', map:'LATU, Montevideo, Uruguay',
      dress:'Disco glam · lila, plata, blanco o negro', instagram:'@agus.discoxv', transport:'Parking dentro del predio',
      music:'assets/music/09-lilac-disco.mp3',
      hero:'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1900&q=90',
      eventPhoto:'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=88',
      gallery:[
        'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=950&q=88',
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=950&q=88',
        'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=950&q=88',
        'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=950&q=88',
        'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=950&q=88',
        'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=950&q=88'
      ]
    },
    {
      theme:'terra', model:'10 · Terra Botanica', name:'Julieta', date:'2027-12-18T20:30:00', dateLabel:'18 · 12 · 2027',
      heroKicker:'TERRA BOTANICA', quote:'Texturas, hojas, terracota y una celebración cálida con aire editorial.',
      venue:'Bodega Bouza', venueDetail:'20:30 h · Melilla · Montevideo', map:'Bodega Bouza, Montevideo, Uruguay',
      dress:'Natural chic · terracota, crema, oliva o negro', instagram:'@juli.terra15', transport:'Van de ida y regreso con reserva',
      music:'assets/music/10-terra-groove.mp3',
      hero:'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1900&q=90',
      eventPhoto:'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1400&q=88',
      gallery:[
        'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=950&q=88',
        'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=950&q=88',
        'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=950&q=88',
        'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=950&q=88',
        'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=950&q=88',
        'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=950&q=88'
      ]
    }
  ];

  const catalog = document.getElementById('catalog');
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modalBody');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const musicControl = document.getElementById('musicControl');
  const dotsWrap = document.getElementById('catalogDots');
  const modelLabel = document.getElementById('catalogModel');
  const prevBtn = document.getElementById('catalogPrev');
  const nextBtn = document.getElementById('catalogNext');
  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  let activeIndex = 0;
  let audioUnlocked = false;
  let musicWanted = true;
  let lightboxItems = [];
  let lightboxIndex = 0;

  const svg = {
    pin:`<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M32 57S15 42 15 27a17 17 0 0 1 34 0c0 15-17 30-17 30Z"/><circle cx="32" cy="27" r="6"/></svg>`,
    calendar:`<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="12" y="15" width="40" height="36" rx="7"/><path d="M20 10v10M44 10v10M12 25h40"/><path d="M23 33h4m7 0h7M23 41h7m6 0h5"/></svg>`,
    instagram:`<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="13" y="13" width="38" height="38" rx="12"/><circle cx="32" cy="32" r="9"/><circle cx="44" cy="20" r="2"/></svg>`,
    clock:`<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="21"/><path d="M32 18v14"/><path d="M32 32l11 5"/><circle cx="32" cy="32" r="2"/></svg>`,
    firstParty:`<svg class="party-orb-svg" viewBox="0 0 80 80" aria-hidden="true"><path d="M20 33a20 20 0 0 1 40 0v7H20z"/><path d="M40 12v8M24 18l5 6M56 18l-5 6"/><path d="M18 43h44M24 50h32M31 57h18"/><path class="party-rays" d="M14 30H7m66 0h-7M18 17l-5-5m54 5 5-5"/></svg>`,
    firstDress:`<svg class="dress-swing-svg" viewBox="0 0 80 80" aria-hidden="true"><path d="M27 18h26M40 18v8"/><path d="M40 26c-8 2-12 8-12 14 0 5 4 8 7 11l-9 18h28l-9-18c3-3 7-6 7-11 0-6-4-12-12-14Z"/><path d="M34 42h12"/></svg>`,
    firstBus:`<svg class="shuttle-svg" viewBox="0 0 80 80" aria-hidden="true"><rect x="12" y="22" width="56" height="34" rx="8"/><path d="M20 31h14m7 0h18M20 39h39"/><circle class="wheel-a" cx="25" cy="58" r="5"/><circle class="wheel-b" cx="55" cy="58" r="5"/><path class="road-line" d="M8 68h64"/></svg>`,
    gift:`<svg class="gift-svg" viewBox="0 0 140 120" aria-hidden="true"><g class="gift-body"><rect x="34" y="61" width="72" height="42" rx="3"/><path d="M70 61v42"/></g><g class="gift-sparks"><path d="M66 54V38M58 46h16"/><circle cx="87" cy="42" r="2.5"/></g><g class="gift-lid"><rect x="28" y="43" width="84" height="14" rx="3"/><path d="M70 43v14"/><path d="M69 43C58 39 50 34 52 27c2-6 9-4 14 1 3 4 3 9 3 15Z"/><path d="M71 43c11-4 19-9 17-16-2-6-9-4-14 1-3 4-3 9-3 15Z"/></g></svg>`,
    gardenGift:`<svg viewBox="0 0 90 90" aria-hidden="true"><path d="M28 49h34v25H28zM45 49v25M24 40h42v10H24z"/><path d="M44 40c-9-1-16-7-13-13 3-5 10 0 13 13Zm2 0c9-1 16-7 13-13-3-5-10 0-13 13Z"/><path class="garden-sprout" d="M45 24c-5-8-13-7-15-2 6 0 11 2 15 6m0-4c5-8 13-7 15-2-6 0-11 2-15 6"/></svg>`,
    gardenPlaylist:`<svg viewBox="0 0 90 90" aria-hidden="true"><circle class="garden-disc" cx="44" cy="46" r="24"/><circle cx="44" cy="46" r="6"/><path class="garden-note" d="M62 20v35m0-35 14-4v34"/><circle class="garden-note" cx="58" cy="59" r="5"/><circle class="garden-note" cx="72" cy="54" r="5"/></svg>`,
    gardenRsvp:`<svg viewBox="0 0 90 90" aria-hidden="true"><path class="rsvp-envelope" d="M17 28h56v38H17zM17 30l28 22 28-22"/><path class="rsvp-check" d="M34 48l8 8 17-19"/></svg>`
  };

  const esc = (v='') => String(v).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));

  function photos(m, cls='gallery-grid'){
    return `<div class="${cls}">${m.gallery.map((src,j)=>`<figure class="reveal" style="--delay:${(j%3)*80}ms"><img data-lightbox-img src="${src}" alt="Galería de ${esc(m.name)} · foto ${j+1}" loading="lazy" decoding="async" referrerpolicy="no-referrer"></figure>`).join('')}</div>`;
  }

  function audioFooter(m){
    return `<footer class="studio-footer"><div><b class="studio-brand">ARTEDECO.STUDIO</b><span>Invitaciones digitales personalizadas · Bodas · XV · Eventos</span></div><div><b>¿TE GUSTÓ ESTE DEMO?</b><span>Fotos, música, colores, textos y secciones se adaptan a cada fiesta.</span><a class="studio-social" href="https://www.instagram.com/artedecostudio/" target="_blank" rel="noopener">${svg.instagram}<span>@artedecostudio</span></a></div></footer><audio class="invite-audio" src="${m.music}" preload="auto" loop playsinline></audio>`;
  }

  function commonUseful(m){
    return `<section class="section useful"><div class="wrap"><p class="eyebrow reveal">INFO ÚTIL</p><h2 class="section-title reveal">Para tener todo a mano</h2><div class="useful-grid"><article class="useful-card reveal">${svg.calendar}<h3>Fecha</h3><p>${esc(m.dateLabel)}<br>${esc(m.venueDetail.split('·')[0].trim())}</p></article><article class="useful-card reveal" style="--delay:70ms">${svg.pin}<h3>Ubicación</h3><p>${esc(m.venue)}<br>Montevideo</p></article><article class="useful-card reveal" style="--delay:140ms">${svg.instagram}<h3>Compartí</h3><p>${esc(m.instagram)}<br>#${esc(m.name)}XV</p></article></div></div></section>`;
  }

  function model01(m,i){
    return `<article class="invite theme-champagne model-01" data-index="${i}" data-date="${m.date}">
      <section class="section hero hero-01"><div class="hero-media" style="background-image:url('${m.hero}')"></div><div class="hero-orbit"></div><div class="hero-inner"><p class="hero-kicker reveal">${esc(m.heroKicker)}</p><p class="hero-xv reveal">XV</p><h1 class="hero-name reveal">${esc(m.name)}</h1><p class="hero-date reveal">${esc(m.dateLabel)}</p><p class="hero-quote reveal">${esc(m.quote)}</p><button class="scroll-cue reveal" data-next-section>⌄</button></div></section>
      <section class="band count-band"><p class="reveal">Falta cada vez menos</p><div class="countdown reveal" data-countdown></div></section>
      <section class="section event-section"><div class="event-card reveal"><div class="event-photo" style="background-image:url('${m.eventPhoto}')"></div><div class="event-copy"><div class="event-icon first-party-icon">${svg.firstParty}</div><p class="eyebrow">LA FIESTA</p><h2>${esc(m.venue)}</h2><p>${esc(m.venueDetail)}<br>Una noche de música, fotos, sorpresas y mucha pista.</p><div class="event-actions"><button class="pill filled" data-map="${esc(m.map)}">Cómo llegar</button><button class="pill" data-calendar>Agendar</button></div></div></div></section>
      <section class="section gallery"><div class="wrap"><p class="eyebrow reveal">UN POQUITO DE MÍ</p><h2 class="section-title reveal">Fotos que también cuentan la historia</h2><p class="section-copy reveal">Una selección de retratos y momentos en tonos naturales, champagne y oliva para acompañar la estética de esta tarjeta.</p>${photos(m)}</div></section>
      <section class="section extras"><div class="wrap"><p class="eyebrow reveal">DETALLES DE LA NOCHE</p><h2 class="section-title reveal">Todo lo que tus invitados necesitan saber</h2><div class="extra-grid"><article class="extra-card reveal"><div class="extra-icon icon-dress-first">${svg.firstDress}</div><h3>Dress code</h3><p>${esc(m.dress)}</p></article><article class="extra-card reveal" style="--delay:70ms"><div class="extra-icon">${svg.instagram}</div><h3>Instagram</h3><p>${esc(m.instagram)}<br>#${esc(m.name)}XV</p></article><article class="extra-card reveal" style="--delay:140ms"><div class="extra-icon icon-bus-first">${svg.firstBus}</div><h3>Traslados</h3><p>${esc(m.transport)}</p></article><article class="extra-card reveal" style="--delay:210ms"><div class="extra-icon">${svg.clock}</div><h3>Horario</h3><p>Recepción puntual y pista hasta el cierre.</p></article></div></div></section>
      <section class="band gift-section"><div class="wrap gift-wrap"><div class="gift-anim reveal">${svg.gift}</div><p class="eyebrow">REGALOS</p><h2 class="section-title">Tu presencia es lo más importante</h2><p class="section-copy">Si querés hacerme un regalo, podés ver acá los datos elegidos para esta invitación.</p><button class="pill light" data-gift>Ver datos de regalo</button></div></section>
      <section class="section playlist"><div class="wrap"><div class="vinyl vinyl-strong reveal" aria-hidden="true"><span>XV</span></div><p class="eyebrow reveal">LA PLAYLIST TAMBIÉN LA ARMAMOS JUNTOS</p><h2 class="section-title reveal">¿Qué canción no puede faltar?</h2><p class="section-copy reveal">Mandame ese tema que te hace salir a bailar sí o sí.</p><button class="pill filled reveal" data-song>Proponer canción</button></div></section>
      ${commonUseful(m)}
      <section class="section rsvp"><div class="rsvp-card reveal"><p class="eyebrow">CONFIRMACIÓN</p><h2 class="section-title">¿Venís a celebrar conmigo?</h2><p class="section-copy">Confirmá asistencia y contame si tenés alguna necesidad alimentaria o dato que debamos tener en cuenta.</p><button class="pill filled" data-rsvp="${esc(m.name)}">Confirmar asistencia</button></div></section>
      <section class="band closing"><div class="wrap"><p class="eyebrow reveal">NOS VEMOS EN LA PISTA</p><h2 class="reveal">${esc(m.name)}</h2><p class="reveal">MIS XV · ${esc(m.dateLabel)}</p></div></section>${audioFooter(m)}
    </article>`;
  }

  function model02(m,i){
    return `<article class="invite theme-neon model-02" data-index="${i}" data-date="${m.date}">
      <section class="section hero hero-02"><div class="hero-media" style="background-image:url('${m.hero}')"></div><div class="neon-grid"></div><div class="hero-inner"><p class="hero-kicker reveal">${esc(m.heroKicker)}</p><p class="hero-xv reveal">XV</p><h1 class="hero-name reveal">${esc(m.name)}</h1><p class="hero-date reveal">${esc(m.dateLabel)}</p><p class="hero-quote reveal">${esc(m.quote)}</p><button class="scroll-cue reveal" data-next-section>⌄</button></div></section>
      <section class="band count-band"><p class="reveal">THE NIGHT STARTS IN</p><div class="countdown reveal" data-countdown></div></section>
      <section class="section event-section"><div class="event-card reveal"><div class="event-photo" style="background-image:url('${m.eventPhoto}')"></div><div class="event-copy"><div class="neon-bolt">⚡</div><p class="eyebrow">PARTY LOCATION</p><h2>${esc(m.venue)}</h2><p>${esc(m.venueDetail)}<br>Luces, DJ, pista y una noche pensada para moverse.</p><div class="event-actions"><button class="pill filled" data-map="${esc(m.map)}">Cómo llegar</button><button class="pill" data-calendar>Agendar</button></div></div></div></section>
      <section class="section gallery"><div class="wrap"><p class="eyebrow reveal">NIGHT SHOTS</p><h2 class="section-title reveal">Flash, movimiento y energía</h2>${photos(m)}</div></section>
      <section class="section neon-info"><div class="wrap"><div class="neon-info-grid"><article class="reveal"><b>DRESS</b><p>${esc(m.dress)}</p></article><article class="reveal"><b>POST</b><p>${esc(m.instagram)} · #${esc(m.name)}XV</p></article><article class="reveal"><b>RIDE</b><p>${esc(m.transport)}</p></article></div></div></section>
      <section class="section playlist neon-playlist"><div class="wrap"><div class="equalizer reveal"><i></i><i></i><i></i><i></i><i></i></div><p class="eyebrow">BUILD THE SETLIST</p><h2 class="section-title">Sumá tu canción</h2><p class="section-copy">La pista también se arma entre todos.</p><button class="pill filled" data-song>Proponer canción</button></div></section>
      <section class="section rsvp"><div class="rsvp-card reveal"><p class="eyebrow">RSVP</p><h2 class="section-title">¿Entrás al club?</h2><p class="section-copy">Confirmá tu lugar para esta noche.</p><button class="pill filled" data-rsvp="${esc(m.name)}">Confirmar</button></div></section>
      <section class="band closing"><div class="wrap"><p>SEE YOU UNDER THE LIGHTS</p><h2>${esc(m.name)}</h2><p>${esc(m.dateLabel)}</p></div></section>${audioFooter(m)}
    </article>`;
  }

  function model03(m,i){
    return `<article class="invite theme-lunar model-03" data-index="${i}" data-date="${m.date}">
      <section class="section m3-hero"><div class="m3-gridlines"></div><div class="m3-number reveal">15</div><div class="m3-copy"><p class="m3-overline reveal">LUNAR CHROME · XV EXPERIENCE</p><h1 class="reveal">${esc(m.name)}</h1><p class="m3-date reveal">${esc(m.dateLabel)}</p><p class="m3-quote reveal">“${esc(m.quote)}”</p><button class="m3-scroll reveal" data-next-section>ENTER THE NIGHT ↓</button></div><div class="m3-portrait reveal"><div class="m3-photo" style="background-image:url('${m.hero}')"></div><span>RENATA / 15 / 2027</span></div></section>
      <section class="m3-count"><p class="m3-count-label reveal">COUNTDOWN TO MIDNIGHT</p><div class="countdown reveal" data-countdown></div></section>
      <section class="section m3-venue"><div class="m3-venue-photo reveal" style="background-image:url('${m.eventPhoto}')"></div><div class="m3-venue-copy reveal"><p class="eyebrow">THE LOCATION</p><h2>${esc(m.venue)}</h2><p>${esc(m.venueDetail)}<br>${esc(m.dress)}</p><div class="event-actions"><button class="pill filled" data-map="${esc(m.map)}">MAP</button><button class="pill" data-calendar>CALENDAR</button></div></div></section>
      <section class="section m3-gallery"><div class="wrap"><p class="eyebrow reveal">BLUE HOUR / FLASH / CHROME</p><h2 class="section-title reveal">Fotos con contraste, noche y movimiento</h2>${photos(m,'m3-mosaic')}</div></section>
      <section class="section m3-details"><div class="wrap"><div class="m3-detail-grid"><article class="reveal"><span>01</span><b>LOOK</b><p>${esc(m.dress)}</p></article><article class="reveal"><span>02</span><b>POST</b><p>${esc(m.instagram)}</p></article><article class="reveal"><span>03</span><b>RIDE</b><p>${esc(m.transport)}</p></article></div></div></section>
      <section class="section m3-sound"><div class="m3-disc reveal"><span>XV</span></div><div class="m3-sound-copy"><p class="eyebrow">SOUNDTRACK</p><h2 class="section-title">La música también habla de vos</h2><p class="section-copy">Sumá tu canción a una playlist pensada para empezar elegante y terminar arriba.</p><button class="pill filled" data-song>Sumar canción</button></div></section>
      <section class="section rsvp"><div class="rsvp-card reveal"><p class="eyebrow">RSVP</p><h2 class="section-title">Confirmá tu órbita</h2><button class="pill filled" data-rsvp="${esc(m.name)}">Confirmar asistencia</button></div></section>
      <section class="m3-closing"><span>LUNAR CHROME</span><h2>${esc(m.name)}</h2><p>${esc(m.dateLabel)}</p></section>${audioFooter(m)}
    </article>`;
  }

  function model04(m,i){
    return `<article class="invite theme-cherry model-04" data-index="${i}" data-date="${m.date}">
      <section class="section m4-hero"><div class="m4-checker"></div><div class="m4-hero-card reveal"><img src="${m.hero}" alt="Fiesta de ${esc(m.name)}" referrerpolicy="no-referrer"><span>05.06.27</span></div><div class="m4-hero-copy"><p class="m4-kicker reveal">CHERRY POP CLUB</p><h1 class="reveal">${esc(m.name)}</h1><p class="m4-xv reveal">FIFTEEN</p><p class="reveal">${esc(m.quote)}</p><button class="m4-button reveal" data-next-section>LET'S GO ↓</button></div></section>
      <section class="m4-marquee"><div>LET'S DANCE · XV PARTY · CHERRY POP · LET'S DANCE · XV PARTY · CHERRY POP ·&nbsp;</div></section>
      <section class="section m4-ticket-section"><div class="m4-ticket reveal"><div class="m4-ticket-left"><span>ADMIT ONE</span><b>XV</b><small>${esc(m.name)}</small></div><div class="m4-ticket-main"><p>THE PARTY</p><h2>${esc(m.venue)}</h2><h3>${esc(m.venueDetail)}</h3><div class="m4-ticket-actions"><button class="pill filled" data-map="${esc(m.map)}">Cómo llegar</button><button class="pill" data-calendar>Agendar</button></div></div><div class="m4-barcode"></div></div></section>
      <section class="section m4-count-section"><div class="m4-count-icon reveal" aria-hidden="true"><span>✦</span><i></i><i></i><i></i></div><div><p class="eyebrow reveal">COUNTDOWN</p><h2 class="section-title reveal">La pista abre en…</h2><div class="countdown reveal" data-countdown></div></div></section>
      <section class="section m4-polaroid-section"><div class="wrap"><p class="eyebrow reveal">CAMERA ROLL</p><h2 class="section-title reveal">Momentos, poses y energía pop</h2>${photos(m,'m4-polaroids')}</div></section>
      <section class="section m4-club-info"><div class="wrap"><p class="eyebrow reveal">PARTY GUIDE</p><h2 class="section-title reveal">Cuatro claves antes de salir</h2><div class="m4-club-grid"><article class="reveal"><span>LOOK</span><h3>Dress code</h3><p>${esc(m.dress)}</p></article><article class="reveal"><span>POST</span><h3>Instagram</h3><p>${esc(m.instagram)}<br>#${esc(m.name)}XV</p></article><article class="reveal"><span>RIDE</span><h3>Traslados</h3><p>${esc(m.transport)}</p></article><article class="reveal"><span>START</span><h3>Horario</h3><p>22:00 · puntual</p></article></div></div></section>
      <section class="section m4-tracklist"><div class="m4-track-card reveal"><div class="m4-track-head"><span>NOW PLAYING</span><b>ISABELLA'S XV</b></div><ol><li><span>01</span>Tu canción favorita <button data-song>+</button></li><li><span>02</span>Ese tema que todos gritan <button data-song>+</button></li><li><span>03</span>El hit para cerrar arriba <button data-song>+</button></li></ol><button class="m4-add-track" data-song>+ AGREGAR UNA CANCIÓN</button></div></section>
      <section class="section m4-gift"><div class="m4-gift-copy"><p class="eyebrow reveal">GIFT DROP</p><h2 class="section-title reveal">Presencia primero. Regalo después.</h2><p class="section-copy reveal">Si querés hacerme un regalo, encontrás los datos acá.</p><button class="pill filled reveal" data-gift>Ver datos</button></div><div class="m4-gift-box reveal" aria-hidden="true">${svg.gift}<span>XV</span></div></section>
      <section class="section m4-rsvp"><div class="m4-rsvp-card reveal"><span class="m4-rsvp-star">★</span><p class="eyebrow">RSVP</p><h2>¿Te sumás al club?</h2><p>Confirmá y guardamos tu lugar en la pista.</p><button class="m4-button dark" data-rsvp="${esc(m.name)}">CONFIRMAR</button></div></section>
      <section class="m4-closing"><div>SEE YOU ON THE DANCE FLOOR</div><h2>${esc(m.name)}</h2><p>${esc(m.dateLabel)}</p></section>${audioFooter(m)}
    </article>`;
  }

  function model05(m,i){
    return `<article class="invite theme-garden model-05" data-index="${i}" data-date="${m.date}">
      <section class="section m5-hero"><div class="m5-leaf l1"></div><div class="m5-leaf l2"></div><div class="m5-big15">15</div><div class="m5-arch reveal"><div class="m5-arch-photo" style="background-image:url('${m.hero}')"></div></div><div class="m5-hero-copy"><p class="m5-kicker reveal">SECRET GARDEN · MIS XV</p><h1 class="reveal">${esc(m.name)}</h1><p class="m5-date reveal">${esc(m.dateLabel)}</p><p class="m5-quote reveal">${esc(m.quote)}</p><button class="m5-scroll reveal" data-next-section>descubrir la invitación ↓</button></div></section>
      <section class="section m5-pearl-count"><div class="wrap"><p class="eyebrow reveal">LA ESPERA TAMBIÉN ES PARTE DE LA MAGIA</p><div class="m5-count-shell reveal"><div class="countdown" data-countdown></div></div></div></section>
      <section class="section m5-letter"><div class="m5-letter-paper reveal"><span class="m5-wax">15</span><p class="eyebrow">UNA NOCHE PARA RECORDAR</p><h2>Quiero compartir con vos uno de esos momentos que quedan para siempre.</h2><p>Una invitación de inspiración jardín, con texturas naturales, perla, lavanda y verde salvia.</p></div></section>
      <section class="section m5-venue"><div class="m5-venue-card reveal"><div class="m5-venue-photo" style="background-image:url('${m.eventPhoto}')"></div><div class="m5-venue-copy"><span class="m5-mini-flower">❦</span><p class="eyebrow">LA CELEBRACIÓN</p><h2>${esc(m.venue)}</h2><p>${esc(m.venueDetail)}<br>${esc(m.dress)}</p><div class="event-actions"><button class="pill filled" data-map="${esc(m.map)}">Cómo llegar</button><button class="pill" data-calendar>Agendar</button></div></div></div></section>
      <section class="section m5-scrap"><div class="wrap"><p class="eyebrow reveal">MY LITTLE ALBUM</p><h2 class="section-title reveal">Flores, retratos y recuerdos suaves</h2><p class="section-copy reveal">Las imágenes se integran con la paleta botánica de la invitación.</p>${photos(m,'m5-scrapbook')}</div></section>
      <section class="section m5-detail-garden"><div class="wrap"><p class="eyebrow reveal">ANTES DE VENIR</p><h2 class="section-title reveal">Detalles para disfrutar la noche</h2><div class="m5-detail-grid"><article class="reveal"><b>Dress code</b><p>${esc(m.dress)}</p></article><article class="reveal"><b>Compartí</b><p>${esc(m.instagram)} · #${esc(m.name)}XV</p></article><article class="reveal"><b>Traslados</b><p>${esc(m.transport)}</p></article><article class="reveal"><b>Horario</b><p>21:00 · recepción y bienvenida</p></article></div></div></section>
      <section class="section m5-gift-song"><div class="m5-garden-card m5-gift-card reveal"><div class="m5-animated-icon garden-gift-icon">${svg.gardenGift}</div><p class="eyebrow">REGALO</p><h3>Tu presencia ya es parte del recuerdo.</h3><p>Si querés sumar un regalo, encontrás los datos acá.</p><button class="pill" data-gift>Ver datos</button></div><div class="m5-garden-card reveal"><div class="m5-animated-icon garden-playlist-icon">${svg.gardenPlaylist}</div><p class="eyebrow">PLAYLIST</p><h3>Una canción para mi noche.</h3><p>Dejame ese tema que para vos no puede faltar.</p><button class="pill filled" data-song>Proponer canción</button></div></section>
      <section class="section m5-rsvp"><div class="m5-rsvp-card reveal"><div class="m5-rsvp-ornament">${svg.gardenRsvp}</div><p class="eyebrow">CONFIRMACIÓN</p><h2>¿Vas a estar conmigo?</h2><p>Confirmá asistencia y contame cualquier detalle que necesitemos saber.</p><button class="pill filled" data-rsvp="${esc(m.name)}">Confirmar asistencia</button></div></section>
      <section class="m5-closing"><p>con cariño,</p><h2>${esc(m.name)}</h2><span>XV · ${esc(m.dateLabel)}</span></section>${audioFooter(m)}
    </article>`;
  }

  function model06(m,i){
    return `<article class="invite theme-riviera model-06" data-index="${i}" data-date="${m.date}">
      <section class="section r6-hero"><div class="r6-sun"></div><div class="r6-photo reveal" style="background-image:url('${m.hero}')"></div><div class="r6-copy"><p>${esc(m.heroKicker)}</p><h1>${esc(m.name)}</h1><b>XV</b><span>${esc(m.dateLabel)}</span><em>${esc(m.quote)}</em><button data-next-section>BAJAR A LA RIVIERA ↓</button></div></section>
      <section class="r6-count"><span>SOON BY THE SEA</span><div class="countdown" data-countdown></div></section>
      <section class="section r6-postcard"><div class="r6-card reveal"><div style="background-image:url('${m.eventPhoto}')"></div><article><small>POSTCARD Nº 15</small><h2>${esc(m.venue)}</h2><p>${esc(m.venueDetail)}</p><p>${esc(m.dress)}</p><button class="pill filled" data-map="${esc(m.map)}">Cómo llegar</button><button class="pill" data-calendar>Agendar</button></article></div></section>
      <section class="section r6-gallery"><div class="wrap"><p class="eyebrow">POSTCARDS</p><h2 class="section-title">Azul, blanco, sol y movimiento</h2>${photos(m,'r6-tiles')}</div></section>
      <section class="section r6-info"><div class="r6-info-grid"><article><span>01</span><b>LOOK</b><p>${esc(m.dress)}</p></article><article><span>02</span><b>RIDE</b><p>${esc(m.transport)}</p></article><article><span>03</span><b>SHARE</b><p>${esc(m.instagram)}</p></article></div></section>
      <section class="section r6-music"><div class="r6-wave-icon">♫</div><div><p class="eyebrow">SUNSET SET</p><h2 class="section-title">Elegí una canción para el atardecer</h2><button class="pill filled" data-song>Sumar canción</button></div></section>
      <section class="section r6-rsvp"><div><p>BOARDING PASS</p><h2>¿Venís?</h2><button data-rsvp="${esc(m.name)}">CONFIRMAR LUGAR</button></div></section>${audioFooter(m)}
    </article>`;
  }

  function model07(m,i){
    return `<article class="invite theme-noir model-07" data-index="${i}" data-date="${m.date}">
      <section class="section n7-hero"><div class="n7-media" style="background-image:url('${m.hero}')"></div><div class="n7-frame"></div><div class="n7-copy reveal"><p>${esc(m.heroKicker)}</p><h1>${esc(m.name)}</h1><span>XV · ${esc(m.dateLabel)}</span><em>${esc(m.quote)}</em><button data-next-section>OPENING CREDITS ↓</button></div></section>
      <section class="n7-count"><div>ACT I · COUNTDOWN</div><div class="countdown" data-countdown></div></section>
      <section class="section n7-scene"><div class="n7-scene-card"><div style="background-image:url('${m.eventPhoto}')"></div><article><p>SCENE 01</p><h2>${esc(m.venue)}</h2><p>${esc(m.venueDetail)}<br>${esc(m.dress)}</p><div class="event-actions"><button class="pill filled" data-map="${esc(m.map)}">Ubicación</button><button class="pill" data-calendar>Agenda</button></div></article></div></section>
      <section class="section n7-gallery"><div class="wrap"><p class="eyebrow">FILM STILLS</p><h2 class="section-title">Una noche en blanco, negro y oro</h2>${photos(m,'n7-film')}</div></section>
      <section class="section n7-credits"><div class="wrap"><div class="n7-credit-grid"><article><small>WARDROBE</small><b>${esc(m.dress)}</b></article><article><small>TRANSPORT</small><b>${esc(m.transport)}</b></article><article><small>SOCIAL</small><b>${esc(m.instagram)}</b></article></div></div></section>
      <section class="section n7-music"><div class="n7-record">15</div><div><p class="eyebrow">SCORE</p><h2 class="section-title">Elegí una canción para los créditos</h2><button class="pill filled" data-song>Proponer canción</button></div></section>
      <section class="section n7-rsvp"><div class="n7-rsvp-card"><span>FINAL CAST</span><h2>¿Tu nombre está en la lista?</h2><button data-rsvp="${esc(m.name)}">CONFIRMAR ASISTENCIA</button></div></section>${audioFooter(m)}
    </article>`;
  }

  function model08(m,i){
    return `<article class="invite theme-aqua model-08" data-index="${i}" data-date="${m.date}">
      <section class="section a8-hero"><div class="a8-bubble b1"></div><div class="a8-bubble b2"></div><div class="a8-photo reveal" style="background-image:url('${m.hero}')"></div><div class="a8-copy"><p>${esc(m.heroKicker)}</p><h1>${esc(m.name)}</h1><strong>15</strong><span>${esc(m.dateLabel)}</span><em>${esc(m.quote)}</em><button data-next-section>SPLASH ↓</button></div></section>
      <section class="a8-count"><div class="countdown" data-countdown></div></section>
      <section class="section a8-wristband"><div class="a8-band-card reveal"><div>XV ACCESS</div><article><h2>${esc(m.venue)}</h2><p>${esc(m.venueDetail)}</p><button class="pill filled" data-map="${esc(m.map)}">MAP</button><button class="pill" data-calendar>DATE</button></article><b>${esc(m.name)}</b></div></section>
      <section class="section a8-gallery"><div class="wrap"><p class="eyebrow">COLOR SPLASH</p><h2 class="section-title">Fotos con aire fresco y pop</h2>${photos(m,'a8-collage')}</div></section>
      <section class="section a8-info"><div class="a8-info-grid"><article><b>LOOK</b><p>${esc(m.dress)}</p></article><article><b>RIDE</b><p>${esc(m.transport)}</p></article><article><b>TAG</b><p>${esc(m.instagram)}</p></article></div></section>
      <section class="section a8-music"><div class="a8-headphones">♫</div><h2>DROP YOUR SONG</h2><p>Ese tema que te hace saltar de la silla.</p><button class="pill filled" data-song>SUMAR</button></section>
      <section class="section a8-rsvp"><div><span>YOU'RE ON THE LIST</span><h2>¿Venís?</h2><button data-rsvp="${esc(m.name)}">YES, I'M IN</button></div></section>${audioFooter(m)}
    </article>`;
  }

  function model09(m,i){
    return `<article class="invite theme-lilac model-09" data-index="${i}" data-date="${m.date}">
      <section class="section d9-hero"><div class="d9-chrome">XV</div><div class="d9-photo reveal" style="background-image:url('${m.hero}')"></div><div class="d9-copy"><p>${esc(m.heroKicker)}</p><h1>${esc(m.name)}</h1><span>${esc(m.dateLabel)}</span><em>${esc(m.quote)}</em><button data-next-section>FLASH ↓</button></div></section>
      <section class="d9-count"><span>00:00 UNTIL</span><div class="countdown" data-countdown></div></section>
      <section class="section d9-editorial"><div class="d9-editorial-card reveal"><div style="background-image:url('${m.eventPhoto}')"></div><article><p>ISSUE 15</p><h2>${esc(m.venue)}</h2><p>${esc(m.venueDetail)}<br>${esc(m.dress)}</p><button class="pill filled" data-map="${esc(m.map)}">GO</button><button class="pill" data-calendar>SAVE</button></article></div></section>
      <section class="section d9-gallery"><div class="wrap"><p class="eyebrow">FLASH EDIT</p><h2 class="section-title">Un collage tipo revista</h2>${photos(m,'d9-magazine')}</div></section>
      <section class="section d9-holo"><div class="d9-holo-grid"><article><span>01</span><b>DRESS</b><p>${esc(m.dress)}</p></article><article><span>02</span><b>RIDE</b><p>${esc(m.transport)}</p></article><article><span>03</span><b>SHARE</b><p>${esc(m.instagram)}</p></article></div></section>
      <section class="section d9-playlist"><div class="d9-disc">♪</div><div><p class="eyebrow">DISCO REQUEST</p><h2 class="section-title">Poné un track en la lista</h2><button class="pill filled" data-song>REQUEST</button></div></section>
      <section class="section d9-rsvp"><div><b>RSVP.exe</b><h2>¿Confirmamos?</h2><button data-rsvp="${esc(m.name)}">CONFIRMAR</button></div></section>${audioFooter(m)}
    </article>`;
  }

  function model10(m,i){
    return `<article class="invite theme-terra model-10" data-index="${i}" data-date="${m.date}">
      <section class="section t10-hero"><div class="t10-leafline"></div><div class="t10-photo reveal" style="background-image:url('${m.hero}')"></div><div class="t10-paper reveal"><p>${esc(m.heroKicker)}</p><h1>${esc(m.name)}</h1><b>XV</b><span>${esc(m.dateLabel)}</span><em>${esc(m.quote)}</em><button data-next-section>DESCUBRIR ↓</button></div></section>
      <section class="t10-count"><div class="countdown" data-countdown></div></section>
      <section class="section t10-venue"><div class="t10-venue-card reveal"><article><p>CAPÍTULO 01</p><h2>${esc(m.venue)}</h2><p>${esc(m.venueDetail)}<br>${esc(m.dress)}</p><button class="pill filled" data-map="${esc(m.map)}">Cómo llegar</button><button class="pill" data-calendar>Agendar</button></article><div style="background-image:url('${m.eventPhoto}')"></div></div></section>
      <section class="section t10-gallery"><div class="wrap"><p class="eyebrow">EDITORIAL BOTÁNICO</p><h2 class="section-title">Tierra, textura y retratos</h2>${photos(m,'t10-torn')}</div></section>
      <section class="section t10-info"><div class="t10-info-grid"><article><span>LOOK</span><p>${esc(m.dress)}</p></article><article><span>RIDE</span><p>${esc(m.transport)}</p></article><article><span>SOCIAL</span><p>${esc(m.instagram)}</p></article></div></section>
      <section class="section t10-music"><div class="t10-flower-note">♪</div><div><p class="eyebrow">SONIDO DE LA NOCHE</p><h2 class="section-title">Dejame una canción</h2><button class="pill filled" data-song>PROPONER</button></div></section>
      <section class="section t10-rsvp"><div class="t10-rsvp-card"><span>✓</span><h2>Quiero contar con vos</h2><p>Confirmá tu asistencia para cerrar la lista.</p><button data-rsvp="${esc(m.name)}">CONFIRMAR</button></div></section>${audioFooter(m)}
    </article>`;
  }

  const TEMPLATES=[model01,model02,model03,model04,model05,model06,model07,model08,model09,model10];
  catalog.innerHTML = MODELS.map((m,i)=>TEMPLATES[i](m,i)).join('');
  dotsWrap.innerHTML = MODELS.map((_,i)=>`<button type="button" aria-label="Ver modelo ${i+1}" data-dot="${i}"></button>`).join('');

  const invites=[...document.querySelectorAll('.invite')];
  const audios=[...document.querySelectorAll('.invite-audio')];

  function updateCountdowns(){
    invites.forEach(invite=>{
      const target=new Date(invite.dataset.date).getTime();
      const diff=Math.max(0,target-Date.now());
      const vals=[['días',Math.floor(diff/86400000)],['hrs',Math.floor(diff%86400000/3600000)],['min',Math.floor(diff%3600000/60000)],['seg',Math.floor(diff%60000/1000)]];
      invite.querySelectorAll('[data-countdown]').forEach(el=>el.innerHTML=vals.map(([l,v])=>`<div class="unit"><b>${String(v).padStart(2,'0')}</b><span>${l}</span></div>`).join(''));
    });
  }
  updateCountdowns(); setInterval(updateCountdowns,1000);

  const openModal=markup=>{modalBody.innerHTML=markup;modal.classList.add('open');modal.setAttribute('aria-hidden','false')};
  const closeModal=()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true')};
  document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',closeModal));

  document.addEventListener('click',e=>{
    const map=e.target.closest('[data-map]'); if(map){window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(map.dataset.map||'')}`,'_blank','noopener');return}
    const gift=e.target.closest('[data-gift]'); if(gift){openModal('<h2 id="modalTitle">Datos para regalo</h2><p>En la versión final se cargan acá los datos bancarios, alias, link de regalo o la opción que elija la familia.</p>');return}
    const song=e.target.closest('[data-song]'); if(song){openModal('<h2 id="modalTitle">¿Qué canción no puede faltar?</h2><p>Sumá tu canción a la playlist de la fiesta.</p><form id="songForm"><input required placeholder="Canción"><input placeholder="Artista"><input placeholder="Tu nombre (opcional)"><button class="pill filled" type="submit">ENVIAR</button></form>');document.getElementById('songForm')?.addEventListener('submit',ev=>{ev.preventDefault();openModal('<h2 id="modalTitle">¡Anotada! ♪</h2><p>Gracias por sumar música a la fiesta.</p>')});return}
    const rsvp=e.target.closest('[data-rsvp]'); if(rsvp){openModal(`<h2 id="modalTitle">Confirmación de asistencia</h2><p>XV de ${esc(rsvp.dataset.rsvp||'')}</p><form id="rsvpForm"><input required placeholder="Nombre y apellido" autocomplete="name"><select><option>Confirmo asistencia</option><option>No podré asistir</option></select><textarea placeholder="Alergias, alimentación o mensaje"></textarea><button class="pill filled" type="submit">ENVIAR</button></form>`);document.getElementById('rsvpForm')?.addEventListener('submit',ev=>{ev.preventDefault();openModal('<h2 id="modalTitle">¡Gracias!</h2><p>La respuesta quedó registrada en esta demostración.</p>')});return}
    const cal=e.target.closest('[data-calendar]'); if(cal){const inv=cal.closest('.invite');const m=MODELS[Number(inv.dataset.index)];const start=new Date(m.date),end=new Date(start.getTime()+7*3600000);const compact=d=>d.toISOString().replace(/[-:]/g,'').replace(/\.\d{3}Z$/,'Z');const params=new URLSearchParams({action:'TEMPLATE',text:`XV de ${m.name}`,dates:`${compact(start)}/${compact(end)}`,details:`Fiesta de XV de ${m.name}`,location:m.map});openModal(`<h2 id="modalTitle">Agendar evento</h2><p>Guardá la fecha en tu calendario.</p><a class="pill filled" target="_blank" rel="noopener" href="https://calendar.google.com/calendar/render?${params.toString()}">GOOGLE CALENDAR</a>`);return}
    const next=e.target.closest('[data-next-section]'); if(next){const section=next.closest('section');const inv=next.closest('.invite');const target=section?.nextElementSibling;if(target)inv.scrollTo({top:target.offsetTop,behavior:'smooth'});return}
  });

  lightboxItems=[...document.querySelectorAll('[data-lightbox-img]')];
  lightboxItems.forEach((img,i)=>{img.tabIndex=0;img.setAttribute('role','button');img.addEventListener('click',()=>openLightbox(i));img.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openLightbox(i)}})});
  function openLightbox(i){lightboxIndex=i;renderLightbox();lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false')}
  function renderLightbox(){const img=lightboxItems[lightboxIndex];if(!img)return;lightboxImg.src=img.currentSrc||img.src;lightboxImg.alt=img.alt;lightboxCaption.textContent=img.alt}
  function stepLightbox(d){lightboxIndex=(lightboxIndex+d+lightboxItems.length)%lightboxItems.length;renderLightbox()}
  function closeLightbox(){lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');lightboxImg.removeAttribute('src')}
  document.querySelectorAll('[data-lightbox-close]').forEach(b=>b.addEventListener('click',closeLightbox));
  document.getElementById('lightboxPrev').addEventListener('click',()=>stepLightbox(-1));
  document.getElementById('lightboxNext').addEventListener('click',()=>stepLightbox(1));

  const revealEls=[...document.querySelectorAll('.reveal')];
  if(reduceMotion||!('IntersectionObserver'in window)) revealEls.forEach(el=>el.classList.add('visible'));
  else {const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');io.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -4% 0px'});revealEls.forEach(el=>io.observe(el));}

  function width(){return Math.max(1,catalog.clientWidth)}
  function setActive(index,{scroll=false}={}){
    activeIndex=(index+MODELS.length)%MODELS.length;
    modelLabel.textContent=MODELS[activeIndex].model;
    dotsWrap.querySelectorAll('button').forEach((d,i)=>d.classList.toggle('active',i===activeIndex));
    if(scroll) catalog.scrollTo({left:activeIndex*width(),behavior:'smooth'});
    switchTrack();
  }
  prevBtn.addEventListener('click',()=>setActive(activeIndex-1,{scroll:true}));
  nextBtn.addEventListener('click',()=>setActive(activeIndex+1,{scroll:true}));
  dotsWrap.addEventListener('click',e=>{const b=e.target.closest('[data-dot]');if(b)setActive(Number(b.dataset.dot),{scroll:true})});
  let scrollTimer;
  catalog.addEventListener('scroll',()=>{clearTimeout(scrollTimer);scrollTimer=setTimeout(()=>setActive(Math.round(catalog.scrollLeft/width())),100)},{passive:true});

  async function playActive(){
    const audio=audios[activeIndex];
    if(!audio||!musicWanted)return false;
    audios.forEach((a,i)=>{if(i!==activeIndex){a.pause();a.currentTime=0}});
    audio.volume=.42; audio.muted=false;
    try{await audio.play();audioUnlocked=true;updateMusic();return true}catch(err){console.info('Audio pendiente de interacción del usuario.');updateMusic();return false}
  }
  function switchTrack(){audios.forEach((a,i)=>{if(i!==activeIndex){a.pause();a.currentTime=0}});if(audioUnlocked&&musicWanted)playActive();updateMusic()}
  function updateMusic(){const a=audios[activeIndex];const playing=!!a&&!a.paused&&!a.muted;musicControl.classList.toggle('playing',playing);musicControl.classList.toggle('muted',!playing);musicControl.setAttribute('aria-pressed',String(playing));musicControl.setAttribute('aria-label',playing?'Silenciar música':'Activar música')}
  musicControl.addEventListener('click',async e=>{e.stopPropagation();const a=audios[activeIndex];if(!a)return;if(!a.paused&&!a.muted){musicWanted=false;a.pause();updateMusic()}else{musicWanted=true;await playActive()}});
  const unlock=async e=>{if(e.target.closest?.('#musicControl'))return;const ok=await playActive();if(ok){document.removeEventListener('pointerdown',unlock,true);document.removeEventListener('keydown',unlock,true)}};
  document.addEventListener('pointerdown',unlock,true);document.addEventListener('keydown',unlock,true);
  audios.forEach(a=>['play','pause','volumechange','canplay'].forEach(ev=>a.addEventListener(ev,updateMusic)));

  document.addEventListener('keydown',e=>{if(lightbox.classList.contains('open')){if(e.key==='Escape')closeLightbox();if(e.key==='ArrowRight')stepLightbox(1);if(e.key==='ArrowLeft')stepLightbox(-1);return}if(modal.classList.contains('open')&&e.key==='Escape'){closeModal();return}if(e.altKey&&e.key==='ArrowRight')setActive(activeIndex+1,{scroll:true});if(e.altKey&&e.key==='ArrowLeft')setActive(activeIndex-1,{scroll:true})});
  addEventListener('resize',()=>catalog.scrollTo({left:activeIndex*width(),behavior:'auto'}));

  setActive(0);
  updateMusic();
})();
