import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import CourseCatalog from './components/CourseCatalog';
import CurriculumOverview from './components/CurriculumOverview';
import InstructorProfile from './components/InstructorProfile';
import ToolkitPerks from './components/ToolkitPerks';
import StudentGallery from './components/StudentGallery';
import PricingSection from './components/PricingSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CoursePreviewModal from './components/CoursePreviewModal';
import CheckoutDrawer from './components/CheckoutDrawer';
import { COURSES } from './data/coursesData';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(COURSES[0]);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewCourse, setPreviewCourse] = useState(COURSES[0]);

  const handleEnrollClick = (course) => {
    if (course) {
      setSelectedCourse(course);
    } else {
      setSelectedCourse(COURSES[0]);
    }
    setIsCheckoutOpen(true);
  };

  const handleOpenPreview = (course) => {
    if (course) {
      setPreviewCourse(course);
    } else {
      setPreviewCourse(COURSES[0]);
    }
    setIsPreviewOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#07080c] text-slate-100 flex flex-col selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* Navigation */}
      <Navbar 
        onEnrollClick={handleEnrollClick}
        onOpenPreview={handleOpenPreview}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onEnrollClick={handleEnrollClick}
          onOpenPreview={handleOpenPreview}
        />

        {/* The Core Interactive Before / After Image Comparison Slider */}
        <BeforeAfterSlider 
          onEnrollClick={handleEnrollClick}
        />

        {/* Masterclass Courses Catalog */}
        <CourseCatalog 
          onEnrollClick={handleEnrollClick}
          onOpenPreview={handleOpenPreview}
        />

        {/* Complete Curriculum Breakdown (6 Modules) */}
        <CurriculumOverview 
          onEnrollClick={handleEnrollClick}
          onOpenPreview={handleOpenPreview}
        />

        {/* MasterClass Style Instructor Spotlight */}
        <InstructorProfile 
          onEnrollClick={handleEnrollClick}
        />

        {/* Included Student Toolkit (Presets, RAWs, Discord) */}
        <ToolkitPerks />

        {/* Verified Student Transformation Reviews */}
        <StudentGallery 
          onEnrollClick={handleEnrollClick}
        />

        {/* Transparent Lifetime Pricing */}
        <PricingSection 
          onEnrollClick={handleEnrollClick}
        />

        {/* Frequently Asked Questions */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer 
        onEnrollClick={handleEnrollClick}
      />

      {/* Interactive Video Preview Modal */}
      <CoursePreviewModal 
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        course={previewCourse}
        onEnrollClick={handleEnrollClick}
      />

      {/* Interactive Checkout & Enrollment Drawer */}
      <CheckoutDrawer 
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        selectedCourse={selectedCourse}
      />
    </div>
  );
}
