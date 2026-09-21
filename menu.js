/* ==========================================================
   Menu hamburger (mobile) — à inclure sur toutes les pages
   ========================================================== */
(function () {
  'use strict';

  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.main-navigation');
  if (!toggle || !nav) { return; }

  function setOpen(open) {
    nav.classList.toggle('is-active', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  }

  // Ouvre / ferme au clic sur le bouton
  toggle.addEventListener('click', function () {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  // Ferme le menu après un clic sur un lien (utile pour les ancres #formations, #contact…)
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) { setOpen(false); }
  });

  // Ferme avec la touche Échap
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { setOpen(false); toggle.focus(); }
  });

  // Ferme en cliquant en dehors du menu
  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) { setOpen(false); }
  });

  // Ferme si on repasse en affichage ordinateur
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) { setOpen(false); }
  });
})();
