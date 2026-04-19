export type DownloadResponse = {
  title: string;
  thumbnail: string;
  download: string;
  error?: string;
};

export type ApiError = {
  error: string;
};
