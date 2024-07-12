{
  "compilerOptions" = {
    typeRoots: ["./node_modules/@types", "./types"],
  };
}
declare module "movie-trailer" {
  interface Options {
    id?: boolean;
    multi?: boolean;
    year?: number;
  }

  function movieTrailer(
    title: string,
    options?: Options
  ): Promise<string | null>;

  export = movieTrailer;
}
