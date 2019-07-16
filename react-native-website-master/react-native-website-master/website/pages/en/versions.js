/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;

const CWD = process.cwd();
const siteConfig = require(CWD + '/siteConfig.js');
const versions = require(CWD + '/versions.json');

class VersionItem extends React.Component {
  render() {
    const version = this.props.version;
    const versionName = version === 'next' ? 'Master' : version;

    const isCurrentVersion = this.props.currentVersion === version;
    const isNext = version === 'next';
    const isRC = version.toUpperCase().indexOf('-RC') !== -1;

    const latestMajorVersion = versions[0].toUpperCase().replace('-RC', '');
    const documentationLink = (
      <a
        href={
          this.props.baseUrl +
          'docs/' +
          (isCurrentVersion ? '' : version + '/') +
          'getting-started'
        }>
        Documentation
      </a>
    );
    let releaseNotesURL = 'https://github.com/facebook/react-native/releases';
    let releaseNotesTitle = 'Changelog';
    if (isNext) {
      releaseNotesURL = `https://github.com/facebook/react-native/compare/${latestMajorVersion}-stable...master`;
      releaseNotesTitle = 'Commits since ' + latestMajorVersion;
    } else if (!isRC) {
      releaseNotesURL = `https://github.com/facebook/react-native/releases/tag/v${version}.0`;
    }

    const releaseNotesLink = <a href={releaseNotesURL}>{releaseNotesTitle}</a>;

    return (
      <tr>
        <th>{versionName}</th>
        <td>{documentationLink}</td>
        <td>{releaseNotesLink}</td>
      </tr>
    );
  }
}

class Versions extends React.Component {
  render() {
    let currentVersion = versions.length > 0 ? versions[0] : null;
    let latestVersions = ['next'].concat(
      versions.filter(version => version.indexOf('-RC') !== -1)
    );
    const stableVersions = versions.filter(
      version => version.indexOf('-RC') === -1
    );

    return (
      <div className="pageContainer">
        <Container className="mainContainer documentContainer postContainer">
          <h1>MurilloAPPs</h1>
          <p>
            Murillo Maximiliano
            <a
              href={
                'https://www.instagram.com/?hl=pt-br'
              }>
              <code>9APP-Soluções Criativas</code>
            </a>{' '}
            Paz no futuro e glória no passado.
            Mas, se ergues da justiça a clava forte,
            Verás que um filho teu não foge à luta,
            Nem teme, quem te adora, a própria morte!{'Brasil'}
            <a href={'http://www.brasil.gov.br/'}>
       
            </a>
                . Terra adorada Entre outras mil,
            És tu, Brasil, Ó Pátria amada!
            Dos filhos deste solo és mãe gentil,
            Pátria amada, Brasil!!
          </p>
          <h2>Aplicativos</h2>
          <p>
          Software aplicativo, ou simplesmente aplicativo ou aplicação, é um programa de computador que tem por objetivo ajudar e desempenhar uma tarefa específica, 
          em geral ligada a processamento de dados.
          </p>
        </Container>
      </div>
    );
  }
}

Versions.defaultProps = {
  language: 'en',
};

module.exports = Versions;
