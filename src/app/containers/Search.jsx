import React, {useState} from "react";
import {Button, Input, Select} from "antd";
import "./styles.scss";
import UserSearchResult from "../components/search/UserSearch";

const {Option} = Select;

function Search() {
    let [searchType, setSearchType] = useState('repository');
    let [searchTerm, setSearchTerm] = useState('');
    let [isSearch, setSearchState] = useState(false);

    return (
        <div>
            <h1>SEARCH</h1>
            <div>
                <Select
                    value={searchType}
                    onChange={value => setSearchType(value)}
                    className="mb-10"
                >
                    <Option value="repository">Repositories</Option>
                    <Option value="user">Users</Option>
                </Select>
                <div className="search-container">
                    <Input className="search-input" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder={searchType} />
                    <Button type="dashed" shape="circle" icon="search" onClick={() => setSearchState(true)} />
                </div>
            </div>
            {isSearch &&
                <UserSearchResult login={searchTerm} />
            }
        </div>
    )
}

export default Search;