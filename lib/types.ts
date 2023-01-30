export type NowPlayingSong = {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
};

export type Goodreads = {
  bookName: string;
  authName: string;
  percentageRead: number;
};

export type node = {
  id: string;
  questionTitle: string;
  title: string;
  url: string;
  viewCount: number;
}

export type LeetCodeSol = {
  solArr: { node: node }[];
}

export type LeetCodeQues = {
  title: string;
  timeAgo: string;
};

export type CodingNinjas = {
  questions_solved: number;
  current_level: number;
  badge: string;
}

export type LeetCodePostSolutionCount = {
  postViewCount: number;
  solutionCount: number;
}

export type LeetCodeTotalSolutionCount = {
  problemsSolved: number;
}

export type LeetCodeContestRating = {
  rating: number;
}

export type NPMDownloades = {
  downloads: number;
}

export type author = {
  name: string;
}

export type book = {
  title: string;
  thumbnail: string;
  authors: author[];
  pageCount: number;
}

export type TBR = {
  books: book[];
}