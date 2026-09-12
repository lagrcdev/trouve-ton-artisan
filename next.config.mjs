import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  agentRules: false,
  sassOptions: {
    includePaths: [path.join(process.cwd(), "node_modules")],
  },
};

export default nextConfig;
