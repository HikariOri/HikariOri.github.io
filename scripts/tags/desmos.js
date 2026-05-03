hexo.extend.tag.register('desmos', function (args) {
  const id = args[0];

  return `
<div style="width: 100%; max-width: 1200px; margin: 0 auto; position: relative; padding-bottom: 56.25%;">
  <iframe
    title="Desmos Calculator"
    frameborder="0"
    allowfullscreen
    src="https://www.desmos.com/calculator/${id}?embed"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 1px solid #ccc;">
  </iframe>
</div>
  `;
});
