module.exports = {
  hooks: {
    readPackage(pkg) {
      // Remove unused react-data-grid patch reference
      if (pkg.patchedDependencies?.['react-data-grid']) {
        delete pkg.patchedDependencies['react-data-grid']
      }
      return pkg
    },
  },
}
