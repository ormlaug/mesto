export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(item) {
    this._renderedItems.unshift({name: item['place-input'], link: item['link-input']});
    this.renderItems();
  }
  
  renderItems() {
    this._container.replaceChildren();
    this._renderedItems.forEach((item) => {
      const renderedItem = this._renderer(item);
      this._container.append(renderedItem);
    });
  }
}