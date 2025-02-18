import Header from '../components/Header';
import Footer from '../components/Footer';

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-primary-light">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto text-center">
          <h1 className="font-playfair text-primary text-3xl mb-2">
            Join Us - Love Cipher
          </h1>
          <p className="text-gray-600 mb-8">Where Feelings Turn into Poetry</p>
          
          <img
            src="/love-letter-icon.png"
            alt="Love letter icon"
            className="w-24 h-24 mx-auto mb-8"
          />
          
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="input-field"
            />
            <input
              type="email"
              placeholder="Email"
              className="input-field"
            />
            <input
              type="text"
              placeholder="Gender"
              className="input-field"
            />
            <input
              type="password"
              placeholder="Password"
              className="input-field"
            />
            <button className="btn-primary py-3">
              Sign Up
            </button>
          </form>
          
          <p className="mt-6 text-sm">
            Existing User? <a href="/login" className="text-primary hover:text-primary/80">Login</a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RegisterPage;
