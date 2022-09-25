export default function Footer({ locations }) {
  return (
    <footer className="flex items-center h-8 bg-lab-green">
      <p1 className="ml-4 text-sm font-medium">{locations.length} Locations World Wide</p1>
    </footer>
  );
}