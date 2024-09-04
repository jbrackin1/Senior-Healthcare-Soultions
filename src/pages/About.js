// About.js
/** @format */

// src/pages/About.js
import React from "react";
import styled from "styled-components";

// Styled Components
const AboutContainer = styled.main`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  color: ${({ theme }) => theme.colors.text};
  font-family: "Open Sans", sans-serif;
  line-height: 1.8;
  max-width: 800px;
  margin: 2rem auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-family: "Libre Baskerville", serif;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.accent};
  text-align: center;
`;

const Paragraph = styled.p`
  margin-bottom: 1.5rem;
  font-size: 1rem;
`;

const TeamSection = styled.section`
  margin-top: 2rem;
`;

const TeamMember = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
`;

const TeamImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 1rem;
`;

const TeamBio = styled.div`
  font-size: 1rem;
`;

const ValueSection = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  line-height: 1.6;
`;

// About Component
const About = () => {
  return (
    <AboutContainer>
      {/* Company Mission */}
      <SectionTitle>Our Mission</SectionTitle>
      <Paragraph>
        At [Website Name], we believe that everyone deserves access to health insurance that truly covers their needs, without the stress and confusion of hidden exclusions or unwanted solicitations. Our mission is to provide a quick, easy way for patients to find the best coverage for their specific conditions, without feeling overwhelmed or harassed. 
      </Paragraph>
      <Paragraph>
        Our founder, a dedicated physician, was inspired to create this platform after witnessing her own family struggle with the complexities of finding adequate health insurance. Seeing firsthand how difficult it was for her mother-in-law to navigate insurance policies that didn't cover her specific condition, and observing countless patients face similar challenges, she realized that something needed to change. 
      </Paragraph>
      <Paragraph>
        That's why we created [Website Name]—a place where patients can compare insurance plans tailored to their needs, without having to provide personal information like phone numbers or emails unless they choose to. We are committed to transparency, privacy, and compassion.
      </Paragraph>

      {/* Team Members */}
      <TeamSection>
        <SectionTitle>Meet Our Team</SectionTitle>
        <TeamMember>
          <TeamImage src="/assets/images/team-member1.jpg" alt="Dr. Jane Smith" />
          <TeamBio>
            <strong>Dr. Jane Smith</strong> – Founder and CEO, passionate physician and advocate for patient-centered care. With over 15 years of experience in the medical field, she brings a wealth of knowledge and a deep commitment to helping patients navigate the complexities of healthcare.
          </TeamBio>
        </TeamMember>
        {/* Add more team members as needed */}
      </TeamSection>

      {/* History */}
      <SectionTitle>Our History</SectionTitle>
      <Paragraph>
        Founded in 2023, [Website Name] was born out of a desire to simplify the process of finding reliable insurance coverage. Our journey began with a simple idea: to create a platform that is different from others—a platform that genuinely cares about the people it serves.
      </Paragraph>

      {/* Values and Credibility */}
      <SectionTitle>Our Values</SectionTitle>
      <ValueSection>
        <Paragraph>
          At [Website Name], we are committed to:
        </Paragraph>
        <ul>
          <li>Compassionate Service: We care deeply about our users and strive to provide them with the best possible experience.</li>
          <li>Transparency: No hidden fees, no hidden terms. Our goal is to help you make informed decisions.</li>
          <li>Privacy First: Your personal information is yours. You decide when and if you want to share it.</li>
          <li>Integrity: We do not sell your information. Ever. We only partner with trusted organizations that share our values.</li>
        </ul>
      </ValueSection>

      {/* Credibility */}
      <SectionTitle>Our Credibility</SectionTitle>
      <Paragraph>
        We are proud to partner with leading healthcare organizations and have received recognition for our commitment to patient advocacy and transparent practices. Our partnerships and certifications are a testament to our dedication to building a platform you can trust.
      {/* get the 11 providers and put their logos here */}
      </Paragraph>
    </AboutContainer>
  );
};

export default About;


// Purpose: Provides background information about the website, its mission, and the team.
// Content:
// Company Mission: A statement about what you do and why it matters.
// Team Members: Photos and bios of key team members or contributors.
// History: Brief background of how the site was founded or the organization’s history.
// Values and Credibility: Any certifications, partnerships, or recognitions.
