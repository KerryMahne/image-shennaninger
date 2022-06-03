import { Image, RemoteData } from '../interfaces'

export interface ImageQueryResult {
  data: RemoteData<Image>;
  refetch: () => Promise<void>;
}
