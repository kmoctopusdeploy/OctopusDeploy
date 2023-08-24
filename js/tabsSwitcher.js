class TabsSwitcher {
  constructor(el) {
    this.el = el;
    this.cards = this.el.querySelectorAll("[data-tabs-card]");
    this.tabButtons = this.el.querySelectorAll("[data-tabs-button]");
    this.activeTabIndex = 0;
    this.el.style.setProperty("--tabs-amount", this.cards.length);

    this.initFirstTab();
    this.addListeners();
  }

  initFirstTab() {
    this.activateTab(this.activeTabIndex);
  }

  addListeners() {
    this.tabButtons.forEach((btn, index) => {
      btn.addEventListener("click", () => this.handleTabClick(index));
    });
  }

  handleTabClick(newTabIndex) {
    if (newTabIndex === this.activeTabIndex) {
      return;
    }

    this.activateTab(this.activeTabIndex);
    
    this.activeTabIndex = newTabIndex;
    this.activateTab(this.activeTabIndex);
    this.el.style.setProperty("--active-tab-index", this.activeTabIndex);
  }

  activateTab(index) {
    const tabButton = this.tabButtons[index];
    const tabCard = this.cards[index];
    const currentAriaSelected = tabButton.getAttribute('aria-selected') === 'true';
    
    if (tabCard.hasAttribute('hidden')) {
      tabCard.removeAttribute('hidden');
    } else {
      tabCard.setAttribute('hidden', '');
    }

    tabButton.classList.toggle('is-active');
    tabButton.setAttribute('aria-selected', !currentAriaSelected);
  }
}

document.querySelectorAll("[data-tabs]").forEach((tabSwitcherElement) => {
  new TabsSwitcher(tabSwitcherElement);
});
