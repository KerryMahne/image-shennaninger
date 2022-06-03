export enum RemoteDataType {
  NONE = 'NONE',
  LOADING = 'LOADING',
  LOADING_NEXT_PAGE = 'LOADING_NEXT_PAGE',
  ERROR = 'ERROR',
  ERROR_NEXT_PAGE = 'ERROR_NEXT_PAGE',
  EMPTY = 'EMPTY',
  SUCCESS = 'SUCCESS',
}

export type RemoteData<D> =
  | { type: RemoteDataType.NONE }
  | { type: RemoteDataType.LOADING }
  | { type: RemoteDataType.ERROR }
  | { type: RemoteDataType.EMPTY }
  | { type: RemoteDataType.SUCCESS; data: D };

export type RemoteDataInfinite<D> =
  | RemoteData<D>
  | { type: RemoteDataType.LOADING_NEXT_PAGE; data: D }
  | { type: RemoteDataType.ERROR_NEXT_PAGE; data: D };

export interface ImageResponse {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export interface Image {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
}
