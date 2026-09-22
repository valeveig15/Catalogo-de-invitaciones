(() => {
  'use strict';

  const MODELS = [
    {
      theme:'aurora', model:'01 · Aurora Rose', name:'Sofía', date:'2027-03-20T21:00:00', dateLabel:'20 · 03 · 2027',
      heroKicker:'MIS XV', quote:'Una noche para celebrar, bailar y guardar para siempre.',
      venue:'Sofitel Montevideo Casino Carrasco & Spa', venueDetail:'21:00 h · Carrasco · Montevideo', map:'Sofitel Montevideo Casino Carrasco & Spa, Montevideo, Uruguay',
      dress:'Elegante · tonos claros y neutros', instagram:'@sofia.xv', transport:'Traslado opcional al finalizar la fiesta',
      music:'assets/music/aurora-pop.mp3',
      hero:'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1900&q=88',
      eventPhoto:'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=86',
      gallery:[
        'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=86',
        'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=86',
        'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=86',
        'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=900&q=86',
        'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=86',
        'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=900&q=86'
      ]
    },
    {
      theme:'neon', model:'02 · Neon Bloom', name:'Emilia', date:'2027-04-10T22:00:00', dateLabel:'10 · 04 · 2027',
      heroKicker:'XV NIGHT', quote:'Luces, música y una pista que no piensa apagarse.',
      venue:'Hyatt Centric Montevideo', venueDetail:'22:00 h · Pocitos · Montevideo', map:'Hyatt Centric Montevideo, Montevideo, Uruguay',
      dress:'Party glam · negro, plata o violeta', instagram:'@emi.fifteen', transport:'Parking y punto de encuentro señalizado',
      music:'assets/music/neon-club.mp3',
      hero:'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1900&q=90',
      eventPhoto:'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=86',
      gallery:[
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=86',
        'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=86',
        'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=86',
        'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=900&q=86',
        'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=900&q=86',
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=82'
      ]
    },
    {
      theme:'midnight', model:'03 · Midnight Silver', name:'Renata', date:'2027-05-15T21:30:00', dateLabel:'15 · 05 · 2027',
      heroKicker:'RENATA · XV', quote:'Un cielo de luces para una noche que recién empieza.',
      venue:'Radisson Montevideo Victoria Plaza', venueDetail:'21:30 h · Centro · Montevideo', map:'Radisson Montevideo Victoria Plaza Hotel, Montevideo, Uruguay',
      dress:'Elegante · azul, gris, negro o metalizados', instagram:'@renata.15', transport:'Valet parking disponible',
      music:'assets/music/midnight-house.mp3',
      hero:'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=1900&q=88',
      eventPhoto:'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=88',
      gallery:[
        'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=86',
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=86',
        'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=86',
        'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=86',
        'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=900&q=86',
        'https://images.unsplash.com/photo-1519671282429-b44660ead0a7?auto=format&fit=crop&w=900&q=86'
      ]
    },
    {
      theme:'cherry', model:'04 · Cherry Disco', name:'Isabella', date:'2027-06-05T22:00:00', dateLabel:'05 · 06 · 2027',
      heroKicker:'ISABELLA · 15', quote:'Brillos, color y canciones para bailar hasta el final.',
      venue:'Club de Golf del Uruguay', venueDetail:'22:00 h · Punta Carretas · Montevideo', map:'Club de Golf del Uruguay, Montevideo, Uruguay',
      dress:'Cocktail · rojo, rosa, negro y metalizados', instagram:'@isa.xvparty', transport:'Remises coordinados desde la recepción',
      music:'assets/music/cherry-latin.mp3',
      hero:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1900&q=90',
      eventPhoto:'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=86',
      gallery:[
        'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=86',
        'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=86',
        'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=900&q=86',
        'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=900&q=86',
        'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=86',
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=86'
      ]
    },
    {
      theme:'pearl', model:'05 · Pearl Garden', name:'Martina', date:'2027-08-21T21:00:00', dateLabel:'21 · 08 · 2027',
      heroKicker:'MARTINA · MIS XV', quote:'Flores, luz y un montón de momentos para compartir.',
      venue:'Hotel Cottage', venueDetail:'21:00 h · Carrasco · Montevideo', map:'Hotel Cottage, Montevideo, Uruguay',
      dress:'Elegante · pasteles, perla y lavanda', instagram:'@martu.xv', transport:'Traslado de regreso con reserva previa',
      music:'assets/music/pearl-dance.mp3',
      hero:'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1900&q=90',
      eventPhoto:'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=1200&q=86',
      gallery:[
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=86',
        'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=900&q=86',
        'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=86',
        'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=86',
        'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=900&q=86',
        'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=86'
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

  const icon = {
    pin:`<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M32 57S15 42 15 27a17 17 0 0 1 34 0c0 15-17 30-17 30Z"/><circle cx="32" cy="27" r="6"/></svg>`,
    calendar:`<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="12" y="15" width="40" height="36" rx="7"/><path d="M20 10v10M44 10v10M12 25h40"/><path d="M23 33h4m7 0h7M23 41h7m6 0h5"/></svg>`,
    dress:`<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M26 11c0 5 12 5 12 0l5 10-8 7 10 24H19l10-24-8-7 5-10Z"/><path d="M29 28h6"/></svg>`,
    instagram:`<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="13" y="13" width="38" height="38" rx="12"/><circle cx="32" cy="32" r="9"/><circle cx="44" cy="20" r="2"/></svg>`,
    car:`<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M14 38h36l-4-13H21l-7 13Z"/><path d="M12 38v10h6m28 0h6V38"/><circle cx="21" cy="47" r="4"/><circle cx="43" cy="47" r="4"/><path d="M23 25l4-7h12l5 7"/></svg>`,
    clock:`<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="21"/><path d="M32 18v14" class="clock-hand"/><path d="M32 32l11 5"/><circle cx="32" cy="32" r="2"/></svg>`,
    party:`<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M19 52 31 21l12 31H19Z"/><path d="M28 29l8 4m-11 6 14 6"/><path d="M42 18c6-2 8-8 5-12M48 26c5 0 9-4 9-9M37 13c0-5-4-8-8-9"/></svg>`
  };

  function escapeHtml(value=''){
    return String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  }

  function template(m, i){
    const figs = m.gallery.map((src,j)=>`<figure class="reveal" style="--delay:${(j%3)*85}ms"><img src="${src}" alt="Galería de ${escapeHtml(m.name)} · foto ${j+1}" loading="lazy" decoding="async" referrerpolicy="no-referrer"></figure>`).join('');
    return `<article class="invite theme-${m.theme}" data-index="${i}" data-name="${escapeHtml(m.name)}" data-date="${m.date}" data-location="${escapeHtml(m.map)}">
      <section class="section hero">
        <div class="hero-media" style="background-image:url('${m.hero}')"></div><div class="hero-orbit"></div>
        <div class="hero-inner">
          <p class="hero-kicker reveal">${escapeHtml(m.heroKicker)}</p>
          <p class="hero-xv reveal" style="--delay:80ms">XV</p>
          <h1 class="hero-name reveal" style="--delay:160ms">${escapeHtml(m.name)}</h1>
          <p class="hero-date reveal" style="--delay:240ms">${escapeHtml(m.dateLabel)}</p>
          <p class="hero-quote reveal" style="--delay:320ms">${escapeHtml(m.quote)}</p>
          <button class="scroll-cue reveal" style="--delay:390ms" data-next-section aria-label="Ver invitación">⌄</button>
        </div>
      </section>

      <section class="band count-band">
        <p class="reveal">Falta cada vez menos</p><div class="countdown reveal" style="--delay:100ms" data-countdown></div>
      </section>

      <section class="section event-section">
        <div class="event-card reveal">
          <div class="event-photo" style="background-image:url('${m.eventPhoto}')"></div>
          <div class="event-copy">
            <div class="event-icon">${icon.party}</div>
            <p class="eyebrow">La fiesta</p><h2>${escapeHtml(m.venue)}</h2>
            <p>${escapeHtml(m.venueDetail)}<br>Una noche de música, fotos, sorpresas y mucha pista.</p>
            <div class="event-actions"><button class="pill filled" data-map="${escapeHtml(m.map)}">Cómo llegar</button><button class="pill" data-calendar>Agendar</button></div>
          </div>
        </div>
      </section>

      <section class="section gallery">
        <div class="wrap"><p class="eyebrow reveal">Un poquito de mí</p><h2 class="section-title reveal" style="--delay:70ms">Fotos que también cuentan la historia</h2><p class="section-copy reveal" style="--delay:130ms">La galería se puede personalizar con sesión de fotos, recuerdos, backstage o imágenes de la familia.</p><div class="gallery-grid">${figs}</div></div>
      </section>

      <section class="section extras">
        <div class="wrap"><p class="eyebrow reveal">Detalles de la noche</p><h2 class="section-title reveal" style="--delay:70ms">Todo lo que tus invitados necesitan saber</h2>
          <div class="extra-grid">
            <article class="extra-card dress reveal" style="--delay:100ms"><div class="extra-icon">${icon.dress}</div><h3>Dress code</h3><p>${escapeHtml(m.dress)}</p></article>
            <article class="extra-card instagram reveal" style="--delay:160ms"><div class="extra-icon">${icon.instagram}</div><h3>Instagram</h3><p>${escapeHtml(m.instagram)}<br>#${escapeHtml(m.name)}XV</p></article>
            <article class="extra-card transport reveal" style="--delay:220ms"><div class="extra-icon">${icon.car}</div><h3>Traslados</h3><p>${escapeHtml(m.transport)}</p></article>
            <article class="extra-card schedule reveal" style="--delay:280ms"><div class="extra-icon">${icon.clock}</div><h3>Horario</h3><p>Recepción puntual y pista hasta el cierre.</p></article>
          </div>
        </div>
      </section>

      <section class="band gift-section">
        <div class="wrap gift-wrap"><div class="gift-anim reveal" aria-hidden="true"><svg viewBox="0 0 140 120"><g><rect x="34" y="61" width="72" height="42" rx="3"/><path d="M70 61v42"/></g><g class="gift-spark"><path d="M68 53V38M60 46h16"/><circle cx="88" cy="42" r="2.2"/></g><g class="gift-lid"><rect x="28" y="43" width="84" height="14" rx="3"/><path d="M70 43v14"/><path d="M69 43C58 39 50 34 52 27c2-6 9-4 14 1 3 4 3 9 3 15Z"/><path d="M71 43c11-4 19-9 17-16-2-6-9-4-14 1-3 4-3 9-3 15Z"/></g></svg></div><p class="eyebrow reveal" style="color:inherit">Regalos</p><h2 class="section-title reveal" style="--delay:80ms">Tu presencia es lo más importante</h2><p class="section-copy reveal" style="--delay:150ms">Si querés hacerme un regalo, podés ver acá los datos elegidos para esta invitación.</p><button class="pill light reveal" style="--delay:230ms" data-gift>Ver datos de regalo</button></div>
      </section>

      <section class="section playlist">
        <div class="wrap"><div class="vinyl reveal" aria-hidden="true"></div><p class="eyebrow reveal" style="--delay:70ms">La playlist también la armamos juntos</p><h2 class="section-title reveal" style="--delay:130ms">¿Qué canción no puede faltar?</h2><p class="section-copy reveal" style="--delay:190ms">Mandame ese tema que te hace salir a bailar sí o sí.</p><button class="pill filled reveal" style="--delay:260ms" data-song>Proponer canción</button></div>
      </section>

      <section class="section useful">
        <div class="wrap"><p class="eyebrow reveal">Info útil</p><h2 class="section-title reveal" style="--delay:70ms">Para tener todo a mano</h2><div class="useful-grid">
          <article class="useful-card reveal" style="--delay:100ms">${icon.calendar}<h3>Fecha</h3><p>${escapeHtml(m.dateLabel)}<br>${escapeHtml(m.venueDetail.split('·')[0].trim())}</p></article>
          <article class="useful-card reveal" style="--delay:170ms">${icon.pin}<h3>Ubicación</h3><p>${escapeHtml(m.venue)}<br>Montevideo</p></article>
          <article class="useful-card reveal" style="--delay:240ms">${icon.instagram}<h3>Compartí</h3><p>Etiquetá ${escapeHtml(m.instagram)}<br>y usá #${escapeHtml(m.name)}XV</p></article>
        </div></div>
      </section>

      <section class="section rsvp">
        <div class="rsvp-card reveal"><p class="eyebrow">Confirmación</p><h2 class="section-title">¿Venís a celebrar conmigo?</h2><p class="section-copy">Confirmá asistencia y contame si tenés alguna necesidad alimentaria o dato que debamos tener en cuenta.</p><button class="pill filled" data-rsvp="${escapeHtml(m.name)}">Confirmar asistencia</button></div>
      </section>

      <section class="band closing"><div class="wrap"><p class="eyebrow reveal">Nos vemos en la pista</p><h2 class="reveal" style="--delay:80ms">${escapeHtml(m.name)}</h2><p class="reveal" style="--delay:140ms">MIS XV · ${escapeHtml(m.dateLabel)}</p></div></section>

      <footer class="studio-footer"><div><b class="studio-brand">ARTEDECO.STUDIO</b><span>Invitaciones digitales personalizadas · Bodas · XV · Eventos</span></div><div><b>¿TE GUSTÓ ESTE DEMO?</b><span>Fotos, música, colores, textos y secciones se adaptan a cada fiesta.</span><a class="studio-social" href="https://www.instagram.com/artedecostudio/" target="_blank" rel="noopener">${icon.instagram}<span>@artedecostudio</span></a></div></footer>
      <audio class="invite-audio" src="${m.music}" preload="metadata" loop></audio>
    </article>`;
  }

  catalog.innerHTML = MODELS.map(template).join('');
  dotsWrap.innerHTML = MODELS.map((_,i)=>`<button type="button" aria-label="Ver modelo ${i+1}" data-dot="${i}"></button>`).join('');

  const invites = [...document.querySelectorAll('.invite')];
  const audios = [...document.querySelectorAll('.invite-audio')];

  function updateCountdowns(){
    invites.forEach(invite => {
      const target = new Date(invite.dataset.date).getTime();
      const diff = Math.max(0,target-Date.now());
      const vals = [
        ['días',Math.floor(diff/86400000)],['hrs',Math.floor(diff%86400000/3600000)],['min',Math.floor(diff%3600000/60000)],['seg',Math.floor(diff%60000/1000)]
      ];
      invite.querySelectorAll('[data-countdown]').forEach(el => el.innerHTML = vals.map(([l,v])=>`<div class="unit"><b>${String(v).padStart(2,'0')}</b><span>${l}</span></div>`).join(''));
    });
  }
  updateCountdowns(); setInterval(updateCountdowns,1000);

  function openModal(markup){modalBody.innerHTML=markup;modal.classList.add('open');modal.setAttribute('aria-hidden','false')}
  function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true')}
  document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',closeModal));

  document.addEventListener('click', e => {
    const mapBtn=e.target.closest('[data-map]'); if(mapBtn){window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapBtn.dataset.map||'')}`,'_blank','noopener');return}
    const gift=e.target.closest('[data-gift]'); if(gift){openModal('<h2 id="modalTitle">Datos para regalo</h2><p>En la versión final se cargan aquí los datos bancarios, alias, link de regalo o la opción que elija la familia.</p><button class="pill filled" data-close-inner>CERRAR</button>'); bindInnerClose(); return}
    const song=e.target.closest('[data-song]'); if(song){openModal('<h2 id="modalTitle">¿Qué canción no puede faltar?</h2><p>Sumá tu canción a la playlist de la fiesta.</p><form id="songForm"><input required placeholder="Canción"><input placeholder="Artista"><input placeholder="Tu nombre (opcional)"><button class="pill filled" type="submit">ENVIAR</button></form>'); document.getElementById('songForm')?.addEventListener('submit',ev=>{ev.preventDefault();openModal('<h2 id="modalTitle">¡Anotada! ♪</h2><p>Gracias por sumar música a la fiesta.</p>')});return}
    const rsvp=e.target.closest('[data-rsvp]'); if(rsvp){openModal(`<h2 id="modalTitle">Confirmación de asistencia</h2><p>XV de ${escapeHtml(rsvp.dataset.rsvp||'')}</p><form id="rsvpForm"><input required placeholder="Nombre y apellido" autocomplete="name"><select><option>Confirmo asistencia</option><option>No podré asistir</option></select><textarea placeholder="Alergias, alimentación o mensaje"></textarea><button class="pill filled" type="submit">ENVIAR</button></form>`); document.getElementById('rsvpForm')?.addEventListener('submit',ev=>{ev.preventDefault();openModal('<h2 id="modalTitle">¡Gracias!</h2><p>La respuesta quedó registrada en esta demostración. En producción se conecta al formulario o backend elegido.</p>')});return}
    const cal=e.target.closest('[data-calendar]'); if(cal){const inv=cal.closest('.invite');const idx=Number(inv.dataset.index);const m=MODELS[idx];const start=new Date(m.date);const end=new Date(start.getTime()+7*3600000);const compact=d=>d.toISOString().replace(/[-:]/g,'').replace(/\.\d{3}Z$/,'Z');const params=new URLSearchParams({action:'TEMPLATE',text:`XV de ${m.name}`,dates:`${compact(start)}/${compact(end)}`,details:`Fiesta de XV de ${m.name}`,location:m.map});openModal(`<h2 id="modalTitle">Agendar evento</h2><p>Guardá la fecha en tu calendario.</p><a class="pill filled" target="_blank" rel="noopener" href="https://calendar.google.com/calendar/render?${params.toString()}">GOOGLE CALENDAR</a>`);return}
    const next=e.target.closest('[data-next-section]'); if(next){const section=next.closest('.section');const invite=next.closest('.invite');const target=section?.nextElementSibling;if(target)invite.scrollTo({top:target.offsetTop,behavior:'smooth'});return}
  });
  function bindInnerClose(){document.querySelector('[data-close-inner]')?.addEventListener('click',closeModal)}

  // Galería / lightbox
  lightboxItems=[...document.querySelectorAll('.gallery-grid img')];
  lightboxItems.forEach((img,i)=>{img.tabIndex=0;img.setAttribute('role','button');img.addEventListener('click',()=>openLightbox(i));img.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openLightbox(i)}})});
  function openLightbox(i){lightboxIndex=i;renderLightbox();lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false')}
  function renderLightbox(){const img=lightboxItems[lightboxIndex];if(!img)return;lightboxImg.src=img.currentSrc||img.src;lightboxImg.alt=img.alt;lightboxCaption.textContent=img.alt}
  function stepLightbox(d){lightboxIndex=(lightboxIndex+d+lightboxItems.length)%lightboxItems.length;renderLightbox()}
  function closeLightbox(){lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');lightboxImg.removeAttribute('src')}
  document.querySelectorAll('[data-lightbox-close]').forEach(b=>b.addEventListener('click',closeLightbox));
  document.getElementById('lightboxPrev').addEventListener('click',()=>stepLightbox(-1));
  document.getElementById('lightboxNext').addEventListener('click',()=>stepLightbox(1));

  // Reveal
  const revealEls=[...document.querySelectorAll('.reveal')];
  if(reduceMotion||!('IntersectionObserver'in window)){revealEls.forEach(el=>el.classList.add('visible'))}
  else{
    const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');io.unobserve(entry.target)}}),{threshold:.13,rootMargin:'0px 0px -5% 0px'});
    revealEls.forEach(el=>io.observe(el));
  }

  // Catálogo horizontal
  function setActive(index,{scroll=false}={}){
    activeIndex=(index+MODELS.length)%MODELS.length;
    modelLabel.textContent=MODELS[activeIndex].model;
    dotsWrap.querySelectorAll('button').forEach((d,i)=>d.classList.toggle('active',i===activeIndex));
    if(scroll)catalog.scrollTo({left:activeIndex*innerWidth,behavior:'smooth'});
    switchTrack();
  }
  prevBtn.addEventListener('click',()=>setActive(activeIndex-1,{scroll:true}));
  nextBtn.addEventListener('click',()=>setActive(activeIndex+1,{scroll:true}));
  dotsWrap.addEventListener('click',e=>{const b=e.target.closest('[data-dot]');if(b)setActive(Number(b.dataset.dot),{scroll:true})});
  let scrollTimer;
  catalog.addEventListener('scroll',()=>{clearTimeout(scrollTimer);scrollTimer=setTimeout(()=>setActive(Math.round(catalog.scrollLeft/Math.max(1,innerWidth))),90)},{passive:true});

  // Música: cada modelo tiene su pista original. Intento de autoplay + desbloqueo en primera interacción.
  async function playActive(){
    const audio=audios[activeIndex]; if(!audio||!musicWanted)return false;
    audios.forEach((a,i)=>{if(i!==activeIndex)a.pause()});
    audio.volume=.38; audio.muted=false;
    try{await audio.play();audioUnlocked=true;updateMusic();return true}catch{updateMusic();return false}
  }
  function switchTrack(){audios.forEach((a,i)=>{if(i!==activeIndex)a.pause()});if(audioUnlocked&&musicWanted)playActive();updateMusic()}
  function updateMusic(){const a=audios[activeIndex];const playing=!!a&&!a.paused&&!a.muted;musicControl.classList.toggle('playing',playing);musicControl.setAttribute('aria-pressed',String(playing));musicControl.setAttribute('aria-label',playing?'Silenciar música':'Activar música')}
  musicControl.addEventListener('click',async e=>{e.stopPropagation();const a=audios[activeIndex];if(!a)return;if(!a.paused&&!a.muted){musicWanted=false;a.pause();updateMusic()}else{musicWanted=true;await playActive()}});
  const unlock=async()=>{if(await playActive()){document.removeEventListener('pointerdown',unlock,true);document.removeEventListener('keydown',unlock,true)}};
  document.addEventListener('pointerdown',unlock,true);document.addEventListener('keydown',unlock,true);
  playActive();
  audios.forEach(a=>['play','pause','volumechange'].forEach(ev=>a.addEventListener(ev,updateMusic)));

  document.addEventListener('keydown',e=>{if(lightbox.classList.contains('open')){if(e.key==='Escape')closeLightbox();if(e.key==='ArrowRight')stepLightbox(1);if(e.key==='ArrowLeft')stepLightbox(-1);return}if(modal.classList.contains('open')&&e.key==='Escape'){closeModal();return}if(e.altKey&&e.key==='ArrowRight')setActive(activeIndex+1,{scroll:true});if(e.altKey&&e.key==='ArrowLeft')setActive(activeIndex-1,{scroll:true})});
  addEventListener('resize',()=>catalog.scrollTo({left:activeIndex*innerWidth,behavior:'auto'}));

  setActive(0);
})();
