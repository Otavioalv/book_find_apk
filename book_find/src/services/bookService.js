import bookApi from "./bookApi";


export const listBooks = async () => {
    try {
        const res = await bookApi.get("/books");

        const listBooks = res.data;

        // console.log(listBooks);
        return listBooks
    } catch (err) {
        console.log("Erro ao resgatar lista de livros: ", err);
        return [];
    } 
}