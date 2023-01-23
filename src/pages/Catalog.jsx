import "../App.css";
import React from "react";

export const Catalog = () => {
    return (
        <div className="App">
            <div className="Content">
                <h1 className="name_title">КАТАЛОГ УСЛУГ</h1>
                <div className="task">
                    <h3>Фильтр</h3>
                    <p>
                        Название услуг <input placeholder="Поиск..."/>
                    </p>
                    <div className="selects_filter">
                        <div className="selects_left">
                            <p>
                                Тип услуг
                                <select>
                                    <option value="/">Не выбрано</option>
                                </select>
                            </p>
                            <p>
                                Жизненные ситуации
                                <select>
                                    <option value="/">Не выбрано</option>
                                </select>
                            </p>
                            <p>
                                Аналитик услуг
                                <select>
                                    <option value="/">Не выбрано</option>
                                </select>
                            </p>
                        </div>

                        <div className="selects_right">
                            <p>
                                Ведомство
                                <select>
                                    <option value="/">Не выбрано</option>
                                </select>
                            </p>
                            <p>
                                ТОCП МФЦ
                                <select>
                                    <option value="/">Не выбрано</option>
                                </select>
                            </p>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>

                <table className="table_services">
                    <tr id="tr1">
                        <th width="267px">Название</th>
                        <th width="166px">Ведомство</th>
                        <th width="127px">Куратор услуги</th>
                        <th width="135px">
                            Имеется заявление с автозаполнением в АИС МФЦ?
                        </th>
                        <th width="399px">ТОCП МФЦ</th>
                    </tr>
                    <tr id="tr2">
                        <td>Название документа</td>
                        <td>Название ведомства</td>
                        <td>Имя куратора</td>
                        <td>Да/Нет</td>
                        <td>ТОCП МФЦ</td>
                    </tr>
                    <tr id="tr1">
                        <td>Название документа</td>
                        <td>Название ведомства</td>
                        <td>Имя куратора</td>
                        <td>Да/Нет</td>
                        <td>ТОCП МФЦ</td>
                    </tr>
                </table>
                <footer className="footer">
                    <p>
                        Показывать по:
                        <select name="num" id="">
                            <option value="1">1</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                        </select>
                    </p>
                    <p className="list_a">
                        Пред.
                        <div className="list_m">
                            <a href="/my-app/src/pages">1</a>
                            <a href="/my-app/src/pages">2</a>
                            <a href="/my-app/src/pages">3</a>
                            <a href="/my-app/src/pages">4</a>
                            <a href="/my-app/src/pages">5</a>
                            <a href="/my-app/src/pages">5</a>
                            <a href="/my-app/src/pages">След.</a>
                            <a href="/my-app/src/pages">В конец</a>
                        </div>
                    </p>
                </footer>
            </div>
        </div>
    );
};
