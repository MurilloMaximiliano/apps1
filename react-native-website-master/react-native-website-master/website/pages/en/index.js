/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock;
const Container = CompLibrary.Container;

const siteConfig = require(process.cwd() + '/siteConfig.js');

const pinnedApps = siteConfig.users.filter(app => app.pinned);

class Button extends React.Component {
  render() {
    return (
      <a
        className="big-button"
        href={this.props.href}
        target={this.props.target}>
        {this.props.children}
      </a>
    );
  }
}

class HomeCallToAction extends React.Component {
  render() {
    return (
      <div>
        <Button
          href={siteConfig.baseUrl + 'docs/getting-started'}
          target="_self">
          Iniciar
        </Button>
        <Button href={siteConfig.baseUrl + 'docs/tutorial'} target="_self">
        Aprenda o básico
        </Button>
      </div>
    );
  }
}

class Hero extends React.Component {
  render() {
    return <div className="hero">{this.props.children}</div>;
  }
}

class HeaderHero extends React.Component {
  render() {
    return (
      <Hero>
        <div className="text">MURILLOMAX</div>
        <div className="minitext">
          MURILLOMAX Murillo Maximiliano 
        </div>
        <div className="buttons-unit">
          <HomeCallToAction />
        </div>
      </Hero>
    );
  }
}

class AppList extends React.Component {
  constructor(props, context) {
    super(props, context);

    this._renderApp = this._renderApp.bind(this);
  }

  render() {
    return <div>{this.props.apps.map(this._renderApp)}</div>;
  }

  _renderApp(app, i) {
    return (
      <div className="showcase" key={i}>
        <a href={app.infoLink}>{this._renderAppIcon(app)}</a>
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
}

class Features extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <div className="blockElement">
            <div className="blockContent">
              <h2>O poder da ação</h2>
              <MarkdownBlock>
                TEM PODER QUEM AGE.
                Acorde para os objetivos que quer conquistar. 
                Já aconteceu a você de se olhar no espelho e não gostar daqueles 
                quilos a mais? De observar seu momento profissional somente com frustração?
                 De se sentir desconectado dos seus familiares, dos seus amigos?
                 Se você acha que essas são situações normais, pense de novo! 
              </MarkdownBlock>
            </div>
            <MarkdownBlock>
              {`\`\`\`javascript
Ouviram do Ipiranga as margens plácidas
De um povo heroico o brado retumbante
E o sol da liberdade, em raios fúlgidos
Brilhou no céu da pátria nesse instante

Se o penhor dessa igualdade
Conseguimos conquistar com braço forte
Em teu seio, ó liberdade
Desafia o nosso peito a própria morte!
\`\`\``}
            </MarkdownBlock>
          </div>
        </Container>
        <Container>
          <div className="blockElement">
            <div className="blockContent">
              <h2>Carpe Diem</h2>
              <MarkdownBlock>
              Quem é que nunca ouviu falar em aproveitar o dia 
              como se fosse o último, que atire a primeira pedra,
               não é mesmo? Afinal de contas, viver cada dia de forma intensa é só uma garantia a mais de vida bem vivida.
                E se existe uma expressão muito usada por quem cultua viver 
              cada dia de forma intensa é o Carpe Diem. Sua origem vem do Latim e 
              significa nada mais e nada menos do que “aproveite o dia”. 
              Com isso, quem pratica o Carpe Diem sabe o quanto é importante saber como aproveitar
              ao máximo cada momento do dia e também apreciar o presente.
              A pergunta que não se quer calar é: 
              como viver seus dias como se fossem os últimos? 
              Afinal de contas, embora saibamos que é essencial aproveitar a vida, 
              colocar o Carpe Diem em prática ainda é uma tarefa difícil para muitas pessoas. 
              Por isso, meu amigo, neste texto vou te dar várias dicas para que a partir de agora sua vida comece a mudar, 
              de forma que você tenha um dia muito mais feliz e produtivo
              </MarkdownBlock>
            </div>
            <MarkdownBlock>
              {`\`\`\`javascript
Ó Pátria amada
Idolatrada
Salve! Salve!

Brasil, um sonho intenso, um raio vívido
De amor e de esperança à terra desce
Se em teu formoso céu, risonho e límpido
A imagem do Cruzeiro resplandece
\`\`\`
`}
            </MarkdownBlock>
          </div>
        </Container>
        <Container>
          <div className="blockElement">
            <div className="blockContent">
              <h2>9APP Soluções Criativas</h2>
              <div>
                <MarkdownBlock>
                Esse é o segredo: adaptar-se às mudanças e fazer de cada uma delas uma nova possibilidade.
                 É preciso observar, planejar e agir.É assim que a gente trabalha, com visão por todos os ângulos,
                    pendurados pela cauda, mudando de cor, pisando firme, 
                    buscando achar o que ainda não foi descoberto, 
                    porque desafio é o que nos move.
                    Inspirar pessoas, instigar desejos, construir histórias, 
                    soltar criatividade por aí e colher resultados.
                    Não é à toa que estamos no mercado há mais de duas décadas. 
                    Afinal, quem tem experiência, sabe fazer acontecer. [Portifólio](https://plantaoextra.com/).
                                      
                </MarkdownBlock>
              </div>
            </div>
            <img
              src="https://media.giphy.com/media/OxQ6ymoZFTI0o/giphy.gif"
              alt="Hot Reloading Demonstration"
            />
          </div>
        </Container>
        <Container>
          <div className="blockElement">
            <div className="blockContent">
              <h2>Brasil</h2>
              <div>
                <MarkdownBlock>
                A História do Brasil é dividida, consensualmente e para fins didáticos, 
                em três períodos principais: Período Colonial,
                 Período Imperial e Período Republicano. Entretanto, 
                 tais divisões existem apenas para organizar esquematicamente os
                  principais conteúdos sobre a formação do Brasil, 
                tendo como ponto de partida o ano do descobrimento, isto é, 1500. 
                </MarkdownBlock>
              </div>
            </div>
            <MarkdownBlock>
              {`
\`\`\`javascript
Gigante pela própria natureza
És belo, és forte, impávido colosso
E o teu futuro espelha essa grandeza

Terra adorada
Entre outras mil
És tu, Brasil
Ó Pátria amada!
Dos filhos deste solo és mãe gentil
Pátria amada
Brasil!
\`\`\`
`}
            </MarkdownBlock>
          </div>
        </Container>
      </div>
    );
  }
}

class MiniShowcase extends React.Component {
  render() {
    return (
      <div className="home-showcase-section">
        <h2>Seja um de nossos Parceiros</h2>
        <p>
          Confira as empresas que fazem
           parte de nosso grupo de parceiros e 
           venha fazer parte deste time,{' '}
          <a href={siteConfig.baseUrl + 'showcase'}>Veja nossos apps</a>!
        </p>
        <div className="logos">
          <AppList apps={pinnedApps} />
        </div>
      </div>
    );
  }
}

class Index extends React.Component {
  render() {
    return (
      <div className="pageContainer">
        <HeaderHero />
        <Features />
        <MiniShowcase />
        <Hero>
          <HomeCallToAction />
        </Hero>
      </div>
    );
  }
}

module.exports = Index;
