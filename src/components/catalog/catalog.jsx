 
import CatalogPanel from './catalog-panel/catalog-panel'; 
import Pagination from './pagination/pagination';
import styles from './catalog.module.scss';
import FilterContainer from './filter/filter-container'
import React , { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import Properties from './properties/properties';

const Catalog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);
  
    useEffect(() => {
      const fetchPosts = async () => {
        setLoading(true);
        const res = await axios.get('https://georgeokarskyi.github.io/users/properties.json');
        setPosts(res.data);
        setTimeout(() => {
        setLoading(false);
        }, 2000)
      };
      fetchPosts();
    }, []);
  
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

 


    return (
        <div className="container">
            <div className={styles.catalog_container}>
                <div className={styles.filter}>
                    <FilterContainer ></FilterContainer>
                </div>
                <div className={styles.right}>
                    <CatalogPanel loading={loading} length={`${posts.length}`}></CatalogPanel>
                    <Properties properties={currentPosts} loading={loading} />
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={posts.length}
                        paginate={paginate}
                        currentPage={currentPage}
                        loading={loading}
                    />
                </div>
            </div>
        </div>
    )
}

export default Catalog;
