window.addEventListener('load', function() {
  document.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      gtag('event', 'link_click', {
        event_category: 'outbound',
        event_label: this.href,
        link_text: this.textContent.trim()
      });
    });
  });
});
