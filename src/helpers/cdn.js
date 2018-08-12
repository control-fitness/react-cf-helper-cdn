class Cdn {
  constructor() {
    this.host = 'http://cdn.control.fitness';
  }

  /**
   * Return image url
   * @param  {String} fileName [foo-bar.png]
   * @return {String}
   */
  image(fileName) {
    return `${this.host}/images/${fileName}`;
  }

  /**
   * Return stylesheet url
   * @param  {String} fileName [semantic-ui/semantic.min.css]
   * @return {String}
   */
  stylesheet(fileName) {
    return `${this.host}/stylesheets/${fileName}`;
  }
}

export default new Cdn();
