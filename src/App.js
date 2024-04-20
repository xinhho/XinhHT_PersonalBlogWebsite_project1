import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './pages/HomePage'
import About from './pages/About'
import BlogPost from './pages/BlogPost'
import Inspiration from './pages/Inspiration'

import img1 from './assets/images/ninh-binh-viet-nam.jpg'
import img2 from './assets/images/trung-thu-o-hoi-an-top-banner.jpg'
import img3 from './assets/images/sapa-vietnam-trekking.png'
import img4 from './assets/images/Ha-Long-Bay-Vietnam-guide.png'
import img6 from './assets/images/hon-do-ninh-thuan-6.jpg'
import img7 from './assets/images/khu-du-lich-mang-den-kon-tum-4_05e7354efbf6402c9863b98dae6ae8fb_grande.jpg'
import img8 from './assets/images/kinh-nghiem-du-lich-da-lat-ban-can-luu-lai-1.png'

const data = {
  bestPlaces: [
    {
      postId: 1,
      imageUrl: img1,
      authorName: 'XinhHT',
      dateCreate: '20/04/2024',
      title: 'Best Things To Do in Ninh Binh & Tam Coc (Vietnam)',
      content: 'Hoi An: Vietnam’s most loved travel destination, and home to the charming lantern-lit streets of the old town, which lie nestled along the river bank. The Japanese, Chinese and French influences translate back into the street scene where traditional old wooden and yellow colonial buildings sit side-by-side. Not to mention the baguettes being sold on every street corner- yum! Hoi An is a long-established UNESCO world heritage site and, therefore, has perfectly preserved its history. Here are the top things to do in Hoi An, Vietnam.'
    },
    {
      postId: 2,
      imageUrl: img2,
      authorName: 'XinhHT',
      dateCreate: '20/04/2024',
      title: '14 Things To Do in Hoi An, Vietnam',
      content: 'Hoi An: Vietnam’s most loved travel destination, and home to the charming lantern-lit streets of the old town, which lie nestled along the river bank. The Japanese, Chinese and French influences translate back into the street scene where traditional old wooden and yellow colonial buildings sit side-by-side. Not to mention the baguettes being sold on every street corner- yum! Hoi An is a long-established UNESCO world heritage site and, therefore, has perfectly preserved its history. Here are the top things to do in Hoi An, Vietnam.'
    },
    {
      postId: 3,
      imageUrl: img3,
      authorName: 'XinhHT',
      dateCreate: '20/04/2024',
      title: 'Trekking in Sapa: Balancing on the Borders of the Ricefields',
      content: 'Hoi An: Vietnam’s most loved travel destination, and home to the charming lantern-lit streets of the old town, which lie nestled along the river bank. The Japanese, Chinese and French influences translate back into the street scene where traditional old wooden and yellow colonial buildings sit side-by-side. Not to mention the baguettes being sold on every street corner- yum! Hoi An is a long-established UNESCO world heritage site and, therefore, has perfectly preserved its history. Here are the top things to do in Hoi An, Vietnam.'
    },
    {
      postId: 4,
      imageUrl: img4,
      authorName: 'XinhHT',
      dateCreate: '20/04/2024',
      title: 'Ha Long Bay: How to Visit & Things to do',
      content: 'Hoi An: Vietnam’s most loved travel destination, and home to the charming lantern-lit streets of the old town, which lie nestled along the river bank. The Japanese, Chinese and French influences translate back into the street scene where traditional old wooden and yellow colonial buildings sit side-by-side. Not to mention the baguettes being sold on every street corner- yum! Hoi An is a long-established UNESCO world heritage site and, therefore, has perfectly preserved its history. Here are the top things to do in Hoi An, Vietnam.'
    }
  ],
  allDestination: [
    {
      postId: 5,
      imageUrl: img1,
      authorName: 'XinhHT',
      dateCreate: '20/04/2024',
      title: 'Best Things To Do in Ninh Binh & Tam Coc (Vietnam)',
      content: 'Hoi An: Vietnam’s most loved travel destination, and home to the charming lantern-lit streets of the old town, which lie nestled along the river bank. The Japanese, Chinese and French influences translate back into the street scene where traditional old wooden and yellow colonial buildings sit side-by-side. Not to mention the baguettes being sold on every street corner- yum! Hoi An is a long-established UNESCO world heritage site and, therefore, has perfectly preserved its history. Here are the top things to do in Hoi An, Vietnam.'
    },
    {
      postId: 6,
      imageUrl: img3,
      authorName: 'XinhHT',
      dateCreate: '20/04/2024',
      title: 'Trekking in Sapa: Balancing on the Borders of the Ricefields',
      content: 'Hoi An: Vietnam’s most loved travel destination, and home to the charming lantern-lit streets of the old town, which lie nestled along the river bank. The Japanese, Chinese and French influences translate back into the street scene where traditional old wooden and yellow colonial buildings sit side-by-side. Not to mention the baguettes being sold on every street corner- yum! Hoi An is a long-established UNESCO world heritage site and, therefore, has perfectly preserved its history. Here are the top things to do in Hoi An, Vietnam.'
    },
    {
      postId: 7,
      imageUrl: img4,
      authorName: 'XinhHT',
      dateCreate: '20/04/2024',
      title: 'Ha Long Bay: How to Visit & Things to do',
      content: 'Hoi An: Vietnam’s most loved travel destination, and home to the charming lantern-lit streets of the old town, which lie nestled along the river bank. The Japanese, Chinese and French influences translate back into the street scene where traditional old wooden and yellow colonial buildings sit side-by-side. Not to mention the baguettes being sold on every street corner- yum! Hoi An is a long-established UNESCO world heritage site and, therefore, has perfectly preserved its history. Here are the top things to do in Hoi An, Vietnam.'
    },
    {
      postId: 8,
      imageUrl: img6,
      authorName: 'XinhHT',
      dateCreate: '20/04/2024',
      title: 'Hon Do Ninh Thuan',
      content: 'Hoi An: Vietnam’s most loved travel destination, and home to the charming lantern-lit streets of the old town, which lie nestled along the river bank. The Japanese, Chinese and French influences translate back into the street scene where traditional old wooden and yellow colonial buildings sit side-by-side. Not to mention the baguettes being sold on every street corner- yum! Hoi An is a long-established UNESCO world heritage site and, therefore, has perfectly preserved its history. Here are the top things to do in Hoi An, Vietnam.'
    },
    {
      postId: 9,
      imageUrl: img7,
      authorName: 'XinhHT',
      dateCreate: '20/04/2024',
      title: 'Mang-Den kontum Vietnam',
      content: 'Hoi An: Vietnam’s most loved travel destination, and home to the charming lantern-lit streets of the old town, which lie nestled along the river bank. The Japanese, Chinese and French influences translate back into the street scene where traditional old wooden and yellow colonial buildings sit side-by-side. Not to mention the baguettes being sold on every street corner- yum! Hoi An is a long-established UNESCO world heritage site and, therefore, has perfectly preserved its history. Here are the top things to do in Hoi An, Vietnam.'
    },
    {
      postId: 10,
      imageUrl: img8,
      authorName: 'XinhHT',
      dateCreate: '20/04/2024',
      title: 'Da Lat Vietnam',
      content: 'Hoi An: Vietnam’s most loved travel destination, and home to the charming lantern-lit streets of the old town, which lie nestled along the river bank. The Japanese, Chinese and French influences translate back into the street scene where traditional old wooden and yellow colonial buildings sit side-by-side. Not to mention the baguettes being sold on every street corner- yum! Hoi An is a long-established UNESCO world heritage site and, therefore, has perfectly preserved its history. Here are the top things to do in Hoi An, Vietnam.'
    }
  ],
  unforgettableExperiences: [
    {
      postId: 11,
      imageUrl: img8,
      authorName: 'XinhHT',
      dateCreate: '20/04/2024',
      title: 'Discover Vietnam by Motorbike with Easy Riders',
      content: 'Hoi An: Vietnam’s most loved travel destination, and home to the charming lantern-lit streets of the old town, which lie nestled along the river bank. The Japanese, Chinese and French influences translate back into the street scene where traditional old wooden and yellow colonial buildings sit side-by-side. Not to mention the baguettes being sold on every street corner- yum! Hoi An is a long-established UNESCO world heritage site and, therefore, has perfectly preserved its history. Here are the top things to do in Hoi An, Vietnam.'
    },
    {
      postId: 12,
      imageUrl: img6,
      authorName: 'XinhHT',
      dateCreate: '20/04/2024',
      title: 'Trekking in Sapa: Balancing on the Borders of the Ricefields',
      content: 'Hoi An: Vietnam’s most loved travel destination, and home to the charming lantern-lit streets of the old town, which lie nestled along the river bank. The Japanese, Chinese and French influences translate back into the street scene where traditional old wooden and yellow colonial buildings sit side-by-side. Not to mention the baguettes being sold on every street corner- yum! Hoi An is a long-established UNESCO world heritage site and, therefore, has perfectly preserved its history. Here are the top things to do in Hoi An, Vietnam.'
    },
    {
      postId: 13,
      imageUrl: img7,
      authorName: 'XinhHT',
      dateCreate: '20/04/2024',
      title: '14 Best Things to do in Vietnam in 2024',
      content: 'Hoi An: Vietnam’s most loved travel destination, and home to the charming lantern-lit streets of the old town, which lie nestled along the river bank. The Japanese, Chinese and French influences translate back into the street scene where traditional old wooden and yellow colonial buildings sit side-by-side. Not to mention the baguettes being sold on every street corner- yum! Hoi An is a long-established UNESCO world heritage site and, therefore, has perfectly preserved its history. Here are the top things to do in Hoi An, Vietnam.'
    }
  ]
}


const App = () => {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage data={data} img={data?.bestPlaces[1]}/>} />
          <Route path="/homepage" element={<Homepage data={data} img={data?.bestPlaces[1]}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/blog-post/:id" element={<BlogPost data={data}/>} />
          <Route path="/inspiration" element={<Inspiration />} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
