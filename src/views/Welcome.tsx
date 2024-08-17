import cmsImage from '../assets/img/cms.png';

export const Welcome = () => {
    return (
        <div className="w-100" style={{ height: 'calc(100vh - 56px)' }}>
            <div className="container h-100">
                <div className="h-100 d-flex justify-content-center flex-column">
                    <h1 className="w-100 text-center">Bienvenid@</h1>
                    <hr className='w-50 ' style={{
                        margin: '1rem auto'
                    }}/>
                    <p className="w-100 text-center m-0">Estás en la sección de administración del <strong>CMS DING</strong>.</p>
                    <p className='text-center'><i>Encuentra tu página y adminstra sus <strong>blogs</strong>.</i></p>
                    <div className="w-100 d-flex justify-content-center">
                        <img src={cmsImage} alt="" style={{
                            width: '100%',
                            maxWidth: '300px',
                            margin: '0 auto',
                        }} />
                    </div>
                </div>
            </div>
        </div>
    );
};
