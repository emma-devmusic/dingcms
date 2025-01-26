
import { collection, getDocs, limit, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { getterCategoriesFromDB } from "../../services/categories";
import { Blog, Category } from "../../types/store";
import { useAppSelector } from "../../redux/store";
import { Icon } from "@iconify/react/dist/iconify.js";
import { db } from "../../services/firebase";
import Swal from "sweetalert2";

interface Props {
    setBlogs: Dispatch<SetStateAction<Blog[]>>;
    blogsNumber: number;
    setFirstDocument: any;
    setLastDocument: any;
    setIsLoading: any;
    categorySelected: string;
    setCategorySelected: any;
}

export const Search = ({ setBlogs, blogsNumber, setFirstDocument, setLastDocument, setIsLoading, categorySelected, setCategorySelected }: Props) => {

    const [loadingCategories, setLoadingCategories] = useState(false)
    const [categories, setCategories] = useState([] as Category[])
    const { entitySelected } = useAppSelector(state => state.entity)
    const { blogType } = useAppSelector(state => state.blogs)
    const [inputValue, setInputValue] = useState({
        keyword: '',
    })

    useEffect(() => {
        if (categories.length === 0 && entitySelected.slug) {
            setLoadingCategories(true)
            getterCategoriesFromDB(entitySelected.slug)
                .then(data => setCategories(data))
                .finally(() => setLoadingCategories(false))
        }
    }, [entitySelected])

    useEffect(() => {
        if (entitySelected.slug) {
            if (categorySelected !== '') {
                setIsLoading(true)
                setInputValue({ keyword: '' })
                const blogs = collection(db, "entity", `${entitySelected.slug}`, `${blogType}`);
                let q = query(blogs, limit(blogsNumber), orderBy('date', 'desc'), where('category', '==', categorySelected))
                try {
                    onSnapshot(q, (querySnapshot) => {
                        setFirstDocument(querySnapshot.docs[0])
                        setLastDocument(querySnapshot.docs[querySnapshot.docs.length - 1])
                        setBlogs([])
                        querySnapshot.forEach((doc) => {
                            setBlogs((state: any) => [...state, { id: doc.id, data: doc.data() }])
                        })
                        setIsLoading(false)
                    })
                } catch (error) {
                    setIsLoading(false)
                    Swal.fire('Error', 'Hubo un error en la base de datos', 'error');
                }
            } else {
                handleResetSearch()
            }
        }
    }, [categorySelected, entitySelected, blogType])

    const handleSearch = async (e: any) => {
        e.preventDefault();
        let keyword = inputValue.keyword.trim()
        if (keyword !== '') {
            const arrayWords = keyword.toLowerCase().split(' ');
            const q = query(
                collection(db, "entity", `${entitySelected.slug}`, `${blogType}`),
                where("keywords", "array-contains-any", arrayWords)
            );
            const querySnapshot = await getDocs(q);
            const matchedResults = querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: { ...doc.data() },
            }));
            setBlogs(matchedResults as Blog[]);
        } else {
            handleResetSearch()
        }
    }

    const handleResetSearch = () => {
        setInputValue({ keyword: '' })
        setIsLoading(true);
        const blogs = collection(db, "entity", `${entitySelected.slug}`, `${blogType}`);
        let q = query(blogs, limit(blogsNumber), orderBy('date', 'desc'))
        try {
            onSnapshot(q, (querySnapshot) => {
                setFirstDocument(querySnapshot.docs[0])
                setLastDocument(querySnapshot.docs[querySnapshot.docs.length - 1])
                setBlogs([])
                querySnapshot.forEach((doc) => {
                    setBlogs((state: any) => [...state, { id: doc.id, data: doc.data() }])
                })
                setIsLoading(false)
            })
        } catch (error) {
            setIsLoading(false)
            Swal.fire('Error', 'Hubo un error en la base de datos', 'error');
        }
    }

    return (
        <div className="d-flex flex-column align-items-start justify-content-start gap-2" style={{ maxWidth: '500px' }}>
            <form className="input-group w-100 d-flex"  onSubmit={handleSearch}>
                <div className="d-flex position-relative w-75">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Buscar"
                        name="keyword"
                        value={inputValue.keyword}
                        onChange={(e) => setInputValue({ ...inputValue, keyword: e.target.value })}
                        style={{ borderTopRightRadius: '0px', borderBottomRightRadius: '0px' }}
                    />
                    <button className="btn px-3 fs-4 position-absolute end-0 d-flex align-items-center h-100" onClick={handleResetSearch}><Icon icon={'hugeicons:reload'} /></button>
                </div>
                <button className="btn btn-primary px-4 fs-4" type="submit"><Icon icon={'material-symbols:search'} /></button>
            </form>
            {
                blogType !== 'sesiones' &&
                <div className="input-group w-75 w-sm-auto mt-2 m-md-0" style={{ maxWidth: '600px' }}>
                    <select
                        className="form-select"
                        name="categories"
                        onChange={(e: any) => setCategorySelected(e.target.value)}
                    >
                        <option value="">Todas las categorías</option>
                        {
                            loadingCategories
                                ? <option value="">Cargando Categorías...</option>
                                : categories.map(category => <option value={category.name} key={category.name}>{category.name}</option>)
                        }
                    </select>
                </div>
            }
        </div>
    );
};