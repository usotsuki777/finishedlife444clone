/** @type {import('next').NextConfig} */

// Replace `nextjs-github-pages` with your Github repo project name.


module.exports = {
  reactStrictMode: true,
  assetPrefix:
    process.env.NODE_ENV === 'production' ? '/finishedlife444clone' : '',
};
