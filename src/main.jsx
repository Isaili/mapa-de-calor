import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Heatmap from './assets/Heatmap.jsx'; 
import HeatmapTracker from './assets/HeatmapTracker.jsx';
import Header from '../componets/Header.jsx';
import Footer from '../componets/footer.jsx';
import HeatmapCounts from '../componets/HeatmapCounts.jsx';


const rootElement = document.getElementById('root');


createRoot(rootElement).render(
  <StrictMode>
    <Header />
    <HeatmapTracker /> 
    <Heatmap />   
    <HeatmapCounts />     
    <Footer /> 
    
  </StrictMode>,
);