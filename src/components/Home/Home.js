import React, { useState } from 'react';
import Banner from '../../components/Banner/Banner';
import Content from '../../components/Content/Content';


const Home = () => {
    const [query, setQuery] = useState("");
    return (
        <div>
    
      <Banner setQuery={setQuery}></Banner>
      <Content query={query} setQuery={setQuery}></Content>
            
        </div>
    );
};

export default Home;