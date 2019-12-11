import React from "react";
import {Button, Input, Select} from "antd";
import "./styles.scss";

const {Option} = Select;

function Search() {
    return (
        <div>
            <h1>Поиск</h1>
            <div>
                <Select className="mb-10" defaultValue="repository">
                    <Option value="repository">Репозиторий</Option>
                    <Option value="user">Пользователь</Option>
                </Select>
                <div className="search-container">
                    <Input className="search-input" placeholder="Репозиторий/пользователь" />
                    <Button type="dashed" shape="circle" icon="search" />
                </div>
            </div>
        </div>
    )
}

export default Search;