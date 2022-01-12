import React, { createContext } from 'react';
import { PropertiesListProps } from '../components/PropertiesList/index';

type PropertyContextProps = {
  filteredProperties: PropertiesListProps;
  setFilteredProperties: React.Dispatch<React.SetStateAction<number>>
}

export const usePropertyContext = createContext<PropertyContextProps | PropertiesListProps | any>({});