document.addEventListener('DOMContentLoaded', () => {
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  const applyTheme = (isDarkMode) => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  applyTheme(darkModeMediaQuery.matches);

  darkModeMediaQuery.addEventListener('change', (event) => {
    applyTheme(event.matches);
  });
});
