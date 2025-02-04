export default function Footer() {
  return (
    <footer className="bg-primary text-secondary p-6 mt-8 text-center">
      <p className="text-lg">MileThreePizza &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}