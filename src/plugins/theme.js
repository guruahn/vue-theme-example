
const Theme = () => {
  const searchQuery = (target) => {
    const params = window.location.search.slice(1)
      .split('&')
      .reduce(function _reduce(/*Object*/ a, /*String*/ b) {
        b = b.split('=');
        a[b[0]] = decodeURIComponent(b[1]);
        return a;
      }, {});
    return params[target];
  }

  const hasQuery = (route) => {
    return !!Object.keys(route.query).length
  }

  const loadTheme = () => {
    const theme = searchQuery('theme');
    import(`@/views/scss/theme--${theme}.scss`).then(() => {
      loadedTheme(theme);
    }).catch(() => {
      import(`@/views/scss/theme--default.scss`).then(() => {
        loadedTheme(theme);
      });
    });
  };

  const loadedTheme = () => {
    setTimeout(() => {
      const appLoader = document.getElementById('app-loader');
      appLoader.style.display = 'none';
    }, 1000);
  }

  return {
    loadTheme,
    hasQuery
  }
}

export default Theme();