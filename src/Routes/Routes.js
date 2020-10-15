import React from "react";
import App from '../App/App';

const Composer = React.lazy(() => import('../Composer/ComposerComponent'));
const Home = React.lazy(() => import('../Stories/SWRComponent'));
const Categories = React.lazy(() => import('../Categories/SWRComponent'));
const Category = React.lazy(() => import('../Category/SWRComponent'));
const Story = React.lazy(() => import( '../Story/SWRComponent'));
const Login = React.lazy(() => import('../Login/Login'));
const User = React.lazy(() => import('../User/Container'));
const Profile = React.lazy(() => import('../Account/Profile/Profile'));
const NotFound = React.lazy(() => import('../Errors/NotFound'));
//const Activation = React.lazy(() => import('../Activation/Activation'));
const Settings  = React.lazy(() => import('../Account/AccountSettings'));
const Drafts = React.lazy(() => import('../Drafts/Drafts'));
const Draft = React.lazy(() => import('../Draft/SWRContainer'));

const ApplicationRoutes = {
   App: App,
   Routes: [
    {path: "/", exact: true, component: Home, private: false},
    {path: "/login", exact: true, component: Login, private: false},
    {path: "/stories/edit/:id", exact: true, component: Composer, private: true},
    {path: '/stories/:id/:name', exact: true, component: Story, private: false},
    {path: "/stories/new", exact: true, component: Composer, private: true},
    {path: "/categories", exact: true, component: Categories, private: false},
    {path: "/categories/:id/:name", exact: true, component: Category, private: false},
    {path: "/users/:id/:name", exact: true, component: User, private: false},
    {path: "/profile/edit", exact: true, component: Profile, private: true},
    /*{path: "/activation", exact: true, component: Activation, private: false},*/
    {path: "/settings", exact: true, component: Settings, private: true},
    {path: "/drafts", exact: true, component: Drafts, private: true},
    {path: "/drafts/:id/:name", exact: true, component: Draft, private: true},
    {component: NotFound }
   ]
};

export default ApplicationRoutes;
