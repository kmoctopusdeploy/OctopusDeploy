class ThemeModeSwitcher {
  constructor(el) {
    this.el = el;
    this.body = document.body;

    this.addListeners();
  }

  addListeners() {
    this.el.addEventListener("click", () => this.handleThemeSwitch());
  }

  handleThemeSwitch() {
    this.body.classList.toggle("theme--dark");
    this.body.classList.toggle("theme--light");
  }
}

document.querySelectorAll("[data-theme-button]").forEach((button) => {
  new ThemeModeSwitcher(button);
});
