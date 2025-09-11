const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Add support for workspace packages
const workspaceRoot = path.resolve(__dirname, '../..');
config.watchFolders = [workspaceRoot];
config.resolver.nodeModulesPaths = [
  path.resolve(__dirname, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
];

// Add workspace packages to Metro's resolver
config.resolver.disableHierarchicalLookup = false;

module.exports = config;