import './App.css'

function App() {
  return (
    <div id="main">
      <div id="background" style={{ backgroundImage: 'url(/imagens/fundo.jpg)' }} />

      <header className="content-navbar">
        <div className="social">
          <a href="https://www.linkedin.com/in/professorafranciele/" title="LinkeIn" target="_blank" rel="noreferrer">
            <img src="/imagens/icons/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="http://portal.uninter.com/" title="Uninter" target="_blank" rel="noreferrer">
            <img src="/imagens/uninter.png" alt="Uninter" />
          </a>
        </div>
        <nav className="navbar">
          <a href="/catalogo/samples/magazine/index.htm#page/1">Caderno</a>
          <a href="/data/2014.MONOGRAFIA.PEDAGOGIA.pdf" target="_blank" rel="noreferrer">Monografia</a>
        </nav>
      </header>

      <footer className="content-footer">
        <div className="footer-left">Franciele Chagas dos Santos Nunes</div>
        <div className="footer-right">Desenho Espontâneo</div>
      </footer>
    </div>
  )
}

export default App
