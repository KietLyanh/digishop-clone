import React from 'react';

import { Fragment } from 'react';
import { publicRoutes } from './routes';
import DefaultLayout from './components/Layouts/DefaultLayout';
import LayoutSecond from './components/Layouts/LayoutSecond';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
    return (
        <Router>
            <div className='app'>
                <Routes>
                    {publicRoutes.map((route,index)=> {
                        const Layout = route.layout === null ? Fragment : (route.layout==="LayoutSecond" ? LayoutSecond : DefaultLayout);
                        // lưu ý là fragement là thẻ chứa, nên tạo một thẻ chứa để bao toàn bộ
                        // nội dung của 1 layout mới hoàn toàn, layout này sẽ ko chứa defautlayout
                        let Page="";
                        if(route.page !== null)
                        {
                            Page = route.component;
                        }
                        return(
                            <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page/>
                                </Layout>
                            }>
                            </Route>
                        )
                    })}
                </Routes>
            </div>
        </Router>
    );
}
export default App;
