/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            <img
              src={this.props.config.baseUrl + this.props.config.footerIcon}
              alt={this.props.config.title}
              width="66"
              height="58"
            />
          </a>
          <div>
            <h5>
              <a href={this.props.config.baseUrl + 'docs/getting-started.html'}>
                Documentos
              </a>
            </h5>
            <a href={this.props.config.baseUrl + 'docs/getting-started.html'}>
              Começando
            </a>
            <a href={this.props.config.baseUrl + 'docs/tutorial.html'}>
              Tutorial
            </a>
            
          </div>
          <div>
            <h5>Comunidade</h5>
            <a href={this.props.config.baseUrl + 'help.html'}>
              Comunidade MMAXIMS
            </a>
            <a href={this.props.config.baseUrl + 'showcase.html'}>
              Quem está usando o MurilloMAX?
            </a>
          </div>
          <div>
            <h5>Mais recursos</h5>
            <a href={this.props.config.baseUrl + 'home/'}>Blog</a>
            <a href="https://www.pratiz.com.br/" target="_blank">
              Pratiz
            </a>
            <a href="https://plantaoextra.com/" target="_blank">
             Plantão Extra
            </a>
            <a href="http://www.swb.com.br/home/" target="_blank">
              SWB
            </a>
          </div>
        </section>

 
        <section className="copyright">
          Murillo &copy; {currentYear} MMAXIMS Inc.
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
