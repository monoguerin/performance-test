/* eslint-disable react/prop-types */
import React from 'react';
import dynamic from 'next/dynamic';
import InView from '../components/InView';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Cards from '../components/Cards';

const Health = dynamic(import('../components/Health'));

const Home = () => (
  <>
    <Header />
    <div className="container">
      <Hero />
      <Cards />
      <InView>
        <Health />
      </InView>
    </div>
  </>
);

export default Home;
