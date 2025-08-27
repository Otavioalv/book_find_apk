import { FlatList } from "react-native";
import { BookCard } from "../BookCard";
import { listBooks } from "../../services/bookService";
import { useEffect, useState } from "react";


export const ListBooks = ({filterBook}) => {
    const [listBks, setListBks] = useState([]);



    useEffect(() => {
        // console.log(filterBook);
        // console.log(listBks);
        if(filterBook) {
            // console.log(listBks.filter(b => b.title.toLowerCase().includes(filterBook.toLowerCase()) || b.authors.join(" ").toLowerCase().includes(filterBook.toLowerCase())));

            // console.log(listBks[0].authors.join(" "));
            // console.log(listBks.filter(b => b.authors.join(" ").toLowerCase().includes(filterBook.toLowerCase())));
            // console.log(filterBook, listBks[0]);
            return;
        }
         
        return;
    }, [filterBook, listBks])

    useEffect(() => {
        // setListBks(await fetchListBooks());
        const loadBooks = async () => {
            try {
                const booksData = await listBooks();
                setListBks(booksData); 
            } catch (error) {
                console.error("Erro final ao carregar os livros no componente:", error);
                setListBks([]);
            }
        };

        loadBooks(); // Chama a função para buscar os dados
    }, []); 

    return (
        <FlatList
            data={filterBook ? listBks.filter(b => b.title.toLowerCase().includes(filterBook.toLowerCase()) || b.authors.join(" ").toLowerCase().includes(filterBook.toLowerCase())) :listBks}
            renderItem={({item}) => <BookCard item={item}/>}
            keyExtractor={item => item.id.toString()}
        />
    )
}