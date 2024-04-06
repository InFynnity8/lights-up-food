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

  return (
    <div className="slider">
        <div className="wrapper">
        <i id="left" className="fa-solid fas fa-angle-left"></i>
        <ul className="carousel">
          <li className="card">
            <div className="img"><img src="https://media.geeksforgeeks.org/wp-content/uploads/20240213150115/ppp.png" alt="" draggable="false" /></div>
            <h2 style={{ color: 'green', fontWeight: 'bold' }}>GeeksforGeeks</h2>
            <span>Coding Platform</span>
          </li>
          <li className="card">
            <div className="img"><img src="https://media.geeksforgeeks.org/wp-content/uploads/20240213150115/ppp.png" alt="" draggable="false" /></div>
            <h2 style={{ color: 'green', fontWeight: 'bold' }}>GeeksforGeeks</h2>
            <span>Coding Platform</span>
          </li>
          <li className="card">
            <div className="img"><img src="https://media.geeksforgeeks.org/wp-content/uploads/20240213150115/ppp.png" alt="" draggable="false" /></div>
            <h2 style={{ color: 'green', fontWeight: 'bold' }}>GeeksforGeeks</h2>
            <span>Coding Platform</span>
          </li>
          <li className="card">
            <div className="img"><img src="https://media.geeksforgeeks.org/wp-content/uploads/20240213150115/ppp.png" alt="" draggable="false" /></div>
            <h2 style={{ color: 'green', fontWeight: 'bold' }}>GeeksforGeeks</h2>
            <span>Coding Platform</span>
          </li>
          <li className="card">
            <div className="img"><img src="https://media.geeksforgeeks.org/wp-content/uploads/20240213150115/ppp.png" alt="" draggable="false" /></div>
            <h2 style={{ color: 'green', fontWeight: 'bold' }}>GeeksforGeeks</h2>
            <span>Coding Platform</span>
          </li>
          <li className="card">
            <div className="img"><img src="https://media.geeksforgeeks.org/wp-content/uploads/20240213150115/ppp.png" alt="" draggable="false" /></div>
            <h2 style={{ color: 'green', fontWeight: 'bold' }}>GeeksforGeeks</h2>
            <span>Coding Platform</span>
          </li>
        </ul>
        <i id="right" className="fa-solid fas fa-angle-right"></i>
    </div>
    </div>
  );
};

export default Slider