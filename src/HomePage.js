import React from 'react';
import { Container } from 'react-bootstrap';

const HomePage = () => {
  return (
    <Container>
 <div className="home-page">
      <h1 className="title">Empowering Wellness: Integrating Technology for Enhanced Communication and Care</h1>
      <div className="content">
        <p>Welcome to our innovative platform dedicated to enhancing communication and care for individuals facing mental challenges. We leverage cutting-edge technology to provide comprehensive support tailored to individual needs.</p>
        
        {/* Statistics Section */}
        <div className="statistics">
          <h2>Statistics on Mental Health Challenges:</h2>
          <ul>
            <li>Approximately 1 in 5 adults in the United States experience mental illness each year.</li>
            <li>Depression is the leading cause of disability worldwide, affecting over 264 million people.</li>
            <li>Only 44% of adults with diagnosable mental health problems receive treatment.</li>
            <li>Children and adolescents are also affected, with 1 in 6 experiencing a mental health disorder.</li>
            <li>Mental health conditions often co-occur with other chronic diseases, exacerbating overall health outcomes.</li>
          </ul>
        </div>

        <img src='/healingwellbeing.jpg' width={1000}></img>
        
        {/* Features Section */}
        <div className="features">
          <h2>Our Features:</h2>
          <div className="feature">
            <h3>Motion Detection</h3>
            <p>Our motion detection system tracks movement patterns, offering insights into daily activities and routines. By understanding mobility, we can tailor assistance and interventions accordingly.</p>
          </div>
          <img src='/pose.png' width={1000}></img>

          <div className="feature">
            <h3>Sleep Cycle Monitoring</h3>
            <p>Monitoring sleep cycles helps identify rest patterns and disruptions, enabling personalized strategies to promote better sleep hygiene and overall well-being.</p>
          </div>
          <img src='/sleep.jpg' width={600}></img>
          <div className="feature">
            <h3>Food Consumption and Physical Activity Tracking</h3>
            <p>Tracking food consumption and physical activity levels enables us to promote healthy habits. Customized plans and reminders encourage nutritious choices and active lifestyles.</p>
          </div>
          <img src='/activity.png' width={400}></img>
          <div className="feature">
            <h3>Stress Detection Through Voice Analysis</h3>
            <p>Our voice analysis technology detects stress indicators, allowing timely support and coping strategies. Recognizing emotional cues fosters a supportive environment for mental well-being.</p>
          </div>
          <img src='/voice.png' width={300}></img>
          <div className="feature">
            <h3>Temperature Sensor for Illness Detection</h3>
            <p>Detecting changes in body temperature alerts to potential illness, enabling early intervention and medical attention. Proactive measures ensure prompt care and recovery.</p>
          </div>
          
          <div className="feature">
            <h3>Heart Rate, EKG, ECG Monitoring</h3>
            <p>Continuous monitoring provides valuable health insights, allowing early detection of abnormalities for timely medical intervention and support.</p>
          </div>
        </div>

        <img src='/heart.png' width={400}></img>
        
        <div className="call-to-action">
          <p>Join us in revolutionizing care and communication for individuals facing mental challenges. Together, we can empower wellness and enhance quality of life.</p>
        </div>
        
        {/* Insert image components here */}
        
      </div>
    </div>  
    </Container>
  );
};

export default HomePage;
