export interface VolumeInfo {
    title: string,
    categories: Array<string>,
    imageLinks?: any
    authors: Array<string>
    description: string,
}

export interface BookFetchResponse {
    id: string,
    volumeInfo: VolumeInfo
}

export interface BookProps {
    id: string,
    Info: VolumeInfo,
}

export interface BooksProps {
    booksCount: number,
    allBooks?: Array<BookFetchResponse>
}