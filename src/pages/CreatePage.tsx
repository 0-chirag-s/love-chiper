import Header from '../components/Header';
import Footer from '../components/Footer';

const CreatePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-primary-light">
      <Header isLoggedIn={true} />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-2xl pt-10 mt-20 mx-auto">
          <h1 className="font-playfair text-primary text-3xl mb-8 text-center">
            Start Your Love Message
          </h1>
          <textarea
            className="input-field min-h-[200px] mb-4 resize-y"
            placeholder="eg: I've got the secret to happiness—it's a long ride with you, ending in a kiss."
          />
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Enter the reward"
              className="input-field"
            />
            <button className="btn-primary whitespace-nowrap rounded-md px-6">
              Generate Poem
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CreatePage;
