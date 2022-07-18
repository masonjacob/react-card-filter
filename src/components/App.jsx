import { useEffect, useState } from 'react';
import '../assets/css/App.css';
import Card from './Card';
import Filter from './Filter'
import {motion, AnimatePresence} from 'framer-motion'

function App() {

  const [cards, setCards] = useState([]);
  const [filter, setFilter] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [tags,setTags] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  /*useEffect(() => {
    console.log(activeFilter);
  }, [activeFilter]);*/

  const getTags = () => {
    let tags = [];
    cards.map((card) => {
      if (!tags.includes(card.tags)) {
        tags.append(card.tags);
      }
    });
    console.log(tags);
    return tags;
  }

  const fetchData = async () => {
    const data = await fetch("http://ec2-3-89-109-4.compute-1.amazonaws.com/get");
    const cards = await data.json();
    setCards(cards);
    setFilter((cards));
    setTags(getTags());
  }
 
  return (
    <div className="App">
      <Filter
      cards={cards}
      setFilter={setFilter}
      activeFilter={activeFilter}
      setActiveFilter={setActiveFilter}
      />
      <motion.div layout className="Cards">
        <AnimatePresence>
        {filter.map((card) => {
          return <Card key={card.id} card={card}/>;
        })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
