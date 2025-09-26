// ПЕРЕКЛЮЧАТЕЛЬ ТЕМЫ (РАБОТАЕТ НА ВСЕХ СТРАНИЦАХ)
function initTheme() {
    const KEY = 'theme';
    const btn = document.querySelector('.theme-toggle');

    if (!btn) return;

    // Функция применения темы
    function applyTheme(isDark) {
        if (isDark) {
            document.body.classList.add('theme-dark');
            btn.textContent = 'Светлая тема';
            btn.setAttribute('aria-pressed', 'true');
        } else {
            document.body.classList.remove('theme-dark');
            btn.textContent = 'Тёмная тема';
            btn.setAttribute('aria-pressed', 'false');
        }
    }

    // Проверка сохраненной темы или системных настроек
    const savedTheme = localStorage.getItem(KEY);
    const prefersDark = matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        applyTheme(true);
    } else {
        applyTheme(false);
    }

    // Переключение темы по клику
    btn.addEventListener('click', () => {
        const isDark = !document.body.classList.contains('theme-dark');
        applyTheme(isDark);
        localStorage.setItem(KEY, isDark ? 'dark' : 'light');
    });
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
});