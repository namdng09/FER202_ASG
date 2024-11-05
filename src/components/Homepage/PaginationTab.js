// import React, { useContext } from 'react';
// import AppContext from '../provider/Context';

// function Pagination() {
//     const { page, setPage, meta, limit } = useContext(AppContext);

//     // Tính tổng số trang dựa trên `meta.total` và `limit`
//     const totalPages = Math.ceil(meta.total / limit);

//     const handlePrevPage = () => {
//         if (page > 1) {
//             setPage(page - 1);
//         }
//     };

//     const handleNextPage = () => {
//         if (page < totalPages) {
//             setPage(page + 1);
//         }
//     };

//     return (
//         <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
//             <button 
//                 onClick={handlePrevPage} 
//                 disabled={page === 1}
//                 style={{ marginRight: '10px', padding: '5px 15px' }}
//             >
//                 Previous
//             </button>
//             <span>Page {page} of {totalPages}</span>
//             <button 
//                 onClick={handleNextPage} 
//                 disabled={page === totalPages}
//                 style={{ marginLeft: '10px', padding: '5px 15px' }}
//             >
//                 Next
//             </button>
//         </div>
//     );
// }

// export default Pagination;


import React, { useContext } from 'react';
import AppContext from '../provider/Context';

function Pagination() {
    const { page, setPage, meta, limit } = useContext(AppContext);

    // Calculate total number of pages based on `meta.total` and `limit`
    const totalPages = Math.ceil(meta.total / limit);

    const handlePageClick = (pageNum) => {
        setPage(pageNum);
    };

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
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <button 
                    onClick={handlePrevPage} 
                    disabled={page === 1}
                    className="pagination-button"
                >
                    Previous
                </button>
                
                {/* Render page numbers */}
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNum) => (
                    <button 
                        key={pageNum} 
                        onClick={() => handlePageClick(pageNum)} 
                        className={`pagination-number ${page === pageNum ? 'active' : ''}`}
                    >
                        {pageNum}
                    </button>
                ))}

                <button 
                    onClick={handleNextPage} 
                    disabled={page === totalPages}
                    className="pagination-button"
                >
                    Next
                </button>
            </div>
            <span style={{ marginTop: '10px' }}>Page {page} of {totalPages}</span>
        </div>
    );
}

export default Pagination;
