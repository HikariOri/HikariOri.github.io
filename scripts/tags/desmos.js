hexo.extend.tag.register('desmos', function (args) {
  const src = args[0];
  if (!/^https?:\/\//.test(src)) return '';
  const uid = src.split('/').pop().split('?')[0];

  return `
<div style="width: 100%; position: relative; padding-bottom: 56.25%;">
  <iframe
    title="Desmos Calculator"
    frameborder="0"
    allowfullscreen
    src="${src}"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 1px solid #ccc;">
  </iframe>
  <button id="desmos-fs-btn-${uid}" title="Fullscreen"
     style="position: absolute; top: 8px; right: 8px; z-index: 10;
            background: rgba(0,0,0,0.65); color: #fff; padding: 8px;
            border: none; border-radius: 6px; cursor: pointer; line-height: 1;
            display: flex; align-items: center; justify-content: center;">
    <svg class="desmos-fs-icon-enter" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M2 6V2h4M10 2h4v4M14 10v4h-4M6 14H2v-4"/>
    </svg>
    <svg class="desmos-fs-icon-exit" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" style="display:none">
      <path d="M3 3v4h4M13 3v4h-4M3 13v-4h4M13 13v-4h-4"/>
    </svg>
  </button>
  <script>
  (function() {
    const btn = document.getElementById('desmos-fs-btn-${uid}');
    const enter = btn.querySelector('.desmos-fs-icon-enter');
    const exit = btn.querySelector('.desmos-fs-icon-exit');
    const wrap = btn.parentElement;
    function update() {
      const isFS = document.fullscreenElement === wrap;
      enter.style.display = isFS ? 'none' : '';
      exit.style.display = isFS ? '' : 'none';
      btn.title = isFS ? 'Exit fullscreen' : 'Fullscreen';
    }
    btn.onclick = function() {
      document.fullscreenElement ? document.exitFullscreen() : wrap.requestFullscreen();
    };
    document.addEventListener('fullscreenchange', update);
  })();
  </script>
</div>
  `;
});
