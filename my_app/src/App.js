import React, { useState } from 'react';
import {jwtDecode}  from "jwt-decode";
import { Fragment } from 'react';
import { publicRoutes,privateRoutes } from './routes';
import DefaultLayout from './components/Layouts/DefaultLayout';
import LayoutSecond from './components/Layouts/LayoutSecond';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
    const allRoutes = publicRoutes.concat(privateRoutes);
    const storeToken = localStorage.getItem('accessToken');
    if(storeToken)
    {
        
        // setIsAuthenticated(true);
        const decodedToken = jwtDecode(storeToken);
        const expirationTime = decodedToken.exp;
        console.log(expirationTime);

        // Lấy thời gian hiện tại (đơn vị: seconds)
        const currentTime = Math.floor(Date.now() / 1000);
        console.log(currentTime);
  
        if (expirationTime && expirationTime > currentTime) {
          // Token còn hạn
          console.log('Token còn hạn.');
        } else {
          // Token đã hết hạn
        //   setIsAuthenticated(false);
          localStorage.removeItem('accessToken');
          console.log('Token đã hết hạn.');
        }
    }

    return (
        <Router>
            <div className='app'>
                <Routes>
                    { (storeToken ? allRoutes : publicRoutes).map((route,index)=> {
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
