// craco.config.js
module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // Find the existing source-map-loader rule
      const sourceMapLoaderRule = webpackConfig.module.rules.find(
        rule => rule.use && rule.use.some(loader => loader && loader.loader && loader.loader.includes('source-map-loader'))
      );

      if (sourceMapLoaderRule) {
        // Add options to the existing source-map-loader
        const sourceMapLoader = sourceMapLoaderRule.use.find(
          loader => loader.loader && loader.loader.includes('source-map-loader')
        );

        if (sourceMapLoader) {
          // Set the filterSourceMappingUrl option to ignore @mediapipe files
          sourceMapLoader.options = {
            ...(sourceMapLoader.options || {}),
            filterSourceMappingUrl: (url, resourcePath) => {
              // If the resource path contains @mediapipe, return false to ignore the source map
              if (resourcePath.includes('@mediapipe')) {
                // Optional: Log which file is being ignored
                console.warn(`Suppressed source map warning for: ${resourcePath}`);
                return false;
              }
              // Return true or undefined to process normally for other files
              return true;
            }
          };
        }
      } else {
        // If no existing rule is found, add a new one specifically for @mediapipe
        // This is a fallback, but the above should usually find the rule added by react-scripts
        webpackConfig.module.rules.push({
          test: /\.mjs$/,
          include: /node_modules\/@mediapipe/,
          enforce: 'pre', // Ensure it runs before other loaders
          use: [
            {
              loader: require.resolve('source-map-loader'),
              options: {
                filterSourceMappingUrl: (url, resourcePath) => {
                  // Always return false for @mediapipe files to suppress warnings
                  if (resourcePath.includes('@mediapipe')) {
                    console.warn(`Suppressed source map warning for: ${resourcePath}`);
                    return false;
                  }
                  return true;
                }
              }
            }
          ]
        });
      }

      return webpackConfig;
    },
  },
};