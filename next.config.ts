import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL(
        "https://www.freepik.com/free-photo/beautiful-view-sunset-sea_3624503.htm#from_element=photos_discover&from_view=subhome"
      ),
    ],
  },
};

export default nextConfig;
