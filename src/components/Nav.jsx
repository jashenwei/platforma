import React from "react";
import "../App.css";
import {NavLink} from "react-router-dom";
import logo from "../img/logo.png";
import search from "../img/search.png";

export const Nav = () => {
    return (
        <div className="Nav">
            <img className="logo" src={logo} alt=""/>
            <div className='Search'>
                <input type="text" placeholder="Поиск" className="inputBox"/>
                <img src={search} className="search_icon" alt=""/>
            </div>
            <ul className="listA">
                <li>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/">Главная</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/changes">Последние изменения</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/catalog">Каталог услуг</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/reg">Регламенты</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/info">Справочная информация</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/resources">Полезные ресурсы</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/war">Частичная мобилизация</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/db">База знаний ИТ и ИБ</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/contacts">Контакты МФЦ</NavLink>
                </li>
            </ul>
        </div>
    );
};
