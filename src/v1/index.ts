import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { GetEventsQueryV1, GetEventsResponseV1 } from './types'

export class ConnpassV1 {
  private APIClient: AxiosInstance
  private API_VERSION: string
  private API_ROOT: string

  constructor() {
    this.API_VERSION = 'v1'
    this.API_ROOT = 'https://connpass.com/api'
    this.APIClient = axios.create({
      baseURL: `${this.API_ROOT}/${this.API_VERSION}`,
    })
  }

  async getEventsV1(query?: GetEventsQueryV1): Promise<
    GetEventsResponseV1 & {
      response: AxiosResponse<GetEventsResponseV1>
    }
  > {
    try {
      const response = await this.APIClient.get<GetEventsResponseV1>('/event', {
        params: query,
      })
      return {
        response,
        ...response.data,
      }
    } catch (e) {
      return Promise.reject(e)
    }
  }
}
