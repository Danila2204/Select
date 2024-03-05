function getTemplate(data = [], placeholder, selectedId) {
  let text = placeholder ?? "Выберите элемент";

  const items = data.map(item => {
    let myClass = "";
    if (item.id === selectedId) {
      text = item.value;
      myClass = "selected";
    }

    return `
      <li class="select__item ${myClass}" data-type="item" data-id="${item.id}">${item.value}</li>
    `;
  });
  return `
  <div class="select__backdrop" data-type="backdrop"></div>
    <div class="select__input" data-type="input">
      <span data-type="value">${text}</span>
      <svg class="arrow" xmlns="http://www.w3.org/2000/svg" height="24" width="15" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
    </div>
    <div class="select__drop-down" data-type="drop-down">
      <ul class="select__list">
        ${items.join("")}
      </ul>
    </div>
  `
}

export class Select {
  constructor(selector, options) {
    this.$element = document.querySelector(selector);
    this.options = options;
    this.selectedId = options.selectedId;

    this.#render();
    this.#setup();
  }

  #render() {
    const { placeholder, data } = this.options;
    this.$element.classList.add("select");
    this.$element.innerHTML = getTemplate(data, placeholder, this.selectedId);
  }

  #setup() {
    this.clickHandler = this.clickHandler.bind(this);
    this.$element.addEventListener("click", this.clickHandler);
    this.$value = this.$element.querySelector("[data-type='value']");
  }

  get isOpen() {
    return this.$element.classList.contains("open");
  }

  get current() {
    return this.options.data.find(item => item.id === this.selectedId);
  }
  
  toggle() {
    this.isOpen ? this.close() : this.open();
  }
  
  clickHandler(event) {
    const { type } = event.target.dataset;
    
    if (type === "input") this.toggle();
    else if (type === "item") {
      this.select(event.target.dataset.id);
    } else if (type === "backdrop") this.close();
  }
  
  select(id) {
    this.selectedId = id;
    this.$value.textContent = this.current.value;

    this.$element.querySelectorAll(`[data-type="item"]`).forEach(element => {
      element.classList.remove("selected");
    })
    this.$element.querySelector(`[data-id="${this.selectedId}"]`).classList.add("selected");

    this.options.onSelect ? this.options.onSelect(this.current) : null;

    this.close();
  }

  open() {
    this.$element.classList.add("open");
  }

  close() {
    this.$element.classList.remove("open");
  }

  destroy() {
    this.$element.removeEventListener("click", this.clickHandler);
    this.$element.innerHTML = "";
  }
}