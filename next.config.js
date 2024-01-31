// const API_URL = "https://dev-developers.cegid.com/cegidmanagement"
const API_URL = "https://aps839600webd01-management.azurewebsites.net"
const proxyPath = "/proxy"

/** @type {import('next').NextConfig} */

const nextConfig = {
    // Change this mode when you are ready to deploy hybrid mode
    output: "standalone",
    // Change this mode when you are ready to deploy hybrid mode
    // output: "export",
    assetPrefix: process.env.NODE_ENV === "production" ? "/members/" : undefined,
    async rewrites() {
		return process.env.NODE_ENV === "development"? [
			{
				source: `${proxyPath}/:path*`,
				destination: `${API_URL}/:path*`,
			},
		]: []
	},
	// async headers() {
	// 	return [
	// 	  {
	// 		source: '/proxy/:path*',
	// 		headers: [
	// 		  {
	// 			key: 'x-forwarded-host',
	// 			value: 'https://localhost:3000/proxy',
	// 		  }
	// 		],
	// 	  },
	// 	]
	//   },
}

module.exports = nextConfig
