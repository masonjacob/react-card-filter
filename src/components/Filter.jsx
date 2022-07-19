import React, {useEffect} from 'react'

const Filter = ({cards, tags, setFilter, activeFilter, setActiveFilter}) => {

    useEffect(() => {
        if (activeFilter === "All") {
            setFilter(cards);
            return;
        }
        const filteredCards = cards.filter((card) => 
            card.tags.includes(activeFilter)
        );
        setFilter(filteredCards);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeFilter]);

  return (
    <div className='filter-container'>
        <button className={activeFilter==="All" ? "active" : ""} onClick={() => setActiveFilter("All")}>All</button>
        {tags.map((tag) => { return (
             <button key={tags.indexOf(tag)} className={activeFilter===tag ? "active" : ""} onClick={() => setActiveFilter(tag)}>{tag}</button>
        )})}        
    </div>
  )
}

export default Filter;