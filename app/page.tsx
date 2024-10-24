import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center h-screen space-y-8">
        <h1 className="text-5xl font-light text-center mb-6">Welcome to Mile3Pizza!</h1>
        <p className="text-lg text-center">Delicious pizzas made with love.</p>
      </main>
      <Footer />
    </div>
  );
}