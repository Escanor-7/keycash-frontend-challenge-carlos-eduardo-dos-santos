import { useState, useEffect } from "react";
import * as S from "./Home.styles";
import { FilterProperties } from "../../components/FilterProperties/index";
import { PropertiesList } from "../../components/PropertiesList/index";
import { usePropertyContext } from "../../context/UsePropertiesContext";
import { PropertiesListProps } from '../../components/PropertiesList/index';
import { api } from "../../services/api";

export const Home = () => {
  const [filteredProperties, setFilteredProperties] = useState<PropertiesListProps[]>([]);

  // filtering functions
  const handlePropertyFilter = (properties: PropertiesListProps[]) => {
    const organizedProperties = handleHighestValueProperties(properties);
    const publicPropertiesFound = handleWithPublishProperties(organizedProperties);
    const propertyWithoutAddress = handlePropertiesWithoutAddresses(organizedProperties);
    const identifiersArray = [...publicPropertiesFound, ...propertyWithoutAddress];

    for (let i = 0; i < identifiersArray.length; i++) {
      let index = properties.indexOf(identifiersArray[i]);
      if (index >= 0) {
        properties.splice(index, 1);
        setFilteredProperties([...filteredProperties, ...properties])
      }
    }
  }

  const handleHighestValueProperties = (properties: PropertiesListProps[]) => {
    const lowestPriceToHighest = properties.sort((a, b) => a.price - b.price);
    const higherPriceForLower = lowestPriceToHighest.reverse();
    return higherPriceForLower;
  }

  const handlePropertiesWithoutAddresses = (properties: PropertiesListProps[]) => {
    const addresses = properties.filter((property) => {
      return property.address.formattedAddress.includes('Rua Desconhecida');
    })
    return addresses;
  }

  const handleWithPublishProperties = (properties: PropertiesListProps[]) => {
    const publishProperties = properties.filter((property) => {
      return property.publish === false;
    });
    return publishProperties;
  }

  useEffect(() => {
    const getProperties = async () => {
      await api.get('/keycash/challenge')
        .then((res) => handlePropertyFilter(res.data))
        .catch((err) => console.log('Request error', err))
    }
    getProperties();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <usePropertyContext.Provider value={{
      filteredProperties,
      setFilteredProperties
    }} >
      <S.Container>
        <FilterProperties />
        <PropertiesList />
      </S.Container>
    </usePropertyContext.Provider>
  )
}