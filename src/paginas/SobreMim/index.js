import styles from './SobreMim.module.css'
import PostModelo from "../../componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/minha_foto.png"


export default function SobreMim(){
  return(
    <PostModelo
      fotoCapa={fotoCapa}
      titulo="Sobre mim"
    >
      <h3 className={styles.subtitulo}>
        Olá, eu sou o Henrique!
      </h3>

      <img
        src={fotoSobreMim}
        alt="Foto do Henrique Guerrato"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>Oi, tudo bem? Eu sou estudante de Front-end na Alura e estou desenvolvendo esse site em uma aula sobre React com um instrutor. Sou de Bertioga SP, nascido em São Paulo, me mudei para Bertioga com minha família aos 6 anos. Depois de um tempo me envolvi com a tecnologia, arrumei meu prirmeiro computador e desde então não consegui mais ficar longe disso. A partir do momento que soube que existiam empregos que envolviam internet, tecnologia e que poderiam ser feitos via computador, eu já me interessei.</p>
      
      <p className={styles.paragrafo}>Minha história com programação começou em 2022 quando vi essa possibilidade de trabalhar com algo que eu tivesse facilidade (tecnologia) e fosse algo que eu me sentisse bem para fazer. Me aprofundei no assunto e na ideia de fazer isso e comecei.</p>
      
      <p className={styles.paragrafo}>Tive muito apoio para começar e desde então não parei mais. Tenho muitos amigos e até parentes que trabalham nessa area e se disponibilizaram para me ajudar e me incentivar a continuar.</p>

      <p className={styles.paragrafo}>Com isso comecei com a lógica de programação com Portugol e depois busquei conhecimento em HTML, CSS e JavaScript e agora estou me aprofundando mais em React. Desde que comecei a estudar me identifiquei com desenvolvimento Front-end e pretendo levar como carreira.</p>
      

    </PostModelo>
  )
}