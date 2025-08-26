import { FlatList } from "react-native";
import { BookCard } from "../BookCard";
import { listBooks } from "../../services/bookService";
import { useEffect, useState } from "react";


export const ListBooks = () => {
    const [listBks, setListBks] = useState([]);

    /* const listBks = [
        {
            "id": 1,
            "title": "Unlocking Android",
            "isbn": "1933988673",
            "pageCount": 416,
            "authors": [
                "W. Frank Ableson",
                "Charlie Collins",
                "Robi Sen"
            ]
        },
        {
            "id": 2,
            "title": "Android in Action, Second Edition",
            "isbn": "1935182722",
            "pageCount": 592,
            "authors": [
                "W. Frank Ableson",
                "Robi Sen"
            ]
        },
        {
            "id": 35476,
            "title": "Specification by Example",
            "isbn": "1617290084",
            "pageCount": 0,
            "authors": [
                "Gojko Adzic"   
            ]
        },
        {
            "id": 343245,
            "title": "Specification by Example",
            "isbn": "1617290084",
            "pageCount": 0,
            "authors": [
                "Gojko Adzic"   
            ]
        },
        {
            "id": 3123,
            "title": "Specification by Example",
            "isbn": "1617290084",
            "pageCount": 0,
            "authors": [
                "Gojko Adzic"   
            ]
        },
        {
            "id": 233,
            "title": "Specification by Example",
            "isbn": "1617290084",
            "pageCount": 0,
            "authors": [
                "Gojko Adzic"   
            ]
        },
        {
            "id": 543,
            "title": "Specification by Example",
            "isbn": "1617290084",
            "pageCount": 0,
            "authors": [
                "Gojko Adzic"   
            ]
        },
        {
            "id": 3345,
            "title": "Specification by Example",
            "isbn": "1617290084",
            "pageCount": 0,
            "authors": [
                "Gojko Adzic"   
            ]
        },
        {
            "id": 13,
            "title": "Specification by Example",
            "isbn": "1617290084",
            "pageCount": 0,
            "authors": [
                "Gojko Adzic"   
            ]
        },
        {
            "id": 73,
            "title": "Specification by Example",
            "isbn": "1617290084",
            "pageCount": 0,
            "authors": [
                "Gojko Adzic"   
            ]
        },
        {
            "id": 63,
            "title": "Specification by Example",
            "isbn": "1617290084",
            "pageCount": 0,
            "authors": [
                "Gojko Adzic"   
            ]
        },
        {
            "id": 53,
            "title": "Specification by Example",
            "isbn": "1617290084",
            "pageCount": 0,
            "authors": [
                "Gojko Adzic"   
            ]
        },
        {
            "id": 43,
            "title": "Specification by Example",
            "isbn": "1617290084",
            "pageCount": 0,
            "authors": [
                "Gojko Adzic"   
            ]
        },
        {
            "id": 33,
            "title": "Specification by Example",
            "isbn": "1617290084",
            "pageCount": 0,
            "authors": [
                "Gojko Adzic"   
            ]
        },
        {
            "id": 32,
            "title": "Specification by Example",
            "isbn": "1617290084",
            "pageCount": 0,
            "authors": [
                "Gojko Adzic"   
            ]
        }
    ]; */

    const fetchListBooks = async () => {
        await listBooks();
    }

    useEffect(() => {
        // É a forma correta criar uma função async DENTRO do useEffect
        const loadBooks = async () => {
            try {
                const booksData = await listBooks(); // A função listBooks já retorna os dados ou um array vazio
                setListBks(booksData); // Atualiza o estado com os dados recebidos
            } catch (error) {
                console.error("Erro final ao carregar os livros no componente:", error);
                setListBks([]); // Garante que o estado seja um array em caso de erro
            }
        };

        loadBooks(); // Chama a função para buscar os dados
    }, []); 

    return (
        <FlatList
            data={listBks}
            renderItem={({item}) => <BookCard item={item}/>}
            keyExtractor={item => item.id.toString()}
        />
    )
}