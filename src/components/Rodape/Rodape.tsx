import estilo from './Rodape.module.css';

function Rodape() {
    return (
        <footer className={estilo.rodape}>
            <p>Desenvolvido por: Dandara</p>
            <p>Copyright</p>
        </footer>
    );
}

export default Rodape;