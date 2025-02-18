import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-primary-light">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 text-center">
        <h1 className="font-playfair text-primary text-4xl mb-4">
          Welcome to Love Cipher
        </h1>
        <p className="text-gray-600 mb-8">
          Poetry made from your words — a personalized experience where your love story turns into art.
        </p>
        <a 
          href="/create" 
          className="inline-block btn-primary px-8 py-3 mb-12"
        >
          Start Your Love Poem
        </a>
        <div className="max-w-2xl mx-auto">
          <img
            src="/couple-illustration.png"
            alt="Illustration of a couple with a dog and street lamp"
            className="w-full"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
