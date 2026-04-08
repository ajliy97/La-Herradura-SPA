import type { NextConfig } from "next";

 /* @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Esto habilita la exportación estática
  eslint: {
    // Deshabilita la ejecución de ESLint durante el build
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;

