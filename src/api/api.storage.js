'use strict';

const ArticlesStorage = require(`./articles/articles.storage.js`);
const CategoriesStorage = require(`./categories/categories.storage.js`);

class ApiStorage {

  constructor(articles, categories) {
    this._receivedArticles = Boolean(articles);
    this._receivedCategories = Boolean(categories);
    this.articles = new ArticlesStorage(articles);
    this.categories = new CategoriesStorage(categories);
  }

  async load() {
    if (!this._receivedArticles) {
      await this.articles._load();
    }
    if (!this._receivedCategories) {
      await this.categories._load();
    }
  }

}

module.exports = ApiStorage;