const Footer = () => {
  return (
    <footer className="bg-primary px-6 py-4">
      <div className="flex justify-center gap-8">
        <a href="/about" className="text-white hover:opacity-80">About us</a>
        <a href="/terms" className="text-white hover:opacity-80">Terms & Conditions</a>
        <a href="/privacy" className="text-white hover:opacity-80">Privacy Policy</a>
        <a href="/contact" className="text-white hover:opacity-80">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
