import ProductList from '../../components/ProductList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description: 'Resident Evil 4',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    description: 'Resident Evil 4',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 3,
    category: 'Ação',
    description: 'Diablo 4',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: diablo
  },
  {
    id: 4,
    category: 'Ação',
    description: 'Diablo 4',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: diablo
  }
]
const emBreve: Game[] = [
  {
    id: 5,
    category: 'Ação',
    description: 'Zelda',
    title: 'Zelda',
    system: 'Switch',
    infos: ['10%', 'R$ 350,00'],
    image: zelda
  },
  {
    id: 6,
    category: 'Ação',
    description: 'Zelda',
    title: 'Zelda',
    system: 'Switch',
    infos: ['10%', 'R$ 350,00'],
    image: zelda
  },
  {
    id: 7,
    category: 'Ação',
    description: 'Star Wars',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: starWars
  },
  {
    id: 8,
    category: 'Ação',
    description: 'Star Wars',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: starWars
  }
]
const Categories = () => (
  <>
    <ProductList games={promocoes} title="RPG" background="grey" />
    <ProductList games={emBreve} title="Ação" background="black" />
    <ProductList games={promocoes} title="Aventura" background="grey" />
    <ProductList games={emBreve} title="FPS" background="black" />
  </>
)

export default Categories
