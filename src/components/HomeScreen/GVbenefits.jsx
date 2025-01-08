import React from 'react'
import '../HomeScreen.scss';
import CTAButton from '../CTAButton/CTAButton';
import Slider3 from "../Slider/Slider3"
import { BiSolidQuoteAltLeft } from 'react-icons/bi';

const GVbenefits = ({ handldeLearMore }) => {

  const benefits = [
    {
      id: '#one',
      icon: <BiSolidQuoteAltLeft color="#f89726" size="3em" />,
      title: 'Worldwide business reach',
      description: 'Become a successful global brand real fast. Grow your customer base with our widespread courier network spanning 220 countries & territories.',
    },
    {
      id: '#two',
      icon: <BiSolidQuoteAltLeft color="#f89726" size="3em" />,
      title: 'Shipment security cover',
      description: 'Safeguard your shipments against in-transit risks. Claim upto INR 5000* in an unlikely event of damage or loss on the way.',
    },
    {
      id: '#three',
      icon: <BiSolidQuoteAltLeft color="#f89726" size="3em" />,
      title: 'Dedicated account manager',
      description: 'Leave your worries and concerns to our experienced cross-border experts. Get prioritised support & quick resolution.',
    },
    {
      id: '#four',
      icon: <BiSolidQuoteAltLeft color="#f89726" size="3em" />,
      title: 'Hassle-free customs clearance',
      description: 'With transparent billing & tax compliance, we ensure you always export your shipments effortlessly. Zero paperwork hassles.',
    },
    {
      id: '#five',
      icon: <BiSolidQuoteAltLeft color="#f89726" size="3em" />,
      title: 'Speedy international delivery',
      description: 'Your orders are processed through automated workflows, helping you deliver your international orders more efficiently.',
    },
    {
      id: '#six',
      icon: <BiSolidQuoteAltLeft color="#f89726" size="3em" />,
      title: 'Real-time updates',
      description: 'Get closer to your customers wherever they are. Keep them informed and assured at every step through Email & WhatsApp.',
    },
  ];
  return (
    <section className="global-vypar-benefits">
      <h2>Benefits of using global Vyapar!</h2>
      <Slider3 slides={benefits} />
      <CTAButton CTA={"Learn more"} onClick={handldeLearMore} backgroundColor={"#f89726"} IconBackgroundColor={"white"} IconColor={"#f89726"} />
    </section>
  )
}

export default GVbenefits