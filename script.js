'use strict';
// Text is drawn from the supplied EPK and album packaging; English texts are editorial translations.
const translations = {
  it: {
    skip:'Vai al contenuto', navHome:'Home', navAlbum:'Il disco', navVideos:'Video', navBio:'Bio', navContact:'Contatti',
     heroInsetAlt:'Il trio e le tastiere degli strumenti a percussione',interludePhotoAlt:'Il trio fotografato su una scalinata', heroLine:'Tre strumenti. Un dialogo.',heroInstruments:'Sax alto · Vibrafono · Marimba',discoverAlbum:'Scopri il nuovo album Prospettive',explore:'ESPLORA ↓',
    threeVoices:'TRE VOCI',oneSound:'UN SUONO',heroPhotoAlt:'I tre musicisti di The Blue Prospective in posa insieme',coverAlt:'Copertina originale di Prospettive, blu con linee prospettiche bianche',bioPhotoAlt:'Ritratto di gruppo dei tre musicisti',instrumentsPhotoAlt:'Il trio fotografato dall’alto davanti agli strumenti a percussione',introduction:'INTRODUZIONE',statement:'Un incontro tra melodie, risonanze e nuove possibilità sonore.',statementCopy:"Un sax alto incontra marimba e vibrafono. Tre identità musicali costruiscono un linguaggio comune attraverso il dialogo, l'arrangiamento e l'improvvisazione.",
    debutAlbum:"ALBUM D'ESORDIO / 2026",albumDescription:'Undici tracce tra composizioni originali e riletture della tradizione jazz. Un percorso in cui il suono del sax alto dialoga con le trame armoniche e ritmiche di vibrafono e marimba.',coverCaption:'Artwork & design: Jonathan Corda',roleSax:'Sax alto',roleVibe:'Vibrafono',roleMarimba:'Marimba',openYouTube:'Apri su YouTube',listenSpotify:'Ascolta su Spotify',fresuQuote:'Coraggio è affrontare il presente e fare sempre un passo in avanti verso il futuro.',linerNotes:'/ NOTE DI COPERTINA',tracklist:'TRACKLIST',creditsRecorded:'Registrato il 31 gennaio e 1 febbraio 2026 presso A-SeePRecord Studio, Roccascalegna (CH), Italia.',creditsPhotos:'Fotografie',creditsArtwork:'Artwork e design',creditsRecording:'Registrazione, mix e mastering',creditsHeading:'Credits',openAlbumSpotify:'Apri l’album su Spotify',listenAlbumIntro:'Seleziona un brano nel lettore Spotify.',listenAlbumHeading:'Ascolta Prospettive',albumCredits:'Registrato il 31 gennaio e 1 febbraio 2026 ad A-SeePRecord Studio, Roccascalegna · Registrazione, mix e mastering: Antonio Di Donato · Artwork: Jonathan Corda · Foto del disco: Sasha Mashin.',
    youtubeChannel:'Canale YouTube',
    aboutOverline:'IL TRIO',aboutTitle:"Tre percorsi.<br>Un'identità.",aboutText:"The Blue Prospective nasce dalla collaborazione tra Paolo Recchia al sax alto, Jordan Corda al vibrafono e Andrea Mellace alla marimba. La particolarità dell'organico dà vita a sonorità ricche e avvolgenti: arrangiamenti originali, composizioni dei musicisti e riletture del repertorio jazz si intrecciano a una forte componente improvvisativa.",membersTitle:'I MUSICISTI',
    bioPaolo:'Sassofonista dalla forte identità melodica e dal suono personale, si è esibito in Europa, Asia e Stati Uniti. Ha collaborato con artisti come Roy Hargrove, Jeremy Pelt, Fabrizio Bosso, George Garzone e Dado Moroni. Nel 2015 ha ricevuto un riconoscimento al Johnny Raducanu International Jazz Festival in Romania.',
    bioJordan:'Vibrafonista e compositore, si è formato ai conservatori di Cagliari, Milano e Pescara. Ha collaborato con musicisti tra cui Luca Mannutza, Sasha Mashin e Max Ionata e si è esibito in festival italiani e internazionali, tra cui JazzMi, Time in Jazz e l’European Jazz Expo.',
    bioAndrea:'Percussionista specializzato in marimba e vibrafono, diplomato al Conservatorio di Milano. Membro di Federico Calcagno & The Dolphians, ha suonato in festival quali Bergamo Jazz, Edinburgh Jazz & Blues Festival e JazzMi. È anche leader del proprio quartetto, con cui ha pubblicato Scirocco.',
    contactTop:'CONCERTI · COLLABORAZIONI · STAMPA',contactCopy:'Per concerti, booking, collaborazioni e richieste stampa, scrivici direttamente.',footerNote:'Prospettive · Da Vinci Jazz · 2026',backTop:'TORNA SU',metaDescription:"The Blue Prospective: Paolo Recchia, Jordan Corda e Andrea Mellace. Scopri Prospettive, il disco d'esordio per Da Vinci Jazz, ascolta la musica e guarda i video."
  },
  en: {
    skip:'Skip to content',navHome:'Home',navAlbum:'The album',navVideos:'Videos',navBio:'About',navContact:'Contact',
    heroInsetAlt:'The trio with their keyboard percussion instruments',interludePhotoAlt:'The trio photographed on a staircase',heroLine:'Three instruments. One conversation.',heroInstruments:'Alto saxophone · Vibraphone · Marimba',discoverAlbum:'Discover the new album Prospettive',explore:'EXPLORE ↓',
    threeVoices:'THREE VOICES',oneSound:'ONE SOUND',heroPhotoAlt:'The three musicians of The Blue Prospective posing together',coverAlt:'Original cover of Prospettive, blue with white perspective lines',bioPhotoAlt:'Group portrait of the three musicians',instrumentsPhotoAlt:'The trio photographed from above with keyboard percussion instruments',introduction:'INTRODUCTION',statement:'Where melody, resonance and new sonic possibilities meet.',statementCopy:'An alto saxophone meets marimba and vibraphone. Three musical identities find a common language through dialogue, arrangement and improvisation.',
    debutAlbum:'DEBUT ALBUM / 2026',albumDescription:'Eleven tracks combining original compositions with fresh interpretations of the jazz tradition. A musical journey in which the alto saxophone engages with the harmonic and rhythmic textures of vibraphone and marimba.',coverCaption:'Artwork & design: Jonathan Corda',roleSax:'Alto saxophone',roleVibe:'Vibraphone',roleMarimba:'Marimba',openYouTube:'Open on YouTube',listenSpotify:'Listen on Spotify',fresuQuote:'Courage means facing the present and always taking a step forward towards the future.',linerNotes:'/ LINER NOTES',tracklist:'TRACKLIST',creditsRecorded:'Recorded January 31 – February 1, 2026 at A-SeePRecord Studio, Roccascalegna (CH), Italy.',creditsPhotos:'Photographs',creditsArtwork:'Artwork and design',creditsRecording:'Recording, mixing and mastering',creditsHeading:'Credits',openAlbumSpotify:'Open the album on Spotify',listenAlbumIntro:'Select a track in the Spotify player.',listenAlbumHeading:'Listen to Prospettive',albumCredits:'Recorded January 31 – February 1, 2026 at A-SeePRecord Studio, Roccascalegna, Italy · Recording, mixing and mastering: Antonio Di Donato · Artwork: Jonathan Corda · Album photographs: Sasha Mashin.',
    youtubeChannel:'YouTube channel',
    aboutOverline:'THE TRIO',aboutTitle:'Three paths.<br>One identity.',aboutText:'The Blue Prospective brings together Paolo Recchia on alto saxophone, Jordan Corda on vibraphone and Andrea Mellace on marimba. This unusual instrumentation creates rich, immersive soundscapes, blending original arrangements, the musicians’ own compositions and reimagined jazz repertoire with a strong improvisational spirit.',membersTitle:'THE MUSICIANS',
    bioPaolo:'An alto saxophonist with a distinctive melodic voice and deeply personal sound, Paolo has performed across Europe, Asia and the United States. His collaborators include Roy Hargrove, Jeremy Pelt, Fabrizio Bosso, George Garzone and Dado Moroni. In 2015, he received an award at the Johnny Raducanu International Jazz Festival in Romania.',
    bioJordan:'A vibraphonist and composer, Jordan studied at the conservatories of Cagliari, Milan and Pescara. He has collaborated with musicians including Luca Mannutza, Sasha Mashin and Max Ionata, and performed at Italian and international events such as JazzMi, Time in Jazz and the European Jazz Expo.',
    bioAndrea:'A percussionist specialising in marimba and vibraphone, Andrea graduated from the Milan Conservatory. As a member of Federico Calcagno & The Dolphians, he has appeared at festivals including Bergamo Jazz, Edinburgh Jazz & Blues Festival and JazzMi. He also leads his own quartet, with which he released Scirocco.',
    contactTop:'LIVE SHOWS · COLLABORATIONS · PRESS',contactCopy:'For concerts, booking, collaborations or press enquiries, write to us directly.',footerNote:'Prospettive · Da Vinci Jazz · 2026',backTop:'BACK TO TOP',metaDescription:'The Blue Prospective: Paolo Recchia, Jordan Corda and Andrea Mellace. Explore Prospettive, the debut album on Da Vinci Jazz, listen and watch the videos.'
  }
};
const safeHTMLKeys = new Set(['aboutTitle']);
function applyLanguage(lang){
  const selected = (lang === 'en') ? 'en' : 'it';
  const text=translations[selected];
  document.documentElement.lang=selected;
  document.querySelectorAll('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;if(text[key]!==undefined){if(safeHTMLKeys.has(key))el.innerHTML=text[key];else el.textContent=text[key];}});
  document.querySelectorAll('[data-i18n-alt]').forEach(el=>{const key=el.dataset.i18nAlt;if(text[key])el.setAttribute('alt',text[key]);});
  document.querySelectorAll('.lang-btn').forEach(el=>{const active=el.dataset.lang===selected;el.classList.toggle('is-active',active);el.setAttribute('aria-pressed',String(active));});
  document.querySelector('meta[name="description"]').setAttribute('content',text.metaDescription);
  document.querySelector('.mobile-menu-button').setAttribute('aria-label',selected==='it'?'Apri menu':'Open menu');
  try{localStorage.setItem('tbp-language',selected);}catch(e){}
}
let initial='it';try{const stored=localStorage.getItem('tbp-language');if(stored==='en'||stored==='it')initial=stored;else if(navigator.language.toLowerCase().startsWith('en'))initial='en';}catch(e){}
applyLanguage(initial);
document.querySelectorAll('.lang-btn').forEach(el=>el.addEventListener('click',()=>applyLanguage(el.dataset.lang)));
const toggle=document.querySelector('.mobile-menu-button'), mobile=document.querySelector('#mobile-nav');
if(toggle&&mobile){const close=()=>{toggle.setAttribute('aria-expanded','false');mobile.hidden=true;};toggle.addEventListener('click',()=>{const opened=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!opened));mobile.hidden=opened;});mobile.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});window.addEventListener('resize',()=>{if(innerWidth>760)close();});}
document.getElementById('year').textContent=String(new Date().getFullYear());

// Keep navigation visible: transparent over the opening photograph, navy on scroll.
const siteHeader = document.querySelector('.site-header');
if (siteHeader) {
  const syncHeader = () => {
    siteHeader.classList.toggle('is-scrolled', window.scrollY > 28);
    const hero = document.querySelector('#home');
    const boundary = hero ? hero.getBoundingClientRect().bottom : 0;
    const pastHome = boundary <= siteHeader.offsetHeight;
    const wasPastHome = siteHeader.classList.contains('is-past-home');
    if (pastHome !== wasPastHome) {
      const nav = siteHeader.querySelector('.desktop-nav');
      const lang = siteHeader.querySelector('.header-actions');
      const shouldAnimate = window.matchMedia('(min-width:761px) and (prefers-reduced-motion: no-preference)').matches;
      const elements = shouldAnimate ? [nav,lang].filter(Boolean) : [];
      const positions = elements.map(el => el.getBoundingClientRect().left);
      siteHeader.classList.toggle('is-past-home', pastHome);
      elements.forEach((el,i) => {
        const dx=positions[i]-el.getBoundingClientRect().left;
        if(Math.abs(dx)<1)return;
        el.getAnimations().forEach(animation => { if(animation.id==='nav-motion') animation.cancel(); });
        const anim=el.animate([{transform:`translateX(${dx}px)`},{transform:'translateX(0)'}],{
          duration:650,easing:'cubic-bezier(.22,.8,.2,1)'});
        anim.id='nav-motion';
      });
    }
  };
  syncHeader();
  window.addEventListener('scroll', syncHeader, { passive: true });
  window.addEventListener('pageshow', syncHeader);
}
