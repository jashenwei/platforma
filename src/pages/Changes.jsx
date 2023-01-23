import "../App.css";
import React from 'react';

export const Changes = () => {
    return (
        <div className="App">
            <div className="Content">
                <h1 className="name_title">ПОСЛЕДНИЕ ИЗМЕНЕНИЯ</h1>
                <div className="task">
                    <h3>Название документа</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. xplicabo
                        vitae velit quaerat pariatur eum porro voluptates fugit corporis eos
                        similique enim, quasi nulla quam odit amet. Vel, ipsa enim? Lorem
                        ipsum dolor sit, amet consectetur adipisicing elit. Libero magni
                        dignissimos officiis ut nihil nisi quod sed quasi at nobis eligendi
                        nesciunt amet, cupiditate pariatur in possimus. Modi, iste libero!
                    </p>

                    <p>
                        Куратор услуги: <strong> Иванов И.И.</strong> <br/>
                        <br/>
                        Дата изменения: <strong> 01.01.2023</strong>
                    </p>
                </div>
                <div className="hr"/>
                <div className="task">
                    <h3>Название документа</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. xplicabo
                        vitae velit quaerat pariatur eum porro voluptates fugit corporis eos
                        similique enim, quasi nulla quam odit amet. Vel, ipsa enim? Lorem
                        ipsum dolor sit, amet consectetur adipisicing elit. Libero magni
                        dignissimos officiis ut nihil nisi quod sed quasi at nobis eligendi
                        nesciunt amet, cupiditate pariatur in possimus. Modi, iste libero!
                    </p>

                    <p>
                        Куратор услуги: <strong> Иванов И.И.</strong> <br/>
                        <br/>
                        Дата изменения: <strong> 01.01.2023</strong>
                    </p>
                </div>
                <div className="hr"/>
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
