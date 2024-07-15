import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../redux/store"
import { useEffect, useMemo, Suspense } from 'react';
import { getEntities } from "../redux/slice/entitySlice"
import { Entity } from "../types/store"
import { Spinner } from "../components/spinner/Spinner";


export const SelectPages = () => {


    const dispatch = useAppDispatch()
    const { entities } = useAppSelector( state => state.entity )
    const { isLoading } = useAppSelector( state => state.ui )
    const getListEntities = useMemo( () => dispatch(getEntities()), [])

    useEffect(() => {
        getListEntities
    },[])


    if(isLoading) return <Spinner />

    return (    
        <div className="cms-container">
            <div className="p-4">
                <h3>Selecciona una página para administrar sus Blogs</h3>
                <hr />
                <ul>
                    {
                        entities.map( (e:Entity, i: number) => 
                            <li key={i}><Link to={`/pages/${e.slug}`}>{e.name}</Link></li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}
