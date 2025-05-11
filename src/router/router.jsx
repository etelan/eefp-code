import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../homepage/Homepage';
import DefaultPage from '../defaultPage/DefaultPage';import OurDemands from '../ourdemands/OurDemands';
import TheProblem from '../theproblem/TheProblem';
import TheJourneySoFar from '../thejourneysofar/TheJourneySoFar';
import News from '../news/News';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/#/our-demands" element={<OurDemands />} />
      <Route path="/#/the-problem" element={<TheProblem />} />
      <Route path="/#/the-journey-so-far" element={<TheJourneySoFar />} />
      <Route path="/#/news" element={<News />} />
    </Routes>
  );
}