const Footer = () => {
  return (
    <footer className="w-full text-center py-6 bg-black border-t border-neutral-800 mt-auto">
      <p className="text-sm text-neutral-400">
        © {new Date().getFullYear()} Luxetidal. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
