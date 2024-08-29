import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../redux/store"
import { useEffect } from 'react';
import { getEntities, setSelectedEntity } from "../redux/slice/entitySlice"
import { Entity } from "../types/store"


export const SelectPages = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const { entities, entitySelected } = useAppSelector(state => state.entity)
    const { isLoading } = useAppSelector(state => state.ui)

    useEffect(() => {
        if(entities.length === 0) dispatch(getEntities())
    }, [])

    const hadleClickEntity = (entity: { name: string, slug: string; }, link: string) => {
        if(entitySelected.slug !== entity.slug){
            dispatch(setSelectedEntity(entity))
        }
        navigate(link)
    }

    return (
        <div className="cms-container">
            <div className="p-4">
                <h3>Selecciona tu página</h3>
                <hr />
                <p>Seleciona una página a la que tengas acceso para gestionar sus <strong>blogs</strong>.</p>
                <div style={{
                    maxWidth: '500px',
                    margin: '0 auto',
                    marginTop: '2.5rem'
                }}>
                    <h6 >Listado de Páginas</h6>
                    <hr />
                    <ul className="list-group">
                        {
                            isLoading
                                ? <div className="d-flex justify-content-center align-items-center" style={{
                                    height: '400px'
                                }}>
                                    <div className="spinner-border" role="status"></div>
                                </div>
                                : entities.map((e: Entity, i: number) =>
                                    <li key={i} style={{ listStyle: 'none' }}>
                                        <button
                                            onClick={() => hadleClickEntity(e, `/pages/entity-selected/blogs`)}
                                            className="list-group-item list-group-item-action"
                                        >
                                            {e.name}
                                        </button>
                                    </li>
                                )
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
