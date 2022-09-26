import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import useThrottle from '../hooks/useThrottledCallBack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAnglesLeft, faAnglesRight} from "@fortawesome/free-solid-svg-icons";

const StyledResumeTable = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  
  .inputForFilter {
    margin-bottom: 20px;
    font-size: 20px;
    font-family: ${props => props.theme.baseFont};
    min-width: 300px;
  }
  table{
    font-family: ${props => props.theme.baseFont};
    font-size: 20px;
    line-height: 40px;
    text-align: center;
    border-collapse: collapse;
    width: 70vw;
  }
  //td{
  //  padding: 10px;
  //}
  .headerCell {
    font-size: 20px;
    font-family: ${props => props.theme.baseFont};
    margin: 20px;
    font-weight: bold;
  }
  
  .arrow {
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    margin: 10px;
    &.up {
      transform: rotate(-135deg);
    }
    &.down {
      transform: rotate(45deg);
    }
  }
  tr:hover{
    cursor: pointer;
    background-color: #e2e4f0;
  }
  tr:nth-child(odd) {
    background-color: #bcc3e2;
  }
  tr:nth-child(odd):hover {
    background-color: #b3b7c9;
  }

  .btnTablePagination {
    min-width: 100px;
    border: none;
    background-color: #bcc3e2;
    cursor: pointer;
    font-family: ${props => props.theme.baseFont};
    font-size: 18px;
    font-weight: bold;
  }
  
`

const ResumeTable = ({columnsFromProps, tableDataFromProps, isPaginable, pageSize=6, rowClickHandler}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [filterString, setFilterString] = useState(searchParams.filterString || "");
    const [page, setPage] = useState(searchParams.page || 0);
    const [sortBy, setSortBy] = useState(searchParams.sortBy || columnsFromProps[0].dataKey);
    const [sortDirection, setSortDirection] = useState(searchParams.sortDirection || 1);
    const [filteredData, setFilteredData] = useState([]);
    const [sortedData, setSortedData] = useState([]);
    const [tableData, setTableData] = useState([]);

    const handleSortClick = (sortKey) => () => {
        if (sortKey === sortBy) {
            setSortDirection(-1 * sortDirection);
        } else {
            setSortBy(sortKey);
            setSortDirection(1);
        }
        setPage(0);
    }

    const filterTable= (data, filterString) => {
        if (!filterString) return [...data];
        return data.filter(entry => {
            let passed = false;
            columnsFromProps.map(columnConfig => {
                if (entry[columnConfig.dataKey].toLowerCase().includes(filterString)) {
                    passed = true;
                }
            })
            return passed
        });
    };

    const sortTable = (data, sortBy, sortDirection) => {
        return data.sort((a, b) => {
            if (a[sortBy] && b[sortBy]) return a[sortBy].localeCompare(b[sortBy]) * sortDirection;
            return 0
        });
    };

    const paginateTable = (data, page) => {
        return data.slice(page * pageSize, (page + 1)*pageSize);
    };

    const updateTable = (tableDataFromProps, sortBy, sortDirection, filterString, page) => {
        setSearchParams({sortBy, sortDirection, filterString, page});

            const filtered = filterTable(tableDataFromProps, filterString);
            setFilteredData(filtered);

            const sorted = sortTable(filtered, sortBy, sortDirection);
            setSortedData(sorted);

            const paginated = paginateTable(sorted, page);
            setTableData(paginated);
    };

    const throttledUpdateTable = useThrottle(updateTable, 500);

    useEffect(() => {
        throttledUpdateTable(tableDataFromProps, sortBy, sortDirection, filterString, page);
    }, [filterString, sortBy, sortDirection, page, tableDataFromProps]);

    const getTableBody = (tableData) => {
        if (tableData && tableData.length) return tableData.map(entry => (
                <tr onClick={() => {if (rowClickHandler) rowClickHandler(entry)}}>
                    {columnsFromProps.map(column => {
                        if (column.cellRenderer) return <td> {column.cellRenderer(entry[column.dataKey], entry)}</td>;
                        return <td>
                            {entry[column.dataKey]}
                        </td>
                    })}
                </tr>
            )
        )
        return null
    }

    return (
        <StyledResumeTable>
            <input className={'inputForFilter'} type={"text"} placeholder={'Поиск...'} onChange={(e) => {setFilterString(e.target.value)}} value={filterString}/>
            <table>
                <tbody>
                <tr>
                    {columnsFromProps.map(column => {
                        return <td onClick={handleSortClick(column.dataKey)}>
                            <div className={"headerCell"}>
                                {column.name}
                                {sortBy === column.dataKey &&
                                    <div className={`arrow ${sortDirection === 1 ? "up" : "down"}`}></div>
                                }
                            </div>
                        </td>
                    })}
                </tr>
                {getTableBody(tableData)}
                </tbody>

                {isPaginable &&
                    <tfoot>
                    <tr>
                        <td>
                            {(page > 0) && <button className={"btnTablePagination"} type={"button"} onClick={() => {setPage(page-1)}}> <FontAwesomeIcon icon={faAnglesLeft}/> Назад</button>}
                        </td>
                        <td>
                            - {page} -
                        </td>
                        <td>
                            {((page + 1)*pageSize < filteredData.length) && <button  className={"btnTablePagination"} type={"button"} onClick={() => {setPage(page+1)}}>Следующая <FontAwesomeIcon icon={faAnglesRight}/></button>}
                        </td>
                    </tr>
                    </tfoot>
                }
            </table>
        </StyledResumeTable>
    );
};


export default ResumeTable;