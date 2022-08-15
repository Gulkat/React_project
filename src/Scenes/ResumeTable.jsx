import React from 'react';
import styled from 'styled-components';
import {useSearchParams} from 'react-router-dom';
import useThrottle from '../hooks/useThrottledCallBack';

const StyledResumeTable = styled.div`

  .arrow {
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;

    &.up {
      transform: rotate(-135deg);
      -webkit-transform: rotate(-135deg);
    }
    &.down {
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
    }
  }
    `

const ResumeTable = ({columnsFromProps, tableDataFromProps, isPaginable, pageSize=6}) => {
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
                if (entry[columnConfig.dataKey].includes(filterString)) passed = true;
            })
            return passed
        });
    };

    const sortTable = (data, sortBy, sortDirection) => {
        return data.sort((a, b) => {
            return a[sortBy].localeCompare(b[sortBy]) * sortDirection
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

    const throttledUpdateTable = useThrottle(updateTable, 1000);

    useEffect(() => {
        throttledUpdateTable(tableDataFromProps, sortBy, sortDirection, filterString, page);
    }, [filterString, sortBy, sortDirection, page, tableDataFromProps]);

    const getTableBody = (tableData, name) => {
        if (tableData && tableData.length) return  tableData.map(entry => (
                <tr>
                    {columnsFromProps.map(column => {
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
            <input type={"text"} onChange={(e) => {setFilterString(e.target.value)}} value={filterString}/>
            <div className={"header"}>Initial table</div>
            <table>
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
                {getTableBody(tableDataFromProps, "initial")}
            </table>

            <div className={"header"}>Filtered table</div>
            <table>
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
                {getTableBody(filteredData, "filtered")}
            </table>

            <div className={"header"}>Sorted data</div>
            <table>
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
                {getTableBody(sortedData, "sorted")}
            </table>

            <div className={"header"}>Paginated table (final)</div>
            <table>
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
                {getTableBody(tableData, "paginated")}
                {isPaginable &&
                    <tfoot>
                    <tr>
                        <td>
                            {(page > 0) && <button type={"button"} onClick={() => {setPage(page-1)}}>Prev page</button>}
                        </td>
                        <td>
                            {page}
                        </td>
                        <td>
                            {((page + 1)*pageSize < filteredData.length) && <button type={"button"} onClick={() => {setPage(page+1)}}>Next page</button>}
                        </td>
                    </tr>
                    </tfoot>
                }
            </table>

        </StyledResumeTable>
    )
}


export default ResumeTable