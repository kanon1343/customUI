/** @type {import('next').NextConfig} */
import { withKumaUI } from "@kuma-ui/next-plugin";

const nextConfig = {
    reactStrictMode: true,
};

export default withKumaUI(nextConfig, {
    // The destination to emit an actual CSS file. If not provided, the CSS will be injected via virtual modules.
    outputDir: "./.kuma",
    // Enable WebAssembly support for Kuma UI. Default is false and will use Babel to transpile the code.
    wasm: true // Optional
});
