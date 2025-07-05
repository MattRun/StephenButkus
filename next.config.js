
// module.exports = {
  
//     webpack(config) {
//       config.resolve.fallback = {
  
//         // if you miss it, all the other options in fallback, specified
//         // by next.js will be dropped.
//         ...config.resolve.fallback,  
    
//         fs: false, // the solution
//       };
      
//       return config;
//     },
//   };


// module.exports = {
//   // Add any experimental options if needed
//   experimental: {
//     appDir: true, // Ensure the app directory features are enabled
//   },

//   // Modify the Webpack configuration
//   webpack(config) {
//     config.resolve.fallback = {
//       ...config.resolve.fallback,
//       fs: false, // Keep existing configuration
//     };
//     return config;
//   },

//   // Rewrites for dynamic API routes
//   async rewrites() {
//     return [
//       {
//         source: '/dashboard/pages/api/notifications',
//         destination: '/api/notifications', // Dynamically handle API routes
//       },
//     ];
//   },

//   // Add environment variables explicitly
//   env: {
//     DATABASE_URL: process.env.DATABASE_URL,
//   },
// };











/** @type {import('next').NextConfig} */
const nextConfig = {
  // React strict mode
  reactStrictMode: true,

  // Webpack modifications
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false, // Ensures `fs` module issues are handled
    };
    return config;
  },

  // Rewrites for dynamic API routes
  async rewrites() {
    return [
      {
        source: '/dashboard/pages/api/notifications',
        destination: '/api/notifications',
      },
      {
        source: '/dashboard/pages/api/certificates/search',
        destination: '/api/certificates/search',
      },
    ];
  },

  // Environment variables
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
  },

  // Headers for API routes
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate, proxy-revalidate',
          },
        ],
      },
    ];
  },

  // Redirects for old URLs to new URLs
  async redirects() {
    return [
      // Existing redirect
      {
        source: '/',
        destination: '/dashboard',
        permanent: true,
      },
      {
        source: '/dashboard/pages/api/certificates',
        destination: '/api/certificates',
        permanent: true,
      },
      // About Us redirects
      {
        source: '/about',
        destination: '/dashboard/pages/about/meetourteam',
        permanent: true,
      },
      {
        source: '/meet-our-team',
        destination: '/dashboard/pages/about/meetourteam',
        permanent: true,
      },
      {
        source: '/accreditation',
        destination: '/dashboard/pages/about/accreditation',
        permanent: true,
      },
      {
        source: '/faq',
        destination: '/dashboard/pages/about/faq',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/dashboard/pages/about/blog',
        permanent: true,
      },
      // Services redirects
      {
        source: '/services/asbestos',
        destination: '/dashboard/pages/analyticalservices/asbestos',
        permanent: true,
      },
      {
        source: '/services/mold',
        destination: '/dashboard/pages/analyticalservices/mold',
        permanent: true,
      },
      {
        source: '/services/fiberglass',
        destination: '/dashboard/pages/analyticalservices/fiberglass',
        permanent: true,
      },
      {
        source: '/services/lead',
        destination: '/dashboard/pages/analyticalservices/lead',
        permanent: true,
      },
      {
        source: '/services/heavy-metals',
        destination: '/dashboard/pages/analyticalservices/heavy-metals',
        permanent: true,
      },
      {
        source: '/services/fire-and-smoke',
        destination: '/dashboard/pages/analyticalservices/fire-&-smoke',
        permanent: true,
      },
      // Chain of Custody redirect
      {
        source: '/chain-of-custody',
        destination: '/dashboard/pages/chainofcustody',
        permanent: true,
      },
      // Careers redirects
      {
        source: '/careers',
        destination: '/dashboard/pages/careers',
        permanent: true,
      },
      {
        source: '/training',
        destination: '/dashboard/pages/training',
        permanent: true,
      },
      // Shop redirects
      {
        source: '/shop',
        destination: '/dashboard/pages/products/allproducts',
        permanent: true,
      },
      {
        source: '/products/allproducts',
        destination: '/dashboard/pages/products/allproducts',
        permanent: true,
      },
      {
        source: '/products/asbestos',
        destination: '/dashboard/pages/products/asbestos',
        permanent: true,
      },
      {
        source: '/products/mold',
        destination: '/dashboard/pages/products/mold',
        permanent: true,
      },
      {
        source: '/products/lead',
        destination: '/dashboard/pages/products/lead',
        permanent: true,
      },
      {
        source: '/products/equipment-rentals',
        destination: '/dashboard/pages/products/equipmentrental',
        permanent: true,
      },
      {
        source: '/products/sample-bags',
        destination: '/dashboard/pages/products/samplebags',
        permanent: true,
      },
      // Contact Us redirect
      {
        source: '/contact-us',
        destination: '/dashboard/pages/contactus/generalinquiry',
        permanent: true,
      },
      // Shipping redirect
      {
        source: '/shipping',
        destination: '/dashboard/pages/shippinglabelform',
        permanent: true,
      },
      // Privacy Policy (no redirect needed since the path hasn't changed)
    ];
  },
};

module.exports = nextConfig;