import useResource from '../hooks/useResource';

export default function Footer() {
  const { resources } = useResource()
  return (
    <footer className="flex items-center justify-center h-8 bg-lab-green">
      {resources
        ? <p1 className="ml-4 text-sm font-medium">{resources.length} Locations World Wide</p1>
        : <p1 className="ml-4 text-sm font-medium">0 Locations World Wide</p1>
      }

    </footer>
  );
}