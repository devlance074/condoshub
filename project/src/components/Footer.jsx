import React from 'react';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-lg mt-8">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300">
            Powered By ❤️{' '}
            <a
              href="https://github.com/donvito"
              className="text-blue-600 dark:text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Devlance
            </a>
            {' • '}
            <a
              href="https://x.com/donvito"
              className="text-blue-600 dark:text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}