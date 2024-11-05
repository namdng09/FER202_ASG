import React, { useContext } from 'react'
import AppContext from '../provider/Context'
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function CategoriesList() {
    const { categories, handleSelectCategory } = useContext(AppContext);
    return (
        <Container>
            <h4>Category</h4>
            <ul style={{ listStyleType: "none" }}>
                <li><Link onClick={() => handleSelectCategory(null)} style={{textDecoration: "none", color: "black", textTransform: "capitalize"}}>All</Link></li>
                {categories.map(category => (
                    <li><Link style={{ textDecoration: "none", color: "black", textTransform: "capitalize" }} onClick={() => handleSelectCategory(category.id)}>{category.name}</Link></li>
                ))}
            </ul>
        </Container>
    )
}

export default CategoriesList