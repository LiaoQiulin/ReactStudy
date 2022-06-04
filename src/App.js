import React, { Suspense, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import RequireAuth, { AuthProvider } from './component/Auth'

function RedirectHome() {
    let navigate = useNavigate();
    useEffect(() => {
        navigate("/public", { replace: true })
    }, [])
    return <></>
}
const PublicPage = React.lazy(() => import('./page/PublicPage'));
const ProtectedPage = React.lazy(() => import('./page/ProtectedPage'));
const LoginPage = React.lazy(() => import('./page/LoginPage'));
const NoMatchPage = React.lazy(() => import('./page/NoMatchPage'));

function Lazy(props) {
    return <Suspense fallback={<></>}>{props.children}</Suspense>
}

export default function App() {
    return (<AuthProvider>
        <Routes>
            <Route path="/" element={<RedirectHome />} />
            <Route path="/public" element={<Lazy><PublicPage /></Lazy>} />
            <Route path="/login" element={<Lazy><LoginPage /></Lazy>} />
            <Route
                path="/protected"
                element={
                    <RequireAuth>
                        <Lazy><ProtectedPage /></Lazy>
                    </RequireAuth>
                }
            />
            <Route path="*" element={<Lazy><NoMatchPage /></Lazy>} />
        </Routes>

    </AuthProvider>)
}
