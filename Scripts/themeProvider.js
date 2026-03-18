export function setupThemeToggle() {
    document.addEventListener("DOMContentLoaded", () => {
        const themeBtns = document.querySelectorAll(".themeProvider");
        if (!themeBtns.length) {
            console.error("No themeProvider buttons found!");
            return;
        }

        const root = document.documentElement;

        const savedTheme = localStorage.getItem("theme") || "light";
        root.setAttribute("data-theme", savedTheme);

        const getIconSrc = (icon) => {
            const path = window.location.pathname;
            const prefix = path.includes("/Pages/") ? "../" : "";
            return prefix + "Assets/" + icon + "?v=" + Date.now();
        };

        const updateIcons = (theme) => {
            const icon = theme === "dark" ? "light.png" : "dark.png";
            themeBtns.forEach(btn => btn.src = getIconSrc(icon));
        };

        updateIcons(savedTheme);

        themeBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                const currentTheme = root.getAttribute("data-theme");
                const newTheme = currentTheme === "dark" ? "light" : "dark";
                root.setAttribute("data-theme", newTheme);
                localStorage.setItem("theme", newTheme);
                updateIcons(newTheme);
            });
        });
    });
}

setupThemeToggle();