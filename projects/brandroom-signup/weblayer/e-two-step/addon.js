/* ---- E · Two-step add-on — paste at the very end of the weblayer JS, inside the function (after the last line).
   Step 2 (.step-two) opens on the brand picker; Save stores the picks and shows the thank-you; Skip goes straight to it.
   Saves to the customer profile (favourite_brands) and tracks a favourite_brands event. ---- */
(function () {
  if (window.__tbrBrandPicker) return; window.__tbrBrandPicker = true;
  document.addEventListener('click', function (e) {
    var box = e.target.closest && e.target.closest('.weblayer--box-subscription'); if (!box) return;
    var chip = e.target.closest('.brand-chip');
    if (chip) { chip.classList.toggle('on'); chip.setAttribute('aria-pressed', chip.classList.contains('on')); return; }
    var save = e.target.closest('.save-brands'), skip = e.target.closest('.skip-brands'); if (!save && !skip) return;
    var picks = [].slice.call(box.querySelectorAll('.brand-chip.on')).map(function (c) { return c.getAttribute('data-brand'); });
    if (save && picks.length) {
      try { self.sdk.update({ favourite_brands: picks }); } catch (err) { console.error(err); }
      try { self.sdk.track('favourite_brands', { brands: picks.join(', '), source: self.data && self.data.banner_name, location: window.location.href }); } catch (err) { console.error(err); }
    }
    box.querySelector('.brand-step').style.display = 'none';
    box.querySelector('.thanks').style.display = 'block';
  });
})();
