import { useEffect, useRef } from "react"
import { Layout } from "../components/layout/Layout"
import { SidebarBlogs } from "../components/sidebarBlog/SidebarBlogs";
import { ContentEdit } from "../components/contentEdit/ContentEdit";

const htmlTxt = '<h1>Probando Contendo</h1><p><br></p><p>Era una tarde tranquila en el pequeño pueblo de <strong>Valle Verde</strong>. Los niños jugaban en la plaza central, sus risas llenando el aire mientras corrían de un lado a otro. Las flores en los jardines de las casas <s>cercanas </s>estaban en plena floración, añadiendo toques de color al paisaje. Los adultos, sentados en los bancos de la plaza, <em>charlaban </em>sobre los eventos recientes y los planes futuros. El cielo estaba despejado, con apenas unas pocas nubes blancas flotando perezosamente.</p><p><br></p><p>En la esquina de la <u>plaza</u>, el café de doña María estaba lleno de clientes disfrutando de sus famosos pasteles y café recién hecho. El aroma del café se mezclaba con el dulce perfume de las flores, creando una atmósfera acogedora y familiar. Doña María, una mujer mayor con una sonrisa siempre presente, iba de mesa en mesa asegurándose de que todos estuvieran bien <span style="color: rgb(153, 51, 255);">atendidos.</span></p><p><br></p><p>Visita la <a href="clinicagiuliani.net" rel="noopener noreferrer" target="_blank">Web de la Clinica Guliani</a></p><p><br></p>'
const htmlImage = ``;

export const Concejo = () => {

    const bodyBlog = useRef({} as HTMLDivElement)

    useEffect(() => {
        bodyBlog.current.innerHTML = htmlTxt
    }, [])

    return (
        <Layout>
            <div className="cms-container">
                <div className="d-flex">
                    <SidebarBlogs />
                    <ContentEdit />
                </div>
            </div>
        </Layout>
    )
}
