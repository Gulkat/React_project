import React from 'react';
import styled from 'styled-components';

const StyledResumeTable = styled.div`
  
    `

const ResumeTable = () => {

    return (
        <StyledResumeTable>
            {/*<input type={"text"} onChange={(e) => {setFilterString(e.target.value)}} value={filterString}/>*/}
            {/*<div className={"header"}>Initial table</div>*/}
            {/*<table>*/}
            {/*    <tr>*/}
            {/*        {columnsFromProps.map(column => {*/}
            {/*            return <td onClick={handleSortClick(column.dataKey)}>*/}
            {/*                <div className={"headerCell"}>*/}
            {/*                    {column.name}*/}
            {/*                    {sortBy === column.dataKey &&*/}
            {/*                        <div className={`arrow ${sortDirection === 1 ? "up" : "down"}`}></div>*/}
            {/*                    }*/}
            {/*                </div>*/}
            {/*            </td>*/}
            {/*        })}*/}
            {/*    </tr>*/}
            {/*    {getTableBody(tableDataFromProps, "initial")}*/}
            {/*</table>*/}

            {/*<div className={"header"}>Filtered table</div>*/}
            {/*<table>*/}
            {/*    <tr>*/}
            {/*        {columnsFromProps.map(column => {*/}
            {/*            return <td onClick={handleSortClick(column.dataKey)}>*/}
            {/*                <div className={"headerCell"}>*/}
            {/*                    {column.name}*/}
            {/*                    {sortBy === column.dataKey &&*/}
            {/*                        <div className={`arrow ${sortDirection === 1 ? "up" : "down"}`}></div>*/}
            {/*                    }*/}
            {/*                </div>*/}
            {/*            </td>*/}
            {/*        })}*/}
            {/*    </tr>*/}
            {/*    {getTableBody(filteredData, "filtered")}*/}
            {/*</table>*/}

            {/*<div className={"header"}>Sorted data</div>*/}
            {/*<table>*/}
            {/*    <tr>*/}
            {/*        {columnsFromProps.map(column => {*/}
            {/*            return <td onClick={handleSortClick(column.dataKey)}>*/}
            {/*                <div className={"headerCell"}>*/}
            {/*                    {column.name}*/}
            {/*                    {sortBy === column.dataKey &&*/}
            {/*                        <div className={`arrow ${sortDirection === 1 ? "up" : "down"}`}></div>*/}
            {/*                    }*/}
            {/*                </div>*/}
            {/*            </td>*/}
            {/*        })}*/}
            {/*    </tr>*/}
            {/*    {getTableBody(sortedData, "sorted")}*/}
            {/*</table>*/}

            {/*<div className={"header"}>Paginated table (final)</div>*/}
            {/*<table>*/}
            {/*    <tr>*/}
            {/*        {columnsFromProps.map(column => {*/}
            {/*            return <td onClick={handleSortClick(column.dataKey)}>*/}
            {/*                <div className={"headerCell"}>*/}
            {/*                    {column.name}*/}
            {/*                    {sortBy === column.dataKey &&*/}
            {/*                        <div className={`arrow ${sortDirection === 1 ? "up" : "down"}`}></div>*/}
            {/*                    }*/}
            {/*                </div>*/}
            {/*            </td>*/}
            {/*        })}*/}
            {/*    </tr>*/}
            {/*    {getTableBody(tableData, "paginated")}*/}
            {/*    {isPaginable &&*/}
            {/*        <tfoot>*/}
            {/*        <tr>*/}
            {/*            <td>*/}
            {/*                {(page > 0) && <button type={"button"} onClick={() => {setPage(page-1)}}>Prev page</button>}*/}
            {/*            </td>*/}
            {/*            <td>*/}
            {/*                {page}*/}
            {/*            </td>*/}
            {/*            <td>*/}
            {/*                {((page + 1)*pageSize < filteredData.length) && <button type={"button"} onClick={() => {setPage(page+1)}}>Next page</button>}*/}
            {/*            </td>*/}
            {/*        </tr>*/}
            {/*        </tfoot>*/}
            {/*    }*/}
            {/*</table>*/}

        </StyledResumeTable>
    )
}


export default ResumeTable