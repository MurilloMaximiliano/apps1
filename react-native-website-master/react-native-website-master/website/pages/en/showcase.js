/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;

const siteConfig = require(process.cwd() + '/siteConfig.js');

const showcaseApps = siteConfig.users;
const pinnedApps = showcaseApps.filter(app => {
  return app.pinned;
});
const featuredApps = showcaseApps
  .filter(app => {
    return !app.pinned;
  })
  .sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });
const apps = pinnedApps.concat(featuredApps);

class AppList extends React.Component {
  constructor(props, context) {
    super(props, context);

    this._renderApp = this._renderApp.bind(this);
    this._renderAppIcon = this._renderAppIcon.bind(this);
    this._renderAppName = this._renderAppName.bind(this);
    this._renderInfo = this._renderInfo.bind(this);
    this._renderLinks = this._renderLinks.bind(this);
  }

  render() {
    return <div>{this.props.apps.map(this._renderApp)}</div>;
  }

  _renderApp(app, i) {
    return (
      <div className="showcase" key={i}>
        <div>
          <a href={app.infoLink}>{this._renderAppIcon(app)}</a>
          {this._renderAppName(app.name)}
          {this._renderLinks(app)}
          {this._renderInfo(app.infoTitle, app.infoLink)}
        </div>
      </div>
    );
  }

  _renderAppIcon(app) {
    let imgSource = app.icon;
    if (!app.icon.startsWith('http')) {
      imgSource = siteConfig.baseUrl + 'img/showcase/' + app.icon;
    }
    return <img src={imgSource} alt={app.name} />;
  }

  _renderAppName(name) {
    return <h3>{name}</h3>;
  }

  _renderInfo(title, uri) {
    let info = null;
    if (uri) {
      info = (
        <p>
          <a href={uri} target="_blank">
            {title}
          </a>
        </p>
      );
    }

    return info;
  }

  _renderLinks(app) {
    if (!app.linkAppStore && !app.linkPlayStore) {
      return;
    }

    var linkAppStore = app.linkAppStore ? (
      <a href={app.linkAppStore} target="_blank">
        iOS
      </a>
    ) : (
      ''
    );
    var linkPlayStore = app.linkPlayStore ? (
      <a href={app.linkPlayStore} target="_blank">
        Android
      </a>
    ) : (
      ''
    );

    return (
      <p>
        {linkAppStore}
        {linkAppStore && linkPlayStore ? ' · ' : ''}
        {linkPlayStore}
      </p>
    );
  }
}

class Showcase extends React.Component {
  render() {
    return (
      <div className="pageContainer">
        <Container padding={['bottom']}>
          <div className="showcaseSection">
            <div className="prose">
              <h1>MURILLOAPP</h1>
              <p>
              Somos uma agência ousada, inovadra, 
              de grandes projetos e desafios. 
              Somos Construção de Marcas e Resultados além das expectativas. Somos completos: Estratégias, Campanhas,
               Ações Promocionais, Lançamento de Produtos, Endomarketing, Projetos Especiais, Design, 
              Marketing Digital, Mídia e Performance na Web, Gestão de Redes Sociais e Social Ads. Somos apaixonados.
              </p>
            </div>
            <div className="logos">
              <AppList apps={apps} />
            </div>
            <p>Qualidade e Competência.</p>
            <p>
              <span>Carpe Diem </span>
              <a href="https://www.youtube.com/watch?v=CbI5hTtMUq0">
                Viva o momento presente como se fosse o último. 
              </a>
              <span> Quem trabalha com dificuldade se fortalece.</span>
            </p>
          </div>
        </Container>
      </div>
    );
  }
}

Showcase.defaultProps = {
  language: 'en',
};

module.exports = Showcase;
