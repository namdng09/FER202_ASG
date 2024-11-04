import React, { useContext } from 'react';
import AppContext from '../provider/Context';

function Pagination() {
    const { page, setPage, meta, limit } = useContext(AppContext);

    // Tính tổng số trang dựa trên `meta.total` và `limit`
    const totalPages = Math.ceil(meta.total / limit);

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const handleNextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <button 
                onClick={handlePrevPage} 
                disabled={page === 1}
                style={{ marginRight: '10px', padding: '5px 15px' }}
            >
                Previous
            </button>
            <span>Page {page} of {totalPages}</span>
            <button 
                onClick={handleNextPage} 
                disabled={page === totalPages}
                style={{ marginLeft: '10px', padding: '5px 15px' }}
            >
                Next
            </button>
        </div>
    );
}

export default Pagination;
