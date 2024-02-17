import ProductList from '../../components/ProductList'

import {
  useGetActionGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery,
  useGetfightGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: fightGames } = useGetfightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()

  if (actionGames && fightGames && rpgGames && simulationGames && sportGames) {
    return (
      <>
        <ProductList
          id="action"
          games={actionGames}
          title="Ação"
          background="black"
        />
        <ProductList
          id="sports"
          games={sportGames}
          title="Esportes"
          background="grey"
        />
        <ProductList
          id="simulation"
          games={simulationGames}
          title="Simulação"
          background="black"
        />
        <ProductList
          id="fight"
          games={fightGames}
          title="luta"
          background="grey"
        />
        <ProductList id="rpg" games={rpgGames} title="RPG" background="black" />
      </>
    )
  }
  return <h4>Carregando...</h4>
}
export default Categories
