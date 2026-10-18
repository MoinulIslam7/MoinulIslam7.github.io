// Page-wide animated mesh gradient: soft colour blobs that drift and morph
// behind every section. Purely decorative and CSS-driven (see "PAGE MESH" in globals.scss).
const blobs = ['latte', 'pink', 'violet', 'matcha', 'gold'];

export default function MeshBackground() {
  return (
    <div aria-hidden="true" className="page-mesh">
      {blobs.map(name => (
        <span key={name} className={`page-mesh__blob page-mesh__blob--${name}`} />
      ))}
    </div>
  );
}
