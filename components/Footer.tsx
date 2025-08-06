import React from 'react';
import { Instagram, Twitter, Mail, Phone, MapPin, ShieldCheck, CheckCircle, Heart } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const footerLinks = {
    Platform: [{ name: 'Tentang ReMoney', href: '#' }, { name: 'Cara Kerja', href: '#' }, { name: 'Testimoni', href: '#' }, { name: 'FAQ', href: '#' }],
    Fitur: [{ name: 'Simulasi Investasi', href: '#' }, { name: 'Challenge Harian', href: '#' }, { name: 'Forum Komunitas', href: '#' }, { name: 'Edukasi Finansial', href: '#' }],
    Dukungan: [{ name: 'Pusat Bantuan', href: '#' }, { name: 'Hubungi Kami', href: '#' }, { name: 'Konsultasi Gratis', href: '#' }, { name: 'Crisis Hotline', href: '#' }],
    Legal: [{ name: 'Kebijakan Privasi', href: '#' }, { name: 'Syarat & Ketentuan', href: '#' }, { name: 'Keamanan Data', href: '#' }, { name: 'Disclaimer', href: '#' }],
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-green-700">


      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">ReMoney</h3>
            <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm">Platform pertama di Indonesia yang membantu generasi muda berhenti dari kebiasaan judi online dan mengalihkannya ke investasi yang menguntungkan.</p>
            <div className="mt-4 space-y-2 text-gray-600 dark:text-gray-400 text-sm">
              <p className="flex items-center"><Mail className="h-5 w-5 mr-2" /> hello@remoney.id</p>
              <p className="flex items-center"><Phone className="h-5 w-5 mr-2" /> +62 21 1234 5678</p>
              <p className="flex items-center"><MapPin className="h-5 w-5 mr-2" /> Jakarta, Indonesia</p>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-gray-500"><Instagram /></a>
              <a href="#" className="text-gray-400 hover:text-gray-500"><Twitter /></a>
            </div>
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-semibold text-gray-900 dark:text-white">{title}</h4>
                <ul className="mt-4 space-y-3">
                  {links.map(link => (
                    <li key={link.name}>
                      <a href={link.href} className="text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
        
        <div className="mt-12 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-500/30 rounded-lg flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <div className="flex items-center">
            <ShieldCheck className="h-10 w-10 text-red-500 flex-shrink-0" />
            <div className="ml-4">
              <h4 className="font-bold text-red-800 dark:text-red-200">Butuh Bantuan Darurat?</h4>
              <p className="text-sm text-red-700 dark:text-red-300">Tim dukungan kami siap membantu 24/7 untuk krisis kecanduan judi.</p>
            </div>
          </div>
          <a href="tel:119" className="mt-4 sm:mt-0 px-5 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition-colors flex-shrink-0">
            Crisis Hotline: 119
          </a>
        </div>
      </div>
      
      <div className="bg-gray-100 dark:bg-black/20">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
            <p className="text-center md:text-left">&copy; {new Date().getFullYear()} ReMoney. Made with <Heart className="inline h-4 w-4 text-red-500" /> for a better generation.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
                <p className="flex items-center"><ShieldCheck className="h-4 w-4 mr-1 text-green-500" /> Data Aman</p>
                <p className="flex items-center"><CheckCircle className="h-4 w-4 mr-1 text-green-500" /> Terdaftar OJK</p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
