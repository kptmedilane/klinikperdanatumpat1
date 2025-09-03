import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="py-3 sm:py-4 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left md:text-left text-center">
          <ol className="inline-flex items-center space-x-1 text-sm font-medium">
            {items.map((item, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && (
                  <span className="mx-2 text-pink-500 font-bold" style={{ color: '#FF3399' }}>
                    »
                  </span>
                )}
                {item.current ? (
                  <span className="text-gray-900 font-bold" style={{ color: '#333' }}>
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.href || '/'}
                    className="text-gray-700 hover:text-pink-500 transition-colors"
                    style={{ color: '#333' }}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </nav>
  );
};

export default Breadcrumb;