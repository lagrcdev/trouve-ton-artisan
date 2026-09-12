import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  agentRules: false,
  sassOptions: {
    includePaths: [path.join(process.cwd(), "node_modules")],
  },
  // En-tetes de securite envoyees sur toutes les pages
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
