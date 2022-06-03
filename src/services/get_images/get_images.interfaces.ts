import { RemoteData } from '../interfaces';

export interface ImagesQueryResult {
  data: RemoteData<string[]>;
  fetchNextPage: () => Promise<void>;
  refetch: () => Promise<void>;
  hasNextPage: boolean;
}
