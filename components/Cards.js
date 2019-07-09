/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import Card from './Card';

const CATEGORIES = [
  [
    {
      title: 'Technology',
      image: '//i5.walmartimages.com/dfw/4ff9c6c9-1198/k2-_8161d8de-8313-4c95-b356-8d28bad54a5d.v1.jpg?odnWidth=282&odnHeight=282&odnBg=ffffff',
    },
    {
      title: 'Sports',
      image: '//i5.walmartimages.com/dfw/4ff9c6c9-7be4/k2-_c0e0819e-3040-4f83-8ffa-266eb5ced8f8.v1.jpg?odnWidth=282&odnHeight=282&odnBg=ffffff',
    },
    {
      title: 'Home',
      image: '//i5.walmartimages.com/dfw/4ff9c6c9-a1f7/k2-_84b1e433-2084-4d94-82ff-7cf12f8bdd96.v1.jpg?odnWidth=282&odnHeight=282&odnBg=ffffff',
    },
    {
      title: 'Toys',
      image: '//i5.walmartimages.com/dfw/4ff9c6c9-59c4/k2-_197173a3-db3b-4d5e-b26b-02b38575bd64.v1.jpg?odnWidth=282&odnHeight=282&odnBg=ffffff',
    },
    {
      title: 'Video Games',
      image: '//i5.walmartimages.com/dfw/4ff9c6c9-8e39/k2-_bfd20c73-ba66-4e88-b179-962a10b8056b.v1.jpg?odnWidth=282&odnHeight=282&odnBg=ffffff',
    },
  ],
  [
    {
      title: 'Outdoor',
      image: '//i5.walmartimages.com/dfw/4ff9c6c9-2e87/k2-_fb602490-cd52-485f-ab58-47ed51382640.v1.jpg?odnWidth=282&odnHeight=282&odnBg=ffffff',
    },
    {
      title: 'Personal Care',
      image: '//i5.walmartimages.com/dfw/4ff9c6c9-512b/k2-_45bdf9e3-83ed-48c4-8ed0-747d578603a6.v1.jpg?odnWidth=282&odnHeight=282&odnBg=ffffff',
    },
    {
      title: 'Home Improvement',
      image: '//i5.walmartimages.com/dfw/4ff9c6c9-51ae/k2-_51cfe7f1-295c-4745-867f-d253c3aa9cc3.v1.jpg?odnWidth=282&odnHeight=282&odnBg=ffffff',
    },
    {
      title: 'Auto and Tires',
      image: '//i5.walmartimages.com/dfw/4ff9c6c9-cb1a/k2-_67979f73-5773-4ce7-9270-bf3fd440f2a2.v1.jpg?odnWidth=282&odnHeight=282&odnBg=ffffff',
    },
    {
      title: 'Food',
      image: '//i5.walmartimages.com/dfw/4ff9c6c9-f459/k2-_f353acb5-8d24-4f61-8e7f-9ca4d68895cc.v1.jpg?odnWidth=282&odnHeight=282&odnBg=ffffff',
    },
  ],
];

const Row = ({ row }) => row.map(cardProps => (
  <div className="col-sm" key={cardProps.title}>
    <Card {...cardProps} />
  </div>
));

const Cards = () => (
  <>
    <h2 className="text-center">Shop by Categories</h2>
    {CATEGORIES.map((row, index) => (
      <div className="row" key={index}>
        <Row row={row} />
      </div>
    ))}
  </>
);

export default Cards;
