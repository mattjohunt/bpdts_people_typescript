import { Response, Request } from 'express'
import axios, { AxiosResponse } from "axios"

const coordUrl: string = 'https://bpdts-test-app-v4.herokuapp.com/users'

const cityUrl: string = 'https://bpdts-test-app-v4.herokuapp.com/city/London/users'

const getPeople = async (req: Request, res: Response): Promise<void> => {

  let result: Item[] = [];

  let coordList = await getCoord();

  let cityList = await getCity();

  result = result.concat(coordList, cityList);

  res.status(200).json( result )

}

const getCoord = async (): Promise<Item[]> => {

  let result: Item[] = [];

  try {
    const people: AxiosResponse<Item[]> = await axios.get(
      coordUrl
    )

    people.data.forEach(function (item, index) {
		  if (item.latitude >= 50 && item.latitude <= 52 && item.longitude >= -1 && item.longitude <= 1) {
		  	result.push(item);
      }
  })  
  return result;
      
  } catch (error) {
      throw error
  }

}

const getCity = async (): Promise<Item[]> => {

  let result: Item[] = [];

  try {
    const people: AxiosResponse<Item[]> = await axios.get(
      cityUrl
    )

    people.data.forEach(function (item, index) {
		  	result.push(item);
    })

  return result;
      
  } catch (error) {
      throw error
  }

}

  export { getPeople }