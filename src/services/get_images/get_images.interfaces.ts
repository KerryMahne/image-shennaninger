import { RemoteDataInfinite } from '../interfaces'

export interface ImagesQueryResult {
  data: RemoteDataInfinite<string[]>;
  fetchNextPage: () => Promise<void>;
  refetch: () => Promise<void>;
  hasNextPage: boolean;
}
