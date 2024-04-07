import React, { useEffect,useState } from "react"; 
import './Slider.css';
import MenuCards from '../../../containers/MenuCards/MenuCards'


  const Slider = () => {

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    const carousel = document.querySelector('.carousel');
    const arrowBtns = document.querySelectorAll('.wrapper i');
    const wrapper = document.querySelector('.wrapper');

    const firstCard = carousel.querySelector('.card');
    const firstCardWidth = firstCard.offsetWidth;

    const dragStart = (e) => {
      setIsDragging(true);
      carousel.classList.add('dragging');
      setStartX(e.pageX);
      setStartScrollLeft(carousel.scrollLeft);
    };

    const dragging = (e) => {
      if (!isDragging) return;

      const newScrollLeft = startScrollLeft - (e.pageX - startX);

      if (
        newScrollLeft <= 0 ||
        newScrollLeft >= carousel.scrollWidth - carousel.offsetWidth
      ) {
        setIsDragging(false);
        return;
      }

      carousel.scrollLeft = newScrollLeft;
    };

    const dragStop = () => {
      setIsDragging(false);
      carousel.classList.remove('dragging');
    };

    const autoPlay = () => {
      if (window.innerWidth < 800) return;

      const totalCardWidth = carousel.scrollWidth;
      const maxScrollLeft = totalCardWidth - carousel.offsetWidth;

      if (carousel.scrollLeft >= maxScrollLeft) return;

      setTimeoutId(
        setTimeout(() => {
          carousel.scrollLeft += firstCardWidth;
        }, 2500)
      );
    };

    carousel.addEventListener('mousedown', dragStart);
    carousel.addEventListener('mousemove', dragging);
    document.addEventListener('mouseup', dragStop);
    wrapper.addEventListener('mouseenter', () => clearTimeout(timeoutId));
    wrapper.addEventListener('mouseleave', autoPlay);

    arrowBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        carousel.scrollLeft +=
          btn.id === 'left' ? -firstCardWidth : firstCardWidth;
      });
    });

    return () => {
      carousel.removeEventListener('mousedown', dragStart);
      carousel.removeEventListener('mousemove', dragging);
      document.removeEventListener('mouseup', dragStop);
      wrapper.removeEventListener('mouseenter', () => clearTimeout(timeoutId));
      wrapper.removeEventListener('mouseleave', autoPlay);
      arrowBtns.forEach((btn) => {
        btn.removeEventListener('click', () => {
          carousel.scrollLeft +=
            btn.id === 'left' ? -firstCardWidth : firstCardWidth;
        });
      });
    };
  }, [isDragging, startScrollLeft, startX, timeoutId]);


  const Menus = [
    {
      title: "Budget", 
      image: "https://media.geeksforgeeks.org/wp-content/uploads/20240213150115/ppp.png",
      description: "1 Ball of kenkey, Shito & Pepper, Fish."
    },
    {
      title: "One Man", 
      image: "https://media.geeksforgeeks.org/wp-content/uploads/20240213150115/ppp.png",
      description: "1 Ball of kenkey, Shito & Pepper, Fish, Fried Eggs."
    },
    {
      title: "Hungry", 
      image: "https://media.geeksforgeeks.org/wp-content/uploads/20240213150115/ppp.png",
      description: "2 Ball of kenkey, Shito & Pepper."
    },
    {
      title: "Satisfactory", 
      image: "https://media.geeksforgeeks.org/wp-content/uploads/20240213150115/ppp.png",
      description: "2 Ball of kenkey, Shito & Pepper, 2 Fish, Fried Eggs."
    },
    {
      title: "Family Pack", 
      image: "https://media.geeksforgeeks.org/wp-content/uploads/20240213150115/ppp.png",
      description: "2 Ball of kenkey, Shito & Pepper, 2 Fish, Fried Eggs, Sausage."
    }
  ]


  return (
   
    <div className="slider">
        <h1 className="header">Our <span>Special Kenkey</span> Menu</h1>
      <div className="wrapper">
          <i id="left" className="fa-solid fas fa-angle-left"></i>
          <ul className="carousel">
          {
            Menus.map((menu, index)=>{
            return( <MenuCards key={index}  title={menu.title} image={menu.image} description={menu.description} />)
            })
          }
            
          </ul>
          <i id="right" className="fa-solid fas fa-angle-right"></i>
      </div>

      <a href="#">view our menu</a>
    </div>
  );
};

export default Slider