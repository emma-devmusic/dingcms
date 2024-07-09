import { Layout } from "./components/layout/Layout";
import { Home } from "./components/views/Home";
// import { ContextCMSProvider } from './context/Context';

export const App = () => {

    return (
        <Layout >
            <Home />
        </Layout>
    );
};
