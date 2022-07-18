import React, {useEffect} from 'react'

const Filter = ({cards, setFilter, activeFilter, setActiveFilter}) => {

    useEffect(() => {
        if (activeFilter === "all") {
            setFilter(cards);
            return;
        }
        const filteredCards = cards.filter((card) => 
            card.tags.includes(activeFilter)
        );
        setFilter(filteredCards);
    }, [activeFilter])
  return (
    <div className='filter-container'>
        <button className={activeFilter==="all" ? "active" : ""} onClick={() => setActiveFilter("all")}>All</button>
        <button className={activeFilter==="engineering" ? "active" : ""} onClick={() => setActiveFilter("engineering")}>Engineering</button>
        <button className={activeFilter==="programming" ? "active" : ""} onClick={() => setActiveFilter("programming")}>Programming</button>
    </div>
  )
}

export default Filter