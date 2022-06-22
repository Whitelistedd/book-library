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

export interface initialStateType {
    allBooks: Array<BookFetchResponse>,
    Search: string,
    BookId: string,
    Category: string,
    SortBy: string,
    Loading: boolean,
    PageCount: number,
}