
import React from 'react';
import PDFGenerator from '@/components/PDFGenerator';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            PDF Report Generator
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Generate and download flight charges reports in PDF format
          </p>
        </div>
        
        <div className="mt-10">
          <PDFGenerator />
        </div>
        
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>This application generates PDF reports similar to the billing run reports for flight charges.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
