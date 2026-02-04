
import React from 'react';
import { Service, FAQItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'descaling',
    title: 'Cast Iron Descaling',
    description: 'Using high-speed flex-shaft technology to remove "tuberculation" and scale, restoring your old pipes to a smooth-wall finish without excavation.',
    icon: '🔧'
  },
  {
    id: 'repiping',
    title: 'Condo Repiping',
    description: 'Full-scale water and waste line repiping specifically designed for multi-unit high-rise environments with minimal resident disruption.',
    icon: '🏢'
  },
  {
    id: 'stack',
    title: 'Stack Replacement',
    description: 'Complete vertical stack replacement using modern materials, resolving recurring leaks in aged Fort Lauderdale buildings.',
    icon: '🏗️'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Will descaling cause my old pipes to leak?",
    answer: "Descaling removes rust and scale, not the pipe wall itself. If a pipe leaks after descaling, it is because the rust was the only thing holding it together. We always perform a video inspection first."
  },
  {
    question: "How long does Condo Stack Replacement take?",
    answer: "For a standard Fort Lauderdale high-rise, we work in 'tiers'. A single stack replacement usually takes 3-5 days, with coordinated water shut-offs to minimize impact."
  },
  {
    question: "Is descaling better than hydro-jetting?",
    answer: "Yes, for cast iron. Hydro-jetting clears clogs, but hard iron scale requires mechanical descaling chains to physically scrape walls clean for a permanent solution."
  },
  {
    question: "What areas do you serve?",
    answer: "We are located at 2100 E Las Olas Blvd and serve all of Fort Lauderdale, including Victoria Park, Harbor Beach, and the Galt Ocean Mile."
  }
];

export const OFFICE_ADDRESS = "2100 E Las Olas Blvd, Fort Lauderdale, FL 33301";
export const PHONE_NUMBER = "(844) 340-6413";
export const PHONE_LINK = "tel:8443406413";
