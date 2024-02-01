import { Imagem, Preco, Titulo } from './styles'
import bannerImg from '../../assets/images/banner-homem-aranha.png'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Titulo>
      <Preco>
        De <span>R$ 250,00</span> <br />
        Por apenas R$ 99,90
      </Preco>
    </div>
  </Imagem>
)

export default Banner
