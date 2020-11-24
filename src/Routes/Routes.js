import React from "react";
import App from '../App/App';

const Composer = React.lazy(() => import('../Composer/Composer'));
const ComposerEdit = React.lazy(() => import('../Composer/EditingComposer'));
const Home = React.lazy(() => import('../Stories/Stories'));
const Categories = React.lazy(() => import('../Categories/SWRComponent'));
const Category = React.lazy(() => import('../Category/Category'));
const Story = React.lazy(() => import( '../Story/Story'));
const Login = React.lazy(() => import('../Login/Login'));
const User = React.lazy(() => import('../User/User'));
const Profile = React.lazy(() => import('../Account/Profile/Profile'));
const NotFound = React.lazy(() => import('../Errors/NotFound'));
//const Activation = React.lazy(() => import('../Activation/Activation'));
const Settings  = React.lazy(() => import('../Account/AccountSettings'));
const Drafts = React.lazy(() => import('../Drafts/Drafts'));
const Draft = React.lazy(() => import('../Draft/Draft'));

const ApplicationRoutes = {
   App: App,
   Routes: [
    {path: "/", exact: true, component: Home, private: false},
    {path: "/login", exact: true, component: Login, private: false},
    {path: "/stories/edit/:id", exact: true, component: ComposerEdit, private: true},
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
