hexo.extend.tag.register('sketchfab', function (args) {
  const id = args[0];

  return `
<div style="width: 100%; max-width: 1200px; margin: 0 auto; position: relative; padding-bottom: 56.25%;">
  <iframe
    title="Sketchfab Model"
    frameborder="0"
    allowfullscreen
    mozallowfullscreen="true"
    webkitallowfullscreen="true"
    allow="autoplay; fullscreen; xr-spatial-tracking"
    src="https://sketchfab.com/models/${id}/embed"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;">
  </iframe>
</div>
`;
});