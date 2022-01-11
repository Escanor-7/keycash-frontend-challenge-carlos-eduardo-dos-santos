import { FilterProperties } from "../../components/FilterProperties/index";
import { PropertiesList } from "../../components/PropertiesList/index";
import * as S from "./Home.styles";

export const Home = () => {

  return (
    <S.Container>
      <FilterProperties />
      <PropertiesList />
    </S.Container>
  )
}