import React from 'react';

const FacebookStory = () => {
  return (
    <section style={{ padding: '2rem', background: '#f9f9f9', borderRadius: '8px', margin: '2rem 0' }}>
      <h2>Hey everyone, I want to say something...</h2>
      <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
        The evolution of social networks shows that copying and improving ideas is part of innovation. Without it, we wouldn’t have Facebook today. Every great product stands on the shoulders of those that came before.
      </p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
        <svg width="500" height="100">
          <g>
            <rect x="10" y="30" width="100" height="40" fill="#e0e0e0" rx="8" />
            <text x="60" y="55" textAnchor="middle" fontSize="16">SixDegrees</text>
            <rect x="130" y="30" width="100" height="40" fill="#d0d0ff" rx="8" />
            <text x="180" y="55" textAnchor="middle" fontSize="16">Friendster</text>
            <rect x="250" y="30" width="100" height="40" fill="#ffd0d0" rx="8" />
            <text x="300" y="55" textAnchor="middle" fontSize="16">Myspace</text>
            <rect x="370" y="30" width="100" height="40" fill="#c0ffc0" rx="8" />
            <text x="420" y="55" textAnchor="middle" fontSize="16">Facebook</text>
            <polygon points="110,50 130,50 130,55 110,55" fill="#888" />
            <polygon points="230,50 250,50 250,55 230,55" fill="#888" />
            <polygon points="350,50 370,50 370,55 350,55" fill="#888" />
          </g>
        </svg>
      </div>
      <ul style={{ fontSize: '1rem', marginLeft: '1rem' }}>
        <li><strong>SixDegrees (1997):</strong> First social network, allowed users to connect and send messages.</li>
        <li><strong>Friendster (2002):</strong> Popularized the idea of online friends and social circles.</li>
        <li><strong>Myspace (2003):</strong> Focused on music and personal profiles, huge cultural impact.</li>
        <li><strong>Facebook (2004):</strong> Revolutionized social networking, now a global platform.</li>
      </ul>
      <p style={{ marginTop: '1.5rem', fontStyle: 'italic', color: '#555' }}>
        Lesson: Don’t be afraid to build on existing ideas. Innovation is a journey, not a single leap.
      </p>
    </section>
  );
};

export default FacebookStory;
