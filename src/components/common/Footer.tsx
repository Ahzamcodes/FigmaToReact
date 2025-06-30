import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brand-background py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">Aura</h3>
            <p className="mt-4 text-sm text-brand-text-medium">
              Enhancing living spaces with innovative and stylish home solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Links</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-sm text-brand-text-medium hover:text-white">Home</a></li>
              <li><a href="#" className="text-sm text-brand-text-medium hover:text-white">Products</a></li>
              <li><a href="#" className="text-sm text-brand-text-medium hover:text-white">About Us</a></li>
              <li><a href="#" className="text-sm text-brand-text-medium hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-sm text-brand-text-medium hover:text-white">Facebook</a></li>
              <li><a href="#" className="text-sm text-brand-text-medium hover:text-white">Instagram</a></li>
              <li><a href="#" className="text-sm text-brand-text-medium hover:text-white">Twitter</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="mt-4 text-sm text-brand-text-medium">
              Subscribe to our newsletter for the latest updates.
            </p>
            {/* Newsletter form can go here */}
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-brand-text-medium">
          <p>&copy; {new Date().getFullYear()} Aura. All rights reserved. Designed by Ahzam Khan.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 